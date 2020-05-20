import styled from "styled-components";
import { color } from '../../styles';

export const Button = styled.button`
	background: linear-gradient(92.01deg, #8EA7FF 0%, #7291FF 100%);
	border-radius: 10px;
	border: none;
	padding: 10px 40px;
	font-family: 'Roboto', sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	color: ${color.white};

	&:hover {
		background: linear-gradient(92.01deg,#829cfd 0%,#6c8af5 100%);
	}
`;