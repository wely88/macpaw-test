import React, { useState } from 'react';

import CategoryItem from './category'

import { 
	Form, 
	CaterogiesList, 
	ContainerButton,
	Input
} from './styles';

import Radio from '../Radio';
import GetJokeButton from '../GetJokeButton';

function SearchForm(props) {

    let [ searchType, setSearchType ] = useState("");
    let [ currentCategory, setCurrentCategory ] = useState("");

    const { categories, onClick } = props;

    function setCategory(category) {
		setCurrentCategory(category);
	}
	console.log(currentCategory)

	return(
		<Form>
			<Radio 
				text="Random" 
				isChecked={
					searchType === "random"
						? true
						: false
				}
				onChange={() =>
					setSearchType("random")
				}
			/>
			<Radio 
				text="From caterogies"
				isChecked={
					searchType === "category"
						? true
						: false
				}
				onChange={() =>
					setSearchType("category")
				}
			/>
			{searchType === "category" ? 
				<CaterogiesList>
					{categories.map(category => {
	                    return (
						<CategoryItem 
							id={category} 
							key={category}
							text={category} 
							onClick={() =>
								setCategory(category)
							}
							isActive={
								category === currentCategory
									? "yes"
									: "no"
							}
						/>
						)}
					)}	
				</CaterogiesList> : null 
			}	
			<Radio 
				text="Search"
				isChecked={
					searchType === "search"
						? true
						: false
				}
				onChange={() =>
					setSearchType("search")
				}
			/>
			{searchType === "search" ? 
				<Input placeholder="Free text search..."/> : null
			}	
			<ContainerButton>
				<GetJokeButton onClick={onClick}/>
			</ContainerButton>
		</Form>
	);
}

export default SearchForm;

