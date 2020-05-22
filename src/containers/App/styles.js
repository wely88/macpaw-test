import styled, { keyframes } from "styled-components";
import { color, device } from '../../components/styles';

const AppearFavourite = keyframes`
  0% { transform: translateX(100%) }
  100% { transform: translateX(0) }
`;

const DisappearFavourite = keyframes`
  0% { transform: translateX(0) }
  100% { transform: translateX(100%) }
`;

const AppearShadow = keyframes`
  0% { background-color: rgba(0, 0, 0, 0); }
  50% { background-color: rgba(0, 0, 0, 0.3); }
  100% { background-color: rgba(0, 0, 0, 0.3); }
`;

const DisappearShadow = keyframes`
  0% { background-color: rgba(0, 0, 0, 0.3); }
  50% { background-color: rgba(0, 0, 0, 0.3); }
  100% { background-color: rgba(0, 0, 0, 0); }
`;

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

export const ContainerFlex = styled.div`
	display: flex;
	flex-direction: row;
  height: 100%;
`;

export const ContainerGetJoke = styled.div`
  width: 66.6%;

  	@media ${device.tillLaptop} {
       width: 100%;
    }
`;

export const GetJokeWrapper = styled.div`
  position: relative;
	max-width: 760px;
	width: 100%;
	height: 100%;
	padding: 40px 40px 140px;
	margin: 0 auto;
	box-sizing: border-box;

	@media ${device.tillLaptop} {
    max-width: 854px;
  }

  @media ${device.tillTablet} {
    padding: 20px 20px 72px;
  }
`;

export const ContainerTitle = styled.div`
  margin-top: 78px;
`;

export const ContainerSearchForm = styled.div`
  margin-top: 43px;
`;

export const ContainerJokes = styled.div`
  margin-top: 40px;
`;

export const ContainerFavouriteJokes = styled.div`
	background-color: ${color.grey};
	padding: 40px;
  height: 100%;
	box-sizing: border-box;

  @media ${device.tillLaptop} {
    position: absolute;
    right: 0;
    height: 100%;
    max-width: 480px;
    width: 58%;
    animation: ${props =>
      props.isFavouriteOpenAnimation ? AppearFavourite : DisappearFavourite}
      1s ease-in-out;
    }

  @media ${device.tillTablet} {
    max-width: unset;
    width: 100%;
    padding: 20px;
  }      
`;

export const ContainerMobileShadow = styled.div`
  width: 33.3%;
  height: 100%;
  box-sizing: border-box;

  @media ${device.tillLaptop} {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: ${props => (props.isFavouriteOpen ? "block" : "none" )};
    animation: ${props =>
            props.isFavouriteOpenAnimation ? AppearShadow : DisappearShadow}
            1s ease-in-out;
          }
  }        
`;



export const FavouriteJokesList = styled.ul`
 	 margin-top: 48px;

   @media ${device.tillTablet} {
       margin-top: 68px;
  }  
`;


