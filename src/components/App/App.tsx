//Boilerplate
import { useState, useEffect, useCallback } from 'react'

//Icons
import { BiCalendar } from 'react-icons/bi'

//Components
import Search from "../Search/Search"
import AddAppointment from '../AddAppointment/AddAppointment'
import AppointmentInfo from '../AppointmentInfo/AppointmentInfo'

//Interfaces
import { AppointmentInterface } from "../AppointmentInfo/AppointmentInfo"

//Enumerations
import { sortByEnum } from "../DropDown/DropDown"
import { orderByEnum } from "../DropDown/DropDown"
import { getAllByTestId } from '@testing-library/react'

const App = (): JSX.Element => {
	//States
	const [appointmentList, setAppointmentList] = useState<AppointmentInterface[]>([])
	const [searchQuery, setSearchQuery] = useState<string>("")
	const [sortBy, setSortBy] = useState<sortByEnum>(3)
	const [orderBy, setOrderBy] = useState<orderByEnum>(1)

	//Callbacks
	const fetchAppointments = useCallback(async () => {
		const response: Response = await fetch("./data/data.json")
		const payload: AppointmentInterface<string>[] = await response.json()

		const changedPayload: AppointmentInterface[] = payload.map(
			(element: AppointmentInterface<string>) => (
				{...element, id: +element.id}
			)
		)

		setAppointmentList(changedPayload)
	}, [])

	//Effects
	useEffect(() => {
		fetchAppointments()
	}, [fetchAppointments])
	
	//Functions
	const deleteAppointment = (id: number): void => {
		setAppointmentList(
			(list: AppointmentInterface[]) =>
				list.filter(
					(element: AppointmentInterface) =>
						element.id !== id
				)
		)
	}

	const searchQueryChangeHandler = (query: string): void => {
		setSearchQuery(query)
	}

	const orderByChangeHandler = (orderBy: orderByEnum): void => {
		setOrderBy(orderBy)
	}

	const sortByChangeHandler = (sortBy: sortByEnum): void => {
		setSortBy(sortBy)
	}

	const formSave = (newAppointment: AppointmentInterface): void => {
		setAppointmentList((list: AppointmentInterface[]) => [...list, newAppointment])
	}

	const lastId = appointmentList.reduce(
		(max: number, current: AppointmentInterface) => current.id > max ? current.id : max, 0
	)

	//Search Filtered List of Appointments
	const filteredAppointmentList: AppointmentInterface[] = appointmentList.filter(
		(appointment: AppointmentInterface): boolean =>
			appointment.petName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			appointment.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			appointment.aptNotes.toLowerCase().includes(searchQuery.toLowerCase())
	).sort(
		(a: AppointmentInterface, b: AppointmentInterface): number => {
			const sortByText = sortByEnum[sortBy] as keyof Omit<AppointmentInterface, "id" | "aptNotes">
				
			return a[sortByText].toLowerCase() > b[sortByText].toLowerCase() ? orderBy : -orderBy
		}
	)

	//Render variables
	const appointmentListRender: JSX.Element[] = filteredAppointmentList.map(
		(appointment: AppointmentInterface): JSX.Element => (
			<AppointmentInfo appointment={appointment} deleteAppointment={deleteAppointment} key={appointment.id} />
		)
	)

	

	return (
		<div className='
			container
			mx-auto
			mt-4
			font-thin
		'>
			<h1 className='text-5xl mb-3'>
				<BiCalendar className='
					inline-block
					text-red-400
					align-top
				'/> Hello World
			</h1>

			<AddAppointment
				lastId={lastId}
				formSave={formSave}
			/>

			<Search
				searchQuery={searchQuery}
				searchQueryChangeHandler={searchQueryChangeHandler}
				orderBy={orderBy}
				orderByChangeHandler={orderByChangeHandler}
				sortBy={sortBy}
				sortByChangeHandler={sortByChangeHandler}
			/>

			<ul className='
				divide-y
				divide-gray-200
			'>
				{appointmentListRender}
			</ul>
		</div>
	)
}

export default App