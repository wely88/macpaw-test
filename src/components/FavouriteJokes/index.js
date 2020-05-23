import React, { useState, Fragment } from 'react';
import FavouriteJoke from '../../components/FavouriteJoke';

import { 
	ContainerFavouriteJokes, 
	ContainerMobileShadow,
	HeaderBurgerButton,
	FavouriteJokesTitleMobile,
  	BurgerLine,
  	FavouriteHeader,
  	FavouriteJokesTitle,
	FavouriteJokesList
} from './styles'

function FavouriteJokes(props) {

	const { jokesData, isMobile } = props;

	const [ isFavouriteOpen, setIsFavouriteOpen ] = useState(false);
	const [ isFavouriteOpenAnimation, setIsFavouriteOpenAnimation ] = useState(false);

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
		<Fragment>
			{isMobile ? 
				<FavouriteHeader>
					<HeaderBurgerButton onClick={handleIsFavouriteOpen}>
	              		<BurgerLine isFavouriteOpen={isFavouriteOpen}></BurgerLine>
	              		<BurgerLine isFavouriteOpen={isFavouriteOpen}></BurgerLine>
	            	</HeaderBurgerButton> 
	            	<FavouriteJokesTitleMobile>Favourite</FavouriteJokesTitleMobile>
	            </FavouriteHeader>	
        	: null }
			<ContainerMobileShadow isFavouriteOpen={isFavouriteOpen} isFavouriteOpenAnimation={isFavouriteOpenAnimation}>
				<ContainerFavouriteJokes isFavouriteOpen={isFavouriteOpen} isFavouriteOpenAnimation={isFavouriteOpenAnimation}>
					{!isMobile ? <FavouriteJokesTitle>Favourite</FavouriteJokesTitle> : null}
					<FavouriteJokesList>
					{jokesData.map(joke => 
						<FavouriteJoke joke={joke}/>
					)}
					</FavouriteJokesList>
				</ContainerFavouriteJokes>
			</ContainerMobileShadow>
		</Fragment>		
	);
}

export default FavouriteJokes;