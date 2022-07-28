//Icons
import { BiTrash } from "react-icons/bi"

//Interfaces
interface AppointmentInterface {
	"id": string,
    "petName": string,
    "ownerName": string,
    "aptNotes": string,
    "aptDate": string
}

interface AppointmentInfoProps {
    appointment: AppointmentInterface
    key: number
}

const AppointmentInfo = (props: AppointmentInfoProps) =>
    <li className="px-3 py-3 flex items-start" key={props.key}>
		<button type="button" className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500hover:bg-yellow-700focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
			<BiTrash />
		</button>

		<div className="flex-grow">
			<div className="flex items-center">
				<span className="flex-none font-medium text-2xl text-blue-500">{props.appointment.petName}</span>
				<span className="flex-grow text-right">{props.appointment.aptDate}</span>
			</div>

			<div>
				<b className="font-bold text-blue-500">Owner:</b> {props.appointment.ownerName}
			</div>

			<div className="leading-tight">{props.appointment.aptNotes}</div>
		</div>
	</li>

export default AppointmentInfo