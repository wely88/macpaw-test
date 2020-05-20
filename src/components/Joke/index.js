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
	JokeTag,
	ContainerJokeFooter,
} from './styles';

function Joke(props) {

	const { jokes } = props;
	const [ isFavourite, setIsFavourite ] = useState(false);

	console.log(jokes)

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
						<JokeLink>
							XNaAxUduSw6zANDaIEab7A
							<ConyainerJokeLinkIcon>
								<JokeLinkIcon />
							</ConyainerJokeLinkIcon>
						</JokeLink>
					</JokeId>
					<JokeText>No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this. He must've conceived himself.</JokeText>
					<ContainerJokeFooter>
						<JokeUpdate>Last update:<strong> 1923 hours ago</strong></JokeUpdate>
						<JokeTag />
					</ContainerJokeFooter>	
				</ContainerJokeContent>
			</ContainerFlex>	
		</Container>
	);
}

export default Joke;