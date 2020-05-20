import React, { useState } from 'react';
import HeartIcon from '../images/HeartIcon';
import HeartFilledIcon from '../images/HeartFilledIcon';

import { 
	Container, 
	ContainerHeartIcon,
	ContainerMessageIcon, 
	MessageIcon,
	ContainerJokeContent,
	ContainerJokeLink,
	JokeText,
	JokeUpdate, 
	JokeTag,
	ContainerFavorite
} from './styles';

function Joke() {

	const [ isFavourite, setIsFavourite ] = useState(false);

	return(
		<Container>
			<ContainerHeartIcon onClick={() => {setIsFavourite(!isFavourite)}}>
				{isFavourite ? <HeartFilledIcon /> : <HeartIcon />}
			</ContainerHeartIcon>	
		Get a joke
		</Container>
	);
}

export default Joke;