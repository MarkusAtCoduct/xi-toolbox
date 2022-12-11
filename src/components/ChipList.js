import { Box, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import * as React from "react";
export default function ChipList(props) {
	return (
		<Box mt={2} >
			<Typography gutterBottom sx={{ fontSize: "22px", fontWeight: "900", textAlign: "left" }}>
			{props.heading || "no heading set"}
			</Typography>
			{props.listItems ? (
				<Stack direction='row' sx={{overflow: "auto"}} spacing={1} p={1}>
					{props.listItems.map((item, index) => (				
							<Chip sx={{maxWidth: "150px"}} key={index} label={item || "no body set"}/>
					)
					)}
	
				</Stack>
			): null}
		</Box>
	)
}