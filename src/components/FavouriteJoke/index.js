import React, { useState } from 'react';
import HeartIcon from '../images/HeartIcon';
import HeartFilledIcon from '../images/HeartFilledIcon';
import MessageIcon from '../images/MessageIcon';
import JokeLinkIcon from '../images/JokeLinkIcon';


import { 
	Container, 
	ContainerJokeHeader,
	ContainerHeartIcon,
	ContainerFlex,
	ContainerMessageIcon, 
	ContainerJokeContent,
	JokeId,
	JokeLink,
	ConyainerJokeLinkIcon,
	JokeText,
	JokeUpdate, 
	BoldText,
	JokeTag,
	ContainerJokeFooter,
} from './styles';

function FavouriteJoke(props) {

	const { joke } = props;

	let currentDate = new Date;
	let jokeUpdateDate = new Date(joke.updated_at)
	let lastUpdate = (((currentDate-jokeUpdateDate)/3600000).toFixed(0))

	return(
		<Container>
			<ContainerJokeHeader>
				<ContainerHeartIcon>
					<HeartFilledIcon /> 
				</ContainerHeartIcon>
			</ContainerJokeHeader>	
			<ContainerFlex>
				<ContainerMessageIcon>
					<MessageIcon />
				</ContainerMessageIcon>	
				<ContainerJokeContent>
					<JokeId>ID:
						<JokeLink href={joke.url}>
							{joke.id}
							<ConyainerJokeLinkIcon>
								<JokeLinkIcon />
							</ConyainerJokeLinkIcon>
						</JokeLink>
					</JokeId>
					<JokeText>{joke.value}</JokeText>
					<ContainerJokeFooter>
						<JokeUpdate>Last update:<BoldText> {lastUpdate} hours ago</BoldText></JokeUpdate>
					</ContainerJokeFooter>	
				</ContainerJokeContent>
			</ContainerFlex>	
		</Container>
	);
}

export default FavouriteJoke;