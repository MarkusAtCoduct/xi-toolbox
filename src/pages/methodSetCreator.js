import { Container } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Stack, Button } from "@mui/material";

import * as React from "react";

import MethodCards from "../components/CardGrid";
import Heading from "../components/Heading";
import PhaseSelector from "../components/PhaseSelector";
import Filter from "../components/filter";





export default function MethodSetCreator() {
	return (
		<Container>
		<Grid container spacing={2} mt={0}>
			<Grid item xs={4} sx={{backgroundColor: "#EFF1EE"}} >
				<Heading heading={"Cross Innovation Process"} />
				<PhaseSelector type="lib"/>
			</Grid>
			<Grid item xs={8} sx={{backgroundColor: "#E1E3E0"}}>
				<Box>
				<Stack direction="row"  justifyContent="space-between" alignItems="center">
					<Heading heading={"Methods & Method Sets Library"}/>
					<Button sx={{ height: "40px", fontWeight: "400"}} variant='contained' href="/createMethod">
						Create new Method
					</Button>		
				</Stack>
				<Filter/>
				<MethodCards columns={6} />
				</Box>
			</Grid>
		</Grid>
	</Container>
		
	);
}
