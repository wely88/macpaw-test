import styled from "styled-components";
import { color, device } from '../styles';

export const Container = styled.li`
	max-width: 400px;
	width: 100%;
	border-radius: 20px;
	padding: 20px;
	box-sizing: border-box;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	background: ${color.white};
	margin-bottom: 20px;

	&:last-child {
		margin-bottom: 0;
	}

	@media ${device.tillTablet} {
      margin: 0 auto 20px;
  }  
`;

export const ContainerJokeHeader = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const ContainerHeartIcon = styled.div`
	
`;

export const ContainerFlex = styled.div`
	display: flex;
`;

export const ContainerMessageIcon = styled.div`
	min-width: 40px;
	height: 40px;
	border-radius: 50%;
	background: ${color.grey};
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
	font-size: 14px;
	line-height: 20px;
	color: ${color.black};
`;

export const ContainerJokeFooter = styled.div`
	margin-top: 20px;
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



