import * as React from "react";

import { Container } from "@mui/material";
import Filter from "../components/filter";
import Heading from "../components/Heading";
import PhaseSelector from "../components/phaseComponents/PhaseSelector";
import UserProfileInfo from "../components/UserProfileInfo";
import MethodCards from "../components/CardGridProfile";
import { useAtom } from "jotai";
import Stack from "@mui/material/Stack";
import { tabAtom } from "../atoms/tabAtom";
import {useEffect} from "react";
import { useParams} from "react-router-dom";
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

	setTab(5);

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




