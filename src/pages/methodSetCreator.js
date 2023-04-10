import { Stack } from "@mui/material";
import { Container } from "@mui/system";

import * as React from "react";

import { useAtom } from "jotai";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { tabAtom } from "../atoms/tabAtom";
import { userAtom } from "../atoms/userAtom";
import MethodCards from "../components/CardGrid";
import Filter from "../components/filter";
import MethodCreatorForm from "../components/formComponents/MethodCreatorForm";
import Heading from "../components/misc/Heading";
import PhaseSelector from "../components/phaseComponents/PhaseSelector";





export default function MethodSetCreator() {

	const [user] = useAtom(userAtom)
	const [tab, setTab] = useAtom(tabAtom)

	setTab(1)
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<Container>
			<div className='setMakerWrapper'>
				<div className='sidebarWrapper'>
					<div className='sidebar'>
						<Heading heading={"Cross Innovation Process"} />
						{user ? <PhaseSelector type='lib' /> : <PhaseSelector />}
					</div>
				</div>
				<div className='content' >
					<div className='filterWrapper'>
						<Stack direction='row' justifyContent='space-between' alignItems='center'>
							<Heading heading={"Methods & Method Sets Library"} />

							{user ? (
								<Link className='LinkButton' to='/createMethod' state={{ methodupdate: true, isMethodSet: false }} component={<MethodCreatorForm />}>
									Create new Method
								</Link>
							) : null}
						</Stack>
						<Filter />
					</div>
					<div className='cardsWrapper' >
						<div className='cards'>
							<MethodCards />
						</div>
					</div>
				</div>
			</div>
			</Container>
	)
}