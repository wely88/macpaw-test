import React, { Fragment } from 'react';

import { Label, Input, Span } from './styles';

function Radio(props) {

	const { text, onChange, isChecked } = props;

	return(
		<Label>{text}
  			<Input type="checkbox" checked={isChecked} onChange={onChange}/>
  			<Span></Span>
		</Label>
	);
}

export default Radio;