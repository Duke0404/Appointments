//Icons
import { IoTrashOutline } from "react-icons/io5"

//Interfaces
export interface AppointmentInterface<idType = number> {
	"id": idType,
    "petName": string,
    "ownerName": string,
    "aptNotes": string,
    "aptDate": string
}

interface AppointmentInfoProps {
    appointment: AppointmentInterface
	deleteAppointment: (id: number) => void
    key: number
}

const AppointmentInfo = (props: AppointmentInfoProps) => (
    <li
		className="
			bg-background-2
			dark:bg-background-2-dark
			p-4
			rounded-xl
			drop-shadow-md
			flex
			items-center
			gap-4
		"
		key={props.appointment.id}
	>
		<button
			onClick={() => props.deleteAppointment(props.appointment.id)}
			type="button"
			className="
				bg-accent-tertiary-1
				p-4
				text-text-1
				rounded-full
				drop-shadow-lg
				md:bottom-auto
				hover:bg-accent-tertiary-2
				active:shadow-xl
			"
		>
			<IoTrashOutline />
		</button>

		<div className="flex-grow">
			<div className="flex items-center">
				<span
					className="
						text-xl
						font-semibold
					"
				>
					{props.appointment.petName}
				</span>

				<span className="flex-grow text-right">{props.appointment.aptDate}</span>
			</div>

			<div className="italic text-accent-secondary-2 font-semibold">
				{props.appointment.ownerName}
			</div>

			<div>{props.appointment.aptNotes}</div>
		</div>
	</li>
)

export default AppointmentInfo