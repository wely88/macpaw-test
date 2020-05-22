import styled from "styled-components";
import { color } from '../styles';

export const ContainerHeader = styled.div`
   	display: flex;
   	justify-content: space-between;
`;

export const HeaderText = styled.p`
   	font-family: 'Roboto', sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 28px;
    color: ${color.black};
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

export const FavouriteContainer = styled.div`
	display: flex;
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