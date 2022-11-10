import { Box, Typography } from "@mui/material";

import * as React from "react";


export default function Paragraph(props) {
	return (
		<Box mt={2}>
				<Typography gutterBottom sx={{ fontSize:"22px",  fontWeight: "900", textAlign:"left"}}>
					{props.heading || "no heading set"}
				</Typography>
                <Typography gutterBottom sx={{maxHeight: props.lines, fontSize:"14px",  fontWeight: "400", textAlign:"left", overflowY: "scroll"}}>
					{props.body || "no body set"}
				</Typography>
		</Box>
	);
}
