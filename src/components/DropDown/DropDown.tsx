//Icons
import { BiCheck } from "react-icons/bi"
import { IoMdCheckmark } from "react-icons/io"

//Enumerations
export enum orderByEnum {
	"ascending" = 1,
	"descending" = -1
}

export enum sortByEnum {
	"petName" = 1,
	"ownerName" = 2,
	"aptDate" = 3
}

//Interfaces
interface DropDownProps {
	toggleDropdown: boolean
	orderBy: orderByEnum
	orderByChangeHandler: (orderBy: orderByEnum) => void
	sortBy: sortByEnum
	sortByChangeHandler: (sortBy: sortByEnum) => void
}

const DropDown = (props: DropDownProps): JSX.Element => !props.toggleDropdown ? <></> : (
		<div
			className="
				z-20
				bg-background-3
				dark:bg-background-3-dark
				w-60
				p-3
				absolute
				top-16
				right-0
				shadow-lg
				rounded-3xl
			"
		>
		<div
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="options-menu"
			className="
				flex
				flex-col
				gap-2
				text-text-1
				dark:text-text-1-dark
			"	
		>
			<div
				onClick={(): void => {props.sortByChangeHandler(1)}}
				role="menuitem"
				className="
					flex
					justify-between
					items-center
					text-sm
					py-3
					px-4
					cursor-pointer
					rounded-full
					hover:bg-accent-tertiary-2
				"
			>
				Pet Name {props.sortBy === 1 && <IoMdCheckmark />}
			</div>

			<div
				onClick={(): void => {props.sortByChangeHandler(2)}}
				role="menuitem"
				className="
					flex
					justify-between
					items-center
					text-sm
					py-3
					px-4
					cursor-pointer
					rounded-full
					hover:bg-accent-tertiary-2
				"
			>
				Owner Name {props.sortBy === 2 && <BiCheck />}
			</div>

			<div
				onClick={(): void => {props.sortByChangeHandler(3)}}
				role="menuitem"
				className="
					flex
					justify-between
					items-center
					text-sm
					py-3
					px-4
					cursor-pointer
					rounded-full
					hover:bg-accent-tertiary-2
				"
			>
				Date {props.sortBy === 3 && <BiCheck />}
			</div>

			<div
				onClick={(): void => {props.orderByChangeHandler(1)}}
				role="menuitem"
				className="
					flex
					justify-between
					items-center
					text-sm
					py-3
					px-4
					cursor-pointer
					rounded-full
					hover:bg-accent-tertiary-2
				"
			>
				Ascending {props.orderBy === 1 && <BiCheck />}
			</div>

			<div
				onClick={(): void => {props.orderByChangeHandler(-1)}}
				role="menuitem"
				className="
					flex
					justify-between
					items-center
					text-sm
					py-3
					px-4
					cursor-pointer
					rounded-full
					hover:bg-accent-tertiary-2
				"
			>
				Descending {props.orderBy === -1 && <BiCheck />}
			</div>
		</div>
	</div>
)

export default DropDown