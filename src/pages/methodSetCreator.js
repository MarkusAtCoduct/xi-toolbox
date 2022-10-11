import * as React from "react";
import { Container } from "@mui/system";
import Filter from "../components/filter";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Heading from "../components/Heading";
import MethodCards from "../components/CardGrid";
import PhaseSelector from "../components/PhaseSelector";





export default function MethodSetCreator() {
	return (
		
			<Container>
				<Grid container spacing={2} mt={0}>
					<Grid item xs={4} sx={{backgroundColor: "#EFF1EE"}} >
						<Heading heading={"Cross Innovation Process"} />
                    	<PhaseSelector />
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
