
import { ButtonGroup, IconButton } from "@mui/material";
import { Box, Stack, Typography, TextField, InputAdornment,   } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import * as React from "react";

export default function InputList(props) {

return(
<div style={{ width: "100%" }}>
<Stack direction={"column"} alignItems='flex-start'>
	<Typography
		sx={{
			fontSize: 22,
			fontWeight: "400",
			float: "left",
		}}
	>
		{props.header}
	</Typography>
	{props.data.map((item, index) => (
		<div key={item.id} style={{ width: "100%" , marginBottom: "8px"}} >
			<Stack  direction={"row"} alignItems='center' spacing={2}>
				<TextField
					{...props.register(`${props.formRegister}[${index}].name`)}
					fullWidth
					variant='filled'
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
							{index > 0 ? (
								<IconButton aria-label='add' onClick={() => props.Remove(index)}>
									<HighlightOffIcon />
								</IconButton>
								) : null}
							</InputAdornment>
						),
					}}
				/>
			</Stack>
		</div>
                ))}
<Stack direction="row" alignItems="center">
	<div style={{ float: "left" }}>
		<IconButton
			aria-label='add'
			onClick={() => {
				props.Append("")
			}}
		>
			<AddCircleIcon />
		</IconButton>
        </div>
        <Typography ml={2}
		sx={{
			fontSize: 14,
			fontWeight: "400",
			float: "left",
		}}
	>
		{props.addHint}
	</Typography>
    </Stack>
</Stack>
</div>
);
}
