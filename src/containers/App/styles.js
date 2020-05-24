import styled from "styled-components";
import { device } from '../../components/styles';

export const Section = styled.section`
  position: relative;
  height: 100%;
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




