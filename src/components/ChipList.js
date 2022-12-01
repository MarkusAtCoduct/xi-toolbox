import { Box, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import * as React from "react";
const listItems = ["helllom", "fjnflds"]
export default function ChipList(props) {
	//console.log(props.listItems)
	return (
		<Box mt={2}>
			<Typography gutterBottom sx={{ fontSize: "22px", fontWeight: "900", textAlign: "left" }}>
			{props.heading || "no heading set"}
			</Typography>
			{props.listItems ? (
				<Stack direction='row' spacing={1}>
					{props.listItems.map((item, index) => (
						<Chip key={index} label={item || "no body set"}/>
					))
					}
				</Stack>
			): null}
		</Box>
	)
}