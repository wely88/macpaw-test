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

	const { jokeData } = props;
	const [ isFavourite, setIsFavourite ] = useState(false);

	let currentDate = new Date;
	let jokeUpdateDate = new Date(jokeData.updated_at)
	let lastUpdate = (((currentDate-jokeUpdateDate)/3600000).toFixed(0))
	
	function handleClickFavourite() {
		setIsFavourite(true)
		localStorage.setItem('id', jokeData.id)
	}

	return(
		<Container>
			<ContainerJokeHeader>
				<ContainerHeartIcon onClick={handleClickFavourite}>
					{isFavourite ? <HeartFilledIcon /> : <HeartIcon />}
				</ContainerHeartIcon>
			</ContainerJokeHeader>	
			<ContainerFlex>
				<ContainerMessageIcon>
					<MessageIcon />
				</ContainerMessageIcon>	
				<ContainerJokeContent>
					<JokeId>ID:
						<JokeLink href={jokeData.url}>
							{jokeData.id}
							<ConyainerJokeLinkIcon>
								<JokeLinkIcon />
							</ConyainerJokeLinkIcon>
						</JokeLink>
					</JokeId>
					<JokeText>{jokeData.value}</JokeText>
					<ContainerJokeFooter>
						<JokeUpdate>Last update:<BoldText> {lastUpdate} hours ago</BoldText></JokeUpdate>
						{jokeData.categories.map(category => {
							return <JokeTag key={category}>{category}</JokeTag>
						})}
					</ContainerJokeFooter>	
				</ContainerJokeContent>
			</ContainerFlex>	
		</Container>
	);
}

export default Joke;