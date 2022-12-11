import * as React from "react";

import { Container } from "@mui/material";
import Filter from "../components/filter";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Heading from "../components/Heading";
import PhaseSelector from "../components/PhaseSelector";
import ProfileInfo from "../components/ProfileInfo";
import MethodCards from "../components/CardGridProfile";
import { useAtom } from "jotai";
import { userAtom } from "../atoms/userAtom";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import MethodCreatorForm from "../components/Forms/MethodCreatorForm";

export default function MyProfile() {

	const [user, setUser] = useAtom(userAtom);

  return (
	<Container>
			<div className="setMakerWrapper">
					
					
				<div className="sidebarWrapper">
					<div className="sidebar">
					<ProfileInfo/>
					<Heading heading={"My Cross Innovation Process"} />
					<PhaseSelector/>
					</div>
				</div>
				<div className="content">
				<div className="filterWrapper">
				<Stack direction="row"  justifyContent="space-between" alignItems="center">
					<Heading heading={"Methods & Method Sets Library"}/>

					{user ? <Link className="LinkButton" to="/createMethod" state={{methodupdate: true, isMethodSet:false}} component={<MethodCreatorForm />} >Create new Method</Link> : null}
	
				</Stack>
				<Filter/>
				</div>
				<div className="cardsWrapper">
					<div className="cards">
					<MethodCards />
					</div>
				</div>
				</div>
			</div>
		</Container>

  );
}




