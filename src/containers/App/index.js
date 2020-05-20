import React from 'react';
// import axios from 'axios';
import Header from '../../components/Header';
import TitleWithSubtitle from '../../components/TitleWithSubtitle';
import SearchForm from '../../components/SearchForm';
import Joke from '../../components/Joke';
// import data from './data'

import { 
	Section, 
	GetJokeWrapper, 
	ContainerFlex, 
	ContainerGetJoke, 
	ContainerFavouriteJokes, 
	ContainerTitle,
	ContainerSearchForm,
	ContainerJokes
} from './styles'

// fetch('https://api.chucknorris.io/jokes/categories')
//   .then(response => response.json())
//   .then(commits => alert(commits));

// let promise = fetch('https://api.chucknorris.io/jokes/categories')
// let response = await fetch('https://api.chucknorris.io/jokes/categories');

// if (response.ok) { // если HTTP-статус в диапазоне 200-299
//   // получаем тело ответа (см. про этот метод ниже)
//   let json = await response.json();
// } else {
//   alert("Ошибка HTTP: " + response.status);
// })

//console.log(data)

// const axios = require('axios');
// axios.get('https://api.chucknorris.io/jokes/categories')
// 	  .then(function (response) {
// 	    // handle success
// 	    console.log(response);
// 	  })
// 	  .catch(function (error) {
// 	    // handle error
// 	    console.log(error);
// 	  })
// 	  .finally(function () {
// 	    console.log(response);
// 	  });

function App() {

	//const axios = require('axios');


	// const request = new XMLHttpRequest();
	// request.open('GET', 'https://api.chucknorris.io/jokes/categories');
	// request.responseType = 'json';
	// request.send();

	// request.onload = function() {
	// 	const categories =  request.response;	
	// 	console.log(categories)
	// }

	// fetch('https://api.chucknorris.io/jokes/categories')
	// .then((response) => {
	// return response.json();
	// })
	// .then((data) => {
	// console.log(data);
	// });
	
	

	// console.log(getUserAccount)
 


	return (
		<Section>
			<ContainerFlex>
				<ContainerGetJoke>
					<GetJokeWrapper>
						<Header />
						<ContainerTitle>
							<TitleWithSubtitle />
						</ContainerTitle>
						<ContainerSearchForm>	
							<SearchForm />
						</ContainerSearchForm>
						<ContainerJokes>	
							<Joke/>
						</ContainerJokes>	
					</GetJokeWrapper>
				</ContainerGetJoke>
				<ContainerFavouriteJokes>
				</ContainerFavouriteJokes>
			</ContainerFlex>	
		</Section>    
	);
}

export default App;
