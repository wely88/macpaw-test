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

function Joke(props) {

	const { randomJoke } = props;
	const [ isFavourite, setIsFavourite ] = useState(false);

	let currentDate = new Date;
	let jokeUpdateDate = new Date(randomJoke.updated_at)
	let lastUpdate = (((currentDate-jokeUpdateDate)/3600000).toFixed(0))
	

	return(
		<Container>
			<ContainerJokeHeader>
				<ContainerHeartIcon onClick={() => {setIsFavourite(!isFavourite)}}>
					{isFavourite ? <HeartFilledIcon /> : <HeartIcon />}
				</ContainerHeartIcon>
			</ContainerJokeHeader>	
			<ContainerFlex>
				<ContainerMessageIcon>
					<MessageIcon />
				</ContainerMessageIcon>	
				<ContainerJokeContent>
					<JokeId>ID:
						<JokeLink href={randomJoke.url}>
							{randomJoke.id}
							<ConyainerJokeLinkIcon>
								<JokeLinkIcon />
							</ConyainerJokeLinkIcon>
						</JokeLink>
					</JokeId>
					<JokeText>{randomJoke.value}</JokeText>
					<ContainerJokeFooter>
						<JokeUpdate>Last update:<BoldText> {lastUpdate} hours ago</BoldText></JokeUpdate>
						{randomJoke.categories.map(category => {
							return <JokeTag key={category}>{category}</JokeTag>
						})}
					</ContainerJokeFooter>	
				</ContainerJokeContent>
			</ContainerFlex>	
		</Container>
	);
}

export default Joke;