//Icons
import { BiCalendar, BiTrash } from 'react-icons/bi'

//Data
import appointmentsData from '../../Data/data.json'

//Components
import Search from "../Search/Search"
import AddAppointment from '../AddAppointment/AddAppointment'

//Interfaces
interface AppointmentInterface {
	"id": string,
    "petName": string,
    "ownerName": string,
    "aptNotes": string,
    "aptDate": string
}

const App = (): JSX.Element => {
	const appointmentsList: JSX.Element[] = appointmentsData.map(
		(appointment: AppointmentInterface): JSX.Element => (
			<li className="px-3 py-3 flex items-start" key={appointment.id}>
				<button type="button" className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500hover:bg-yellow-700focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
					<BiTrash />
				</button>

				<div className="flex-grow">
					<div className="flex items-center">
						<span className="flex-none font-medium text-2xl text-blue-500">{appointment.petName}</span>
						<span className="flex-grow text-right">{appointment.aptDate}</span>
					</div>

					<div>
						<b className="font-bold text-blue-500">Owner:</b> {appointment.ownerName}
					</div>

					<div className="leading-tight">{appointment.aptNotes}</div>
				</div>
			</li>
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