import styled from "styled-components";
import { color } from '../../../styles';

/* Create a custom radio button */
export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;

  $:after {
	content: "";
	position: absolute;
	display: none;
  }
`;

export const Label = styled.label`
   	display: block;
	position: relative;
	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 22px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	font-family: 'Roboto', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 26px;
	color: ${color.black};

	${Span} {
		&:after {	
		top: 9px;
		left: 9px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: white;
		}
	}	
`;

export const Input = styled.input`
   	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`;


// /* On mouse-over, add a grey background color */
// .container:hover input ~ .checkmark {
//   background-color: #ccc;
// }

// /* When the radio button is checked, add a blue background */
// .container input:checked ~ .checkmark {
//   background-color: #2196F3;
// }



// /* Show the indicator (dot/circle) when checked */
// .container input:checked ~ .checkmark:after {
//   display: block;
// }

// /* Style the indicator (dot/circle) */
// .container .checkmark:after {
//   top: 9px;
//   left: 9px;
//   width: 8px;
//   height: 8px;
//   border-radius: 50%;
//   background: white;
// }