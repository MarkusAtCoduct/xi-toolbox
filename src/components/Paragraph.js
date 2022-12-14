import * as React from "react";
import { Box, Typography } from "@mui/material";


export default function Paragraph(props) {
	return (
		<Box mt={2}>
				<Typography GutterBottom sx={{ fontSize:"22px",  fontWeight: "900", textAlign:"left"}}>
					{props.heading || "no heading set"}
				</Typography>
                <Typography gutterBottom sx={{ fontSize:"14px",  fontWeight: "400", textAlign:"left"}}>
					{props.body || "no body set"}
				</Typography>
		</Box>
	);
}
