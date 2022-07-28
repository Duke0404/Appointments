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

const App = (): JSX.Element => {
	//States
	const [appointmentList, setAppointmentList] = useState<AppointmentInterface[]>([])

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

	//Render variables
	const appointmentListRender: JSX.Element[] = appointmentList.map(
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

			<Search />

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