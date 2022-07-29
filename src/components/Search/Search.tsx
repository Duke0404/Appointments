//Boilerplate
import { useState } from "react"

//Icons
import { BiSearch, BiCaretDown } from 'react-icons/bi'

//Components
import DropDown from '../DropDown/DropDown'

//Enumerations
import { sortByEnum } from "../DropDown/DropDown"
import { orderByEnum } from "../DropDown/DropDown"

//Interfaces
interface SearchProps {
	searchQuery: string
	searchQueryChangeHandler: (query: string) => void
	orderBy: orderByEnum
	orderByChangeHandler: (orderBy: orderByEnum) => void
	sortBy: sortByEnum
	sortByChangeHandler: (sortBy: sortByEnum) => void
}

const Search = (props: SearchProps): JSX.Element => {
	//States
	const [toggleDropdown, setToggleDropdown] = useState<boolean>(false)

	return (
		<div className="py-5">
			<div className="
				mt-1
				relative
				rounded-md
				shadow-sm"
			>
				<div className="
					absolute
					inset-y-0
					left-0
					pl-3
					flex
					items-center
					pointer-events-none
				">
					<BiSearch />

					<label htmlFor="query" className="sr-only" />
				</div>

				<input
					onChange={
						(event: React.ChangeEvent<HTMLInputElement>): void => {
							props.searchQueryChangeHandler(event.target.value)
						}
					}
					value={props.searchQuery}
					type="text" name="query" id="query" className="
					pl-8 rounded-md
					focus:ring-indigo-500
					focus:border-indigo-500
					block
					w-full
					sm:text-sm
					border-gray-300
				" placeholder="Search" />

				<div className="absolute inset-y-0 right-0 flex items-center">
					<div>
						<button type="button" 
							onClick={() => setToggleDropdown((value: boolean) => !value)}
							className="
							justify-center
							px-4 py-2
							bg-blue-400 border-2
							border-blue-400
							text-sm
							text-white
							hover:bg-blue-700
							focus:outline-none
							focus:ring-2
							focus:ring-offset-2
							flex items-center
						" id="options-menu" aria-haspopup="true" aria-expanded="true">
							Sort By <BiCaretDown className="ml-2" />
						</button>

						<DropDown
							toggleDropdown={toggleDropdown}
							orderBy={props.orderBy}
							orderByChangeHandler={props.orderByChangeHandler}
							sortBy={props.sortBy}
							sortByChangeHandler={props.sortByChangeHandler}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Search
