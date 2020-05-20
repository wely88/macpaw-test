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

	const categories = [
      { value: "Home", link: "/" },
      { value: "Be a Pro", link: "/pro" },
      { value: "About", link: "/about" },
      { value: "Careers", link: "/careers" }
    ];

    let [currentCategory, setCurrentCategory] = useState("");

    function setCategory(category) {
		setCurrentCategory(category);
	}
	console.log(currentCategory)


	return(
		<Form>
			<Radio text="Random" />
			<Radio text="From caterogies"/>
				<CaterogiesList>
					{categories.map(category => {
	                    return (
						<CategoryItem 
							id={category.text} 
							text={category.value} 
							onClick={() =>
								setCategory(category.value)
							}
							isActive={
								category.value == currentCategory
									? "yes"
									: "no"
							}
						/>
						)}
					)}	
				</CaterogiesList>
			<Radio text="Search"/>
				<Input placeholder="Free text search..."/>
			<ContainerButton>
				<GetJokeButton />
			</ContainerButton>
		</Form>
	);
}

export default SearchForm;

