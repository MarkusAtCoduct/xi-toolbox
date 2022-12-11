
import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";

import React from "react";


export default function Footer(props) {

	return (
<Box sx={{
bottom: "0",
width: '100%',
backgroundColor: "#fff"}}>
	<Container>
    <Stack direction={"row"} alignItems="center">
		<Box sx={{width: "100%", color:"#909090"}}>
			<h3>Heading 1</h3>
			<p style={{fontSize: "0.9rem"}}>Textblock 1 with many things in it</p>
		</Box>
		<Box sx={{width: "100%", color:"#909090"}}>
			<h3>Heading 2</h3>
			<p style={{fontSize: "0.9rem"}}>Textblock 2 with many things in it</p>
		</Box>
		<Box sx={{width: "100%", color:"#909090"}}>
			<h3>Heading 3</h3>
			<p style={{fontSize: "0.9rem"}}>Textblock 3 with many things in it</p>
		</Box>
	</Stack>
	</Container>
</Box>
	);
};


