import React, { Fragment } from 'react';

import { Title, Subtitle } from './styles';

function Header() {

	return(
		<Fragment>
			<Title>Hey!</Title>
			<Subtitle>Let’s try to find a joke for you:</Subtitle>
		</Fragment>
	);
}

export default Header;