import React, { useState } from 'react';

import { 
	HeaderText,
	ContainerHeader
 } from './styles';

function Header() {

	return(
		<ContainerHeader>
			<HeaderText>MSI 2020</HeaderText>
		</ContainerHeader>
	);
}

export default Header;