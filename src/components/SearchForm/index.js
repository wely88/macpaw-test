import React from 'react';
import { setSearchType, setCurrentCategory } from '../../actions';
import { connect } from 'react-redux'

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

    //let [ currentCategory, setCurrentCategory ] = useState("");

    const { categories, onClick, dispatch, searchType, currentCategory, onChange } = props;

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
					dispatch(setSearchType("random"))
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
					dispatch(setSearchType("category"))
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
								dispatch(setCurrentCategory(category))
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
					dispatch(setSearchType("search"))
				}
			/>
			{searchType === "search" ? 
				<Input onChange={onChange} placeholder="Free text search..."/> : null
			}	
			<ContainerButton>
				<GetJokeButton onClick={onClick}/>
			</ContainerButton>
		</Form>
	);
}

export default connect()(SearchForm);

