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
enum sortByEnum {
	"petName" = 1,
	"ownerName" = 2,
	"aptDate" = 3
}

enum orderByEnum {
	"ascending" = 1,
	"descending" = -1
}

const App = (): JSX.Element => {
	//States
	const [appointmentList, setAppointmentList] = useState<AppointmentInterface[]>([])
	const [searchQuery, setSearchQuery] = useState<string>("")
	const [sortBy, setSortBy] = useState<sortByEnum>(1)
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

	//Search Filtered List of Appointments
	const filteredAppointmentList: AppointmentInterface[] = appointmentList.filter(
		(appointment: AppointmentInterface): boolean =>
			appointment.petName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			appointment.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			appointment.aptNotes.toLowerCase().includes(searchQuery.toLowerCase())
	).sort(
		(a: AppointmentInterface, b: AppointmentInterface): number => 
			a[sortByEnum[sortBy]] > b[sortByEnum[sortBy]] ? orderBy : -orderBy
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

			<AddAppointment />

			<Search searchQuery={searchQuery} searchQueryChangeHandler={searchQueryChangeHandler} />

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