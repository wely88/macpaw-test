import styled from "styled-components";
import { color } from '../styles';

export const Form = styled.form`

`;

export const CaterogiesList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin: 23px 0;
`;

export const CategoryItem = styled.li`
	cursor: pointer;
	margin-right: 10px;
	margin-bottom: 10px;
	padding: 6px 15px;
	border: 2px solid ${color.grey};
	box-sizing: border-box;
	border-radius: 6px;
	font-family: 'Roboto', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: ${props => (props.isActive === 'yes' ? color.black : color.darkGrey )};
	background: ${props => (props.isActive === 'yes' ? color.grey : color.white )};
	transition: .3s;

	&:last-child{
		margin-right: 0;
	}

	&:hover {
		color: ${color.black};
		background: ${color.grey};
	}

`;

export const ContainerButton = styled.div`
	margin-top: 20px;
`;

export const Input = styled.input`
	margin-top: 7px;
    padding: 10px 15px;
    border: 2px solid ${color.black};
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: ${color.black};

    &::placeholder {
	    font-family: 'Roboto', sans-serif;
	    font-style: normal;
	    font-weight: normal;
	    font-size: 16px;
	    line-height: 22px;
	    color: ${color.darkGrey};
    }
`;

