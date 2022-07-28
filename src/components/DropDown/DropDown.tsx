//Icons
import { BiCheck } from "react-icons/bi"

//Interfaces
interface DropDownProps {
	toggleDropdown: boolean
}

const DropDown = (props: DropDownProps): JSX.Element => !props.toggleDropdown ? <></> : (
		<div className="origin-top-right absolute right-0 mt-2 w-56
		rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
		<div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
			<div
				className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
				role="menuitem">Pet Name <BiCheck /></div>
			<div
				className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
				role="menuitem">Owner Name  <BiCheck /></div>
			<div
				className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
				role="menuitem">Date <BiCheck /></div>
			<div
				className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
				role="menuitem">Asc <BiCheck /></div>
			<div
				className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
				role="menuitem">Desc <BiCheck /></div>
		</div>
	</div>
)

export default DropDown