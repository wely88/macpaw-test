import React, { useState, useEffect, useLayoutEffect } from 'react';
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


function App() {

	const [ categories, setCategories ] = useState();
	const [ randomJoke, setRandomJoke ] = useState();
	const [ isMobile, setIsMobile ] = useState(false);
	const [ isFavouriteOpen, setIsFavouriteOpen ] = useState(false);
	const [ isFavouriteOpenAnimation, setIsFavouriteOpenAnimation ] = useState(false);


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
	    const fetchData = async () => {
	      const resultCategories = await axios(
	        'https://api.chucknorris.io/jokes/categories',
	      );

	      const resultRandom = await axios(
	        'https://api.chucknorris.io/jokes/random',
	      );
	 
	      setCategories(resultCategories.data);
	      setRandomJoke(resultRandom.data)
	    };
	 
	    fetchData();
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

export default App;
