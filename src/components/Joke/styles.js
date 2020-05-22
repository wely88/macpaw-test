import styled from "styled-components";
import { color, device } from '../styles';

export const Container = styled.div`
	width: 100%;
	max-width: 680px;
	background: ${color.grey};
	border-radius: 20px;
	padding: 40px;
	margin-bottom: 20px;
	box-sizing: border-box;

	@media ${device.tillLaptop} {
		max-width: 754px;
    }
`;

export const ContainerJokeHeader = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const ContainerHeartIcon = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

export const ContainerFlex = styled.div`
	display: flex;
`;

export const ContainerMessageIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: ${color.white};
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ContainerJokeContent = styled.div`
	max-width: 540px;
	margin-left: 20px;
`;

export const JokeId = styled.div`
	font-family: 'Roboto', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 10px;
	line-height: 14px;
	color: ${color.darkGrey};

`;

export const JokeLink = styled.a`
	margin-left: 4px;
	font-family: 'Roboto', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 10px;
	line-height: 14px;
	color: ${color.blue};
`;

export const ConyainerJokeLinkIcon = styled.div`
	display: inline-block;
	margin-left: 5px;
`;


export const JokeText = styled.p`
	word-wrap: break-word;
	margin-top: 5px;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 26px;
	color: ${color.black};
`;

export const ContainerJokeFooter = styled.div`
	margin-top: 23px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;


export const JokeUpdate = styled.div`
	font-family: 'Roboto', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 14px;
	color: ${color.darkGrey};
`;

export const BoldText = styled.span`
	font-weight: bold;
`;

export const JokeTag = styled.div`
	background: ${color.white};
	border-radius: 6px;
	padding: 6px 20px;
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 10px;
	line-height: 14px;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: ${color.black};
`;


