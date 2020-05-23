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


export const ContainerFavouriteJokes = styled.div`
  background-color: ${color.grey};
  padding: 40px;
  min-height: 100vh;
  box-sizing: border-box;

  @media ${device.tillLaptop} {
    overflow-y: auto;
    position: fixed;
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
    height: 100%;
  }      
`;

export const ContainerMobileShadow = styled.div`
  width: 33.3%;

  @media ${device.tillLaptop} {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: ${props => (props.isFavouriteOpen ? "block" : "none" )};
    animation: ${props =>
            props.isFavouriteOpenAnimation ? AppearShadow : DisappearShadow}
            1s ease-in-out;
          }
  }  

   @media ${device.tillTablet} {
    overflow-y: scroll;  
  }     
`;

export const HeaderBurgerButton = styled.button`
  background: ${color.black};
  border: 0;
  border-radius: 50%;
  padding: 0;
  display: inline-block;
  width: 28px;
  height: 28px;
  position: relative;
  z-index: 999;
  margin-right: 10px;

  &:focus {
    outline: none;
  }
`;

export const BurgerLine = styled.span`
  display: block;
  position: absolute;
  height: 2px;
  width: 14px;
  background: ${color.white};
  border-radius: 2px;
  opacity: 1;
  left: 7px;
  transform: rotate(0deg);
  transition: .25s ease-in-out;


  &:nth-child(1) {
      top: ${props => props.isFavouriteOpen ? "13px" : "10px"};
      transform: ${props => props.isFavouriteOpen ? "rotate(45deg)" : "unset"};
  }

  &:nth-child(2) {
      top: ${props => props.isFavouriteOpen ? "13px" : "16px"};
      transform: ${props => props.isFavouriteOpen ? "rotate(-45deg)" : "unset"};
  }
`;

export const FavouriteHeader = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  z-index: 999;
  padding: 40px;

  @media ${device.tillTablet} {
      padding: 20px;
  }  
`;

export const FavouriteJokesTitle = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: ${color.darkGrey};
  z-index: 999;
`;

export const FavouriteJokesTitleMobile = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: ${color.darkGrey};
  z-index: 999;
`;

export const FavouriteJokesList = styled.ul`
 	 margin-top: 48px;

   @media ${device.tillTablet} {
       margin-top: 68px;
  }  
`;


