//Icons
import { BiCheck } from "react-icons/bi"

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
		<div className="origin-top-right absolute right-0 mt-2 w-56
		rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
		<div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
			<div onClick={(): void => {props.sortByChangeHandler(1)}}
				className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
				role="menuitem">Pet Name {props.sortBy === 1 && <BiCheck />}</div>
			<div onClick={(): void => {props.sortByChangeHandler(2)}}
				className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
				role="menuitem">Owner Name {props.sortBy === 2 && <BiCheck />}</div>
			<div onClick={(): void => {props.sortByChangeHandler(3)}}
				className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
				role="menuitem">Date {props.sortBy === 3 && <BiCheck />}</div>
			<div onClick={(): void => {props.orderByChangeHandler(1)}}
				className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
				role="menuitem">Asc {props.orderBy === 1 && <BiCheck />}</div>
			<div onClick={(): void => {props.orderByChangeHandler(-1)}}
				className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
				role="menuitem">Desc {props.orderBy === -1 && <BiCheck />}</div>
		</div>
	</div>
)

export default DropDown