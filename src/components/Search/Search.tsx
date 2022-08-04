//Boilerplate
import { useState } from "react"

//Icons
import { IoSearch } from "react-icons/io5"
import { IoFilter } from 'react-icons/io5'

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
				relative
			">
				<div className="
					absolute
					inset-y-0
					left-0
					pl-3
					flex
					items-center
					pointer-events-none
				">
					<IoSearch />

					<label htmlFor="query" className="sr-only" />
				</div>

				<input
					onChange={
						(event: React.ChangeEvent<HTMLInputElement>): void => {
							props.searchQueryChangeHandler(event.target.value)
						}
					}
					value={props.searchQuery}
					type="text"
					name="query"
					id="query"
					className="
						w-4/5
						bg-background-1
						dark:bg-background-1-dark
						text-text-1
						dark:text-text-1-dark
						rounded-full
						py-3
						pl-9
						pr-5
						border-2
						border-text-1
						dark:border-text-1-dark
					"
					placeholder="Search"
				/>

				<div className="absolute inset-y-0 right-0 flex items-center">
					<div>
						<button type="button" 
							onClick={() => setToggleDropdown((value: boolean) => !value)}
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
							id="options-menu"
							aria-haspopup="true"
							aria-expanded="true"
						>
							Sort <IoFilter className="inline mb-1" />
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
