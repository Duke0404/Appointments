//Boilerplate
import React, { useState } from "react"

//Icons
import { IoMdAdd, IoMdClose } from "react-icons/io"

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
			{
				!toggleForm &&
				<button
					onClick={() => setToggleForm(true)}
					className="
						bg-accent-secondary-1
						py-3
						px-5
						text-text-1
						rounded-full
						fixed
						right-4
						bottom-5
						drop-shadow-lg
						z-10
						md:top-6
						md:bottom-auto
						hover:bg-accent-secondary-2
						active:shadow-xl
					"
				>
					<IoMdAdd className="inline mb-1" /> Add New
				</button>
			}

			{
				toggleForm &&

				<>
					<div
						className="
							bg-black
							opacity-75
							z-30
							fixed
							top-0
							left-0
							h-screen
							w-screen
						"
					></div>

					<div
						className="
							fixed
							z-40
							bg-background-2
							dark:bg-background-2-dark
							text-text-1
							dark:text-text-1-dark
							px-10
							py-6
							top-1/2
							-translate-y-1/2
							left-1/2
							-translate-x-1/2
							shadow-lg
							rounded-3xl
							w-4/5
							flex
							flex-col
							gap-1
							sm:gap-4
						"
					>
						<div
							className="
								sm:grid
								sm:grid-cols-3
								sm:gap-4
								sm:items-center
							"
						>
							<label
								htmlFor="ownerName"
								className="
									text-sm
								"
							>
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
									className="
										w-full
										bg-background-2
										dark:bg-background-2-dark
										text-text-1
										dark:text-text-1-dark
										rounded-full
										py-2
										px-4
										border-2
										border-text-1
										dark:border-text-1-dark
									"
								/>
							</div>
						</div>

						<div
							className="
								sm:grid
								sm:grid-cols-3
								sm:gap-4
								sm:items-center
							"
						>
							<label
								htmlFor="ownerName"
								className="
									text-sm
								"
							>
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
									className="
										w-full
										bg-background-2
										dark:bg-background-2-dark
										text-text-1
										dark:text-text-1-dark
										rounded-full
										py-2
										px-4
										border-2
										border-text-1
										dark:border-text-1-dark
									"
								/>
							</div>
						</div>

						<div
							className="
								sm:grid
								sm:grid-cols-3
								sm:gap-4
								sm:items-center
							"
						>
							<label
								htmlFor="ownerName"
								className="
									text-sm
								"
							>
								Date
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
									className="
										w-full
										bg-background-2
										dark:bg-background-2-dark
										text-text-1
										dark:text-text-1-dark
										rounded-full
										py-2
										px-4
										border-2
										border-text-1
										dark:border-text-1-dark
									"
								/>
							</div>
						</div>

						<div
							className="
								sm:grid
								sm:grid-cols-3
								sm:gap-4
								sm:items-center
							"
						>
							<label
								htmlFor="ownerName"
								className="
									text-sm
								"
							>
								Time
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
									className="
										w-full
										bg-background-2
										dark:bg-background-2-dark
										text-text-1
										dark:text-text-1-dark
										rounded-full
										py-2
										px-4
										border-2
										border-text-1
										dark:border-text-1-dark
									"
								/>
							</div>
						</div>

						<div
							className="
								sm:grid
								sm:grid-cols-3
								sm:gap-4
								sm:items-center
							"
						>
							<label
								htmlFor="ownerName"
								className="
									text-sm
								"
							>
								Notes
							</label>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<textarea
									onChange={
										(event: React.ChangeEvent<HTMLTextAreaElement>): void => {
											setFormData({...formData, aptNotes: event.target.value})
										}
									}
									value={formData.aptNotes}
									name="aptNotes" id="aptNotes"
									placeholder="Detailed comments about the condition of the pet"
									className="
										w-full
										bg-background-2
										dark:bg-background-2-dark
										text-text-1
										dark:text-text-2-dark
										rounded-3xl
										py-2
										px-4
										border-2
										border-text-1
										dark:border-text-1-dark
										h-32
									"
								/>
							</div>
						</div>

						<div className="pt-5">
							<div
								className="
									flex
									justify-end
									gap-2
								"
							>
								<button
									onClick={() => setToggleForm(false)}
									type="submit"
									className="
										bg-accent-tertiary-1
										py-3
										px-5
										text-text-1
										rounded-full
										drop-shadow-lg
										z-10
										md:bottom-auto
										hover:bg-accent-tertiary-2
										active:shadow-xl
									"
								>
									Cancel <IoMdClose className="inline mb-1" />
								</button>

								<button
									onClick={formSubmitHandler}
									type="submit"
									className="
										bg-accent-secondary-1
										py-3
										px-5
										text-text-1
										rounded-full
										drop-shadow-lg
										z-10
										md:bottom-auto
										hover:bg-accent-secondary-2
										active:shadow-xl
									"
								>
									Submit <IoMdAdd className="inline mb-1" />
								</button>
							</div>
						</div>
					</div>
				</>
			}
		</>
	)
}

export default AddAppointment
