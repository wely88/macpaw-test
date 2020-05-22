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
						<JokeLink href="/">
							dddddd
							<ConyainerJokeLinkIcon>
								<JokeLinkIcon />
							</ConyainerJokeLinkIcon>
						</JokeLink>
					</JokeId>
					<JokeText>ddddd</JokeText>
					<ContainerJokeFooter>
						<JokeUpdate>Last update:<BoldText> 0 hours ago</BoldText></JokeUpdate>
					</ContainerJokeFooter>	
				</ContainerJokeContent>
			</ContainerFlex>	
		</Container>
	);
}

export default FavouriteJoke;