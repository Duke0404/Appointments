//Boilerplate
import React, { useState } from "react"

//Icons
import { IoMdAddCircleOutline } from "react-icons/io"

//Interfaces
import { AppointmentInterface } from "../AppointmentInfo/AppointmentInfo"
interface AppointmentWithTimeInterface extends AppointmentInterface {
	aptTime: string
}

interface AddAppointmentProps {
	lastId: number
	formSave: (appointment: AppointmentInterface) => void
}

const AddAppointment = (props: AddAppointmentProps): JSX.Element => {
	//Empty form
	const emptyForm: AppointmentWithTimeInterface = {
		id: 0,
		ownerName: "",
		petName: "",
		aptDate: "",
		aptTime: "",
		aptNotes: ""
	}

	//States
	const [toggleForm, setToggleForm] = useState<boolean>(false)
	const [formData, setFormData] = useState<AppointmentWithTimeInterface>(emptyForm)

	//Fuctions
	const formSubmitHandler = (): void => {
		const modifiedFormData: AppointmentInterface = {...formData, id: props.lastId + 1, aptDate: formData.aptDate + " " + formData.aptTime}
		props.formSave(modifiedFormData)
		setFormData(emptyForm)
		setToggleForm(false)
	}

	return (
		<>
			<button
				onClick={() => setToggleForm((value: boolean) => !value)}
				className="
					bg-accent-secondary-1
					py-3
					px-5
					rounded-full
					fixed
					right-2
					bottom-5
					md:top-3
					md:bottom-auto
					drop-shadow-md
					hover:bg-accent-secondary-2
					active:shadow-lg
				"
			>
				<IoMdAddCircleOutline className="inline mb-1" /> Add New
			</button>

			{
				toggleForm &&

				<div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
					<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
						<label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
							Owner Name
						</label>
						<div className="mt-1 sm:mt-0 sm:col-span-2">
							<input
								onChange={
									(event: React.ChangeEvent<HTMLInputElement>): void => {
										setFormData({...formData, ownerName: event.target.value})
									}
								}
								value={formData.ownerName}
								type="text" name="ownerName" id="ownerName"
								className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 	sm:max-w-xs 	sm:text-sm border-gray-300 rounded-md" />
						</div>
					</div>

					<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
						<label htmlFor="petName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
							Pet Name
						</label>
						<div className="mt-1 sm:mt-0 sm:col-span-2">
							<input
								onChange={
									(event: React.ChangeEvent<HTMLInputElement>): void => {
										setFormData({...formData, petName: event.target.value})
									}
								}
								value={formData.petName}
								type="text" name="petName" id="petName"
								className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 	sm:max-w-xs 	sm:text-sm border-gray-300 rounded-md" />
						</div>
					</div>

					<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
						<label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
							Apt Date
						</label>
						<div className="mt-1 sm:mt-0 sm:col-span-2">
							<input
								onChange={
									(event: React.ChangeEvent<HTMLInputElement>): void => {
										setFormData({...formData, aptDate: event.target.value})
									}
								}
								value={formData.aptDate}
								type="date" name="aptDate" id="aptDate"
								className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 	sm:max-w-xs 	sm:text-sm border-gray-300 rounded-md" />
						</div>
					</div>

					<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
						<label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
							Apt Time
						</label>
						<div className="mt-1 sm:mt-0 sm:col-span-2">
							<input
								onChange={
									(event: React.ChangeEvent<HTMLInputElement>): void => {
										setFormData({...formData, aptTime: event.target.value})
									}
								}
								value={formData.aptTime}
								type="time" name="aptTime" id="aptTime"
								className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 	sm:max-w-xs 	sm:text-sm border-gray-300 rounded-md" />
						</div>
					</div>

					<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
						<label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
							Appointment Notes
						</label>
						<div className="mt-1 sm:mt-0 sm:col-span-2">
							<textarea
								onChange={
									(event: React.ChangeEvent<HTMLTextAreaElement>): void => {
										setFormData({...formData, aptNotes: event.target.value})
									}
								}
								value={formData.aptNotes}
								id="aptNotes" name="aptNotes" rows={3}
								className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full 	sm:text-sm 	border-gray-300 rounded-md" placeholder="Detailed comments about the condition">
							</textarea>
						</div>
					</div>


					<div className="pt-5">
						<div className="flex justify-end">
							<button
								onClick={formSubmitHandler}
								type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border 	border-transparent 	shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 	hover:bg-blue-700 focus:outline-none 	focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
								Submit
							</button>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default AddAppointment
