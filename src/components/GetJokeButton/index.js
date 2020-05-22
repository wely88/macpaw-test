import React from 'react';

import { Button } from './styles';

function GetJokeButton(props) {

	const { onClick } = props;
	
	return(
		<Button onClick={onClick}>Get a joke</Button>
	);
}

export default GetJokeButton;