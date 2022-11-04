import { Container } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

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
                    	<PhaseSelector/>
                    </Grid>
					<Grid item xs={8} sx={{backgroundColor: "#E1E3E0"}}>
						<Heading heading={"Methods & Method Sets Library"} />
                    	<Filter />
						<MethodCards columns={6} />
					</Grid>
				</Grid>
			</Container>
		
	);
}
