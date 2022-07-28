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

	useEffect(() => {
		fetchAppointments()
	}, [fetchAppointments])
	
	const appointmentsList: JSX.Element[] = appointmentList.map(
		(appointment: AppointmentInterface): JSX.Element => (
			<AppointmentInfo appointment={appointment} key={appointment.id} />
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
				{appointmentsList}
			</ul>
		</div>
	)
}

export default App