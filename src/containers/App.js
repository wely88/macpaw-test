import React from 'react';
import Header from '../components/Header';
import TitleWithSubtitle from '../components/TitleWithSubtitle';
import Radio from '../components/inputs/Radio';
import GetJokeButton from '../components/GetJokeButton';
import Joke from '../components/Joke';


import { AppWrapper } from '../styles';


function App() {
  return (
  	<section>
  		<AppWrapper>
	   		<Header />
	    	<TitleWithSubtitle />
	    	<Radio text="Random"/>
	    	<Radio text="From caterogies"/>
	    	<Radio text="Search"/>
	    	<GetJokeButton />
	    	<Joke />
	    </AppWrapper>
	</section>    
  );
}

export default App;
