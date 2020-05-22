import React, { useState } from 'react';

import { 
	HeaderText,
	ContainerHeader,
	HeaderBurgerButton,
  	BurgerLine,
  	FavouriteContainer,
  	FavouriteJokesTitle,
 } from './styles';

function Header(props) {

	const { isMobile, onClick, isFavouriteOpen } = props;

	return(
		<ContainerHeader>
			<HeaderText>MSI 2020</HeaderText>
			{isMobile ? 
			<FavouriteContainer>	
				<HeaderBurgerButton onClick={onClick}>
              		<BurgerLine isFavouriteOpen={isFavouriteOpen}></BurgerLine>
              		<BurgerLine isFavouriteOpen={isFavouriteOpen}></BurgerLine>
            	</HeaderBurgerButton> 
            	<FavouriteJokesTitle>Favourite</FavouriteJokesTitle>
			</FavouriteContainer>	
	        : null }
		</ContainerHeader>
	);
}

export default Header;