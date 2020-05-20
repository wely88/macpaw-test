import React, { useState } from 'react';

import { 
	CategoryItem,
} from './styles';

function SearchForm(props) {

	const { id, text, onClick, isActive } = props;

	return(
		<CategoryItem id={id} isActive={isActive} onClick={onClick}>{text}</CategoryItem>
	);
}

export default SearchForm;