import React, { useState, useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux'
//import PropTypes from 'prop-types';
import axios from 'axios';
import Header from '../../components/Header';
import TitleWithSubtitle from '../../components/TitleWithSubtitle';
import SearchForm from '../../components/SearchForm';
import Joke from '../../components/Joke';
import FavouriteJoke from '../../components/FavouriteJoke';

import { 
	Section, 
	GetJokeWrapper, 
	ContainerFlex, 
	ContainerGetJoke, 
	ContainerFavouriteJokes, 
	ContainerTitle,
	ContainerSearchForm,
	ContainerJokes,
	ContainerMobileShadow,
	FavouriteJokesList
} from './styles'


//Custom hook to fetch data 
const useHackerNewsApi = () => {
	const [data, setData] = useState();
	const [url, setUrl] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	 
	useEffect(() => {
	    const fetchData = async () => {
	      	setIsError(false);
	      	setIsLoading(true);
	 
	      	try {
	       		const result = await axios(url);
	 			
	        	setData(result.data.result ? result.data.result : result.data);
	     	} catch (error) {
	        	setIsError(true);
	      	}
	 
	      	setIsLoading(false);
	    };	
	 
	fetchData();

  	}, [url]);
  	return [{ data, isLoading, isError }, setUrl];
}


function App(props) {

	const { general } = props;
	const { searchType, currentCategory } = general;

	const [{ data, isLoading, isError }, doFetch] = useHackerNewsApi();

	const [ categories, setCategories ] = useState();
	const [ queryValue, setQueryValue ] = useState('');
	const [ randomJoke, setRandomJoke ] = useState();
	const [ isMobile, setIsMobile ] = useState(false);
	const [ isFavouriteOpen, setIsFavouriteOpen ] = useState(false);
	const [ isFavouriteOpenAnimation, setIsFavouriteOpenAnimation ] = useState(false);

//Get screen size to switch between Mobile and Web view	
	useLayoutEffect(() => {
	    function updateSize() {
	      if (window.innerWidth < 1024) {
	        setIsMobile(true);
	      } else {
	       	setIsMobile(false);
	      }
	    }  

	    window.addEventListener("resize", updateSize);
	    updateSize();
	    return () => window.removeEventListener("resize", updateSize);
  	}, []);

//Get jokes categories to render them in SearchForm
	useEffect(async (searchType) => {
		const fetchDataCategories = async () => {
		    const resultCategories = await axios(
		        'https://api.chucknorris.io/jokes/categories',
		    );
		 
		    setCategories(resultCategories.data);
		};
		fetchDataCategories()
 	}, []);

 	function handleInputValue(e) {
		setQueryValue(e.target.value);
	}

  	function showJoke(e) {
  		e.preventDefault();
  		switch(searchType) {
  			case 'random': 
	  			doFetch("https://api.chucknorris.io/jokes/random");
	  			break;

	  		case 'category': 
	  			doFetch(`https://api.chucknorris.io/jokes/random?category=${currentCategory}`);
	  			break;	

	  		case 'search': 
	  			doFetch(`https://api.chucknorris.io/jokes/search?query=${queryValue}`);
	  			break;

	  		default:
	  			console.log('hehe')	
  		}
  		
  	}  	

  	function handleIsFavouriteOpen() {
  		if (isFavouriteOpen) {
  			setIsFavouriteOpenAnimation(false);
  			setTimeout(() => 
  				setIsFavouriteOpen(false), 950
  			)} 
  		else { 
  			setIsFavouriteOpen(true);
  			setIsFavouriteOpenAnimation(true)	
  		}
  	}

 	
	return (
		<Section>
			<ContainerFlex>
				<ContainerGetJoke>
					<GetJokeWrapper>
						<Header isMobile={isMobile} onClick={handleIsFavouriteOpen} isFavouriteOpen={isFavouriteOpen} />
						<ContainerTitle>
							<TitleWithSubtitle />
						</ContainerTitle>
						<ContainerSearchForm>	
							<SearchForm categories={categories} onClick={showJoke} searchType={searchType} currentCategory={currentCategory} onChange={handleInputValue}/>
						</ContainerSearchForm>
							{data ? 
								<ContainerJokes>
									{data.map(item => {
										return <Joke jokeData={item} />
										})
									}
								</ContainerJokes>
							: null }	
					</GetJokeWrapper>
				</ContainerGetJoke>
				<ContainerMobileShadow isFavouriteOpen={isFavouriteOpen} isFavouriteOpenAnimation={isFavouriteOpenAnimation}>
					<ContainerFavouriteJokes isFavouriteOpen={isFavouriteOpen} isFavouriteOpenAnimation={isFavouriteOpenAnimation}>
						<FavouriteJokesList>
							<FavouriteJoke />
						</FavouriteJokesList>
					</ContainerFavouriteJokes>
				</ContainerMobileShadow>	
			</ContainerFlex>	
		</Section>    
	);
}
const mapStateToProps = state => ({
	general: state.general
});



// App.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default connect(mapStateToProps)(App);
