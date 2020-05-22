import styled from "styled-components";
import { color } from '../styles';

export const Span = styled.span`
	position: absolute;
	top: 2px;
	left: 0;
	height: 20px;
	width: 20px;
	border: 2px solid ${color.darkGrey};
	box-sizing: border-box;
	border-radius: 50%;

	&:after {
	  	content: "";
	  	position: absolute;
	  	display: none;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: ${color.black};
		top: 50%;
	    left: 50%;
	    margin-right: -50%;
	    transform: translate(-50%, -50%);
	}
 `; 

export const Input = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`;


export const Label = styled.label`
	width: fit-content;
	display: block;
	position: relative;
	padding-left: 36px;
	margin-bottom: 12px;
	cursor: pointer;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 26px;
	color: ${color.black};
	font-size: 22px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	transition: .3s;

	&:hover ${Input} ~ ${Span} {
	  	border: 2px solid ${color.black};
	}

	> ${Input}:checked ~ ${Span} {
	  	border: 2px solid ${color.black};
	}

	> ${Input}:checked ~ ${Span}:after {
  		display: block;
	}
`;
