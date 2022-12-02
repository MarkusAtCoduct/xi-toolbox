import { Container } from "@mui/system";
import { Stack } from "@mui/material";

import * as React from "react";

import MethodCards from "../components/CardGrid";
import Heading from "../components/Heading";
import PhaseSelector from "../components/PhaseSelector";
import PhaseButtons from "../components/PhaseButtons";
import Filter from "../components/filter";
import { Link } from "react-router-dom";
import MethodCreatorForm from "../components/MethodCreatorForm";
import { useAtom } from "jotai";
import { userAtom } from "../atoms/userAtom";




export default function MethodSetCreator() {

	const [user, setUser] = useAtom(userAtom)

	return (
		<Container>
			<div className="setMakerWrapper">
					<div className="sidebar">
					<Heading heading={"Cross Innovation Process"} />
					{user ? <PhaseSelector type="lib"/> : <PhaseSelector/>}
					</div>
			
				<div className="content">
				<div className="filterWrapper">
				<Stack direction="row"  justifyContent="space-between" alignItems="center">
					<Heading heading={"Methods & Method Sets Library"}/>

					{user ? <Link className="LinkButton" to="/createMethod" state={{methodupdate: true, isMethodSet:false}} component={<MethodCreatorForm />} >Create new Method</Link> : null}
	
				</Stack>
				<Filter/>
				</div>
				<div className="cards">
				<MethodCards columns={6} />
				</div>
				</div>
			</div>
		</Container>
		
	);
}


/*		<Grid container spacing={2} mt={0}>
			<Grid item xs={4} sx={{backgroundColor: "#EFF1EE"}} >
				<Heading heading={"Cross Innovation Process"} />
				<PhaseSelector type="lib"/>
			</Grid>
			<Grid item xs={8} sx={{backgroundColor: "#E1E3E0"}}>
				<Box>
				<Stack direction="row"  justifyContent="space-between" alignItems="center">
					<Heading heading={"Methods & Method Sets Library"}/>

					<Link className="LinkButton" to="/createMethod" state={{methodupdate: true, isMethodSet:false}} component={<MethodCreatorForm />} >Create new Method</Link>
	
				</Stack>
				<Filter/>
				<MethodCards columns={6} />
				</Box>
			</Grid>
		</Grid>*/