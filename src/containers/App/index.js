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


function App(props) {

	const { general } = props;
	const { category } = general;
	//const [ searchType, setSearchType ] = useState('');
	const [ categories, setCategories ] = useState();
	const [ randomJoke, setRandomJoke ] = useState();
	const [ isMobile, setIsMobile ] = useState(false);
	const [ isFavouriteOpen, setIsFavouriteOpen ] = useState(false);
	const [ isFavouriteOpenAnimation, setIsFavouriteOpenAnimation ] = useState(false);

	console.log(category)
	let favoutites = [];

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

	console.log('isFavouriteOpen', isFavouriteOpen)
	console.log('isFavouriteOpenAnimation', isFavouriteOpen)

	useEffect(async () => {
		switch('random') {
		  case 'random':  
		    const fetchDataRandom = async () => {
		      const resultRandom = await axios(
		        'https://api.chucknorris.io/jokes/random',
		      );
		 
		      setRandomJoke(resultRandom.data)
		    };
		    fetchDataRandom();
		    break;

		  case 'category':  // if (x === 'value2')
		    const fetchDataCategories = async () => {
		      const resultCategories = await axios(
		        'https://api.chucknorris.io/jokes/categories',
		      );
		 
		      setCategories(resultCategories.data);
		    };
		    fetchDataCategories()
		    break;
		}
	    // const fetchData = async () => {
	    //   const resultCategories = await axios(
	    //     'https://api.chucknorris.io/jokes/categories',
	    //   );

	    //   const resultRandom = await axios(
	    //     'https://api.chucknorris.io/jokes/random',
	    //   );
	 
	    //   setCategories(resultCategories.data);
	    //   setRandomJoke(resultRandom.data)
	    // };
  	}, []);

  	function showJoke(e) {
  		e.preventDefault()
  		console.log("show joke")
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
							<SearchForm categories={categories} onClick={showJoke} />
						</ContainerSearchForm>
						{randomJoke ? 
							<ContainerJokes>	
								<Joke randomJoke={randomJoke} />
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
console.log(mapStateToProps)

// App.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default connect(mapStateToProps)(App);
