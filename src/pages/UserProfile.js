import * as React from "react";

import { Container } from "@mui/material";
import Filter from "../components/filter";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Heading from "../components/Heading";
import PhaseSelector from "../components/PhaseSelector";
import UserProfileInfo from "../components/UserProfileInfo";
import MethodCards from "../components/CardGridProfile";
import { useAtom } from "jotai";
import { userAtom } from "../atoms/userAtom";
import Stack from "@mui/material/Stack";
import MethodCreatorForm from "../components/Forms/MethodCreatorForm";
import { tabAtom } from "../atoms/tabAtom";
import {useEffect} from "react";
import { Link,useParams} from "react-router-dom";
import { useState } from "react";
import { GetSpecificUserDetails } from "../services/Api";


export default function UserProfile() {

	const [user, setUser] = useState({});
	const [tab , setTab] = useAtom(tabAtom);
	const { userId } = useParams();
	const [loading, setLoading] = useState(false);


	useEffect(() => {
		console.log(userId)
		setLoading(true);
		GetSpecificUserDetails(userId).then((res) => {
			console.log(res);
			setUser(res);
			setLoading(false);
		});
	}, [userId]);

	setTab(4);

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])



  return (
	<Container>
		
			<div className="setMakerWrapper">
					
					
				<div className="sidebarWrapper">
					<div className="sidebar">
					<UserProfileInfo loading={loading} user={user}/>
					<Heading heading={"My Cross Innovation Process"} />
					<PhaseSelector user={user}/>
					</div>
				</div>
				<div className="content">
				<div className="filterWrapper">
				<Stack direction="row"  justifyContent="space-between" alignItems="center">
					<Heading heading={"Methods & Method Sets Library"}/>

					{user ? <Link className="LinkButton" to="/createMethod" state={{methodupdate: true, isMethodSet:false}} component={<MethodCreatorForm />} >Create new Method</Link> : null}
	
				</Stack>
				<Filter user={user}/>
				</div>
				<div className="cardsWrapper">
					<div className="cards">
						<MethodCards  user={user}/>
					</div>
				</div>
				</div>
			</div>
		</Container>

  );
}




