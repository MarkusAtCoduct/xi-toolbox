import * as React from "react";

import { Box, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
const listItems = ["helllom", "fjnflds"]
export default function ChipList(props) {
	return (
		<Box mt={2}>
			<Typography GutterBottom sx={{ fontSize: "22px", fontWeight: "900", textAlign: "left" }}>
			{props.heading || "no heading set"}
			</Typography>
			{props.listItems ?? (
				<Stack direction='row' spacing={1}>
					{listItems.map((item) => (
						<Chip label={item || "no body set"}/>
					))}
				</Stack>
			)}
		</Box>
	)
}