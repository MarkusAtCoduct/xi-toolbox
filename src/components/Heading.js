import * as React from "react";
import { Box, Typography } from "@mui/material";


export default function Heading(props) {
	return (
		
			<Box sx={{ display: "flex" }} mt={2} p={2}>
				<Typography sx={{ height: "2.5em", fontSize:"32px",  fontWeight: "400", textAlign:"left"}}>
					{props.heading || "no heading set"}
				</Typography>
			</Box>
		
	);
}
