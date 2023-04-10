import * as React from "react"

import { Container } from "@mui/material"
import Stack from "@mui/material/Stack"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { tabAtom } from "../atoms/tabAtom"
import { userAtom } from "../atoms/userAtom"
import MethodCards from "../components/CardGridProfile"
import Filter from "../components/filter"
import MethodCreatorForm from "../components/formComponents/MethodCreatorForm"
import Heading from "../components/misc/Heading"
import PhaseSelector from "../components/phaseComponents/PhaseSelector"
import ProfileInfo from "../components/ProfileComponents/ProfileInfo"

export default function MyProfile() {
	const [user, setUser] = useAtom(userAtom)
	const [tab, setTab] = useAtom(tabAtom)

	setTab(4)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<Container>
			<div className='setMakerWrapper'>
				<div className='sidebarWrapper'>
					<div className='sidebar'>
						<ProfileInfo />
						<Heading heading={"My Cross Innovation Process"} />
						<PhaseSelector user={user} />
					</div>
				</div>
				<div className='content'>
					<div className='filterWrapper'>
						<Stack direction='row' justifyContent='space-between' alignItems='center'>
							<Heading heading={"Methods & Method Sets Library"} />

							{user ? (
								<Link className='LinkButton' to='/createMethod' state={{ methodupdate: true, isMethodSet: false }} component={<MethodCreatorForm />}>
									Create new Method
								</Link>
							) : null}
						</Stack>
						<Filter user={user} />
					</div>
					<div className='cardsWrapper'>
						<div className='cards'>
							<MethodCards user={user} />
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
