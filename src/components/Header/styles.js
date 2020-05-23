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
