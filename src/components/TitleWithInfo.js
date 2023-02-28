import React from 'react';
import { Stack } from '@mui/material';
import InformationPopover from './InformationPopover';

export default function TitleWithInfo(props) {
	return (
	<Stack direction={"row"} alignItems="center">
		{props.title} 
		<InformationPopover infoText={props.infoText} header={props.header}/>
	</Stack>
	)
}