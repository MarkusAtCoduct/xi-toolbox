import { Button } from "@mui/material"
import * as React from "react"

import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import ForumIcon from "@mui/icons-material/Forum"
import NoteAddIcon from "@mui/icons-material/NoteAdd"
import Rating from "@mui/material/Rating"
import { useAtom } from "jotai"
import { dragDisableAtom } from "../atoms/dragDisableAtom"
import CardFunctions from "../components/cardComponents/CardFunctions"
import ChipList from "../components/detailsComponents/ChipList"
import Comments from "../components/detailsComponents/Comments"
import ListTemplate from "../components/detailsComponents/ListTemplate"
import MethodList from "../components/detailsComponents/MethodList"
import Paragraph from "../components/detailsComponents/Paragraph"

export default function MethodDetails() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const [open, setOpen] = React.useState(false)
	const [dragDisable, setDragDisable] = useAtom(dragDisableAtom)
	const handleOpen = () => {
		setDragDisable(true)
		setOpen(true)
	}
	const handleClose = () => {
		setDragDisable(false)
		setOpen(false)
	}
	const [ratings] = useState(null)

	let { state } = useLocation()
	const navigate = useNavigate()

	return (
		<div
		style={{
			backgroundColor: "#EFF1EE",
			zIndex: "30",
			position: "relative",
			paddingTop: "16px",
			paddingBottom: "16px",
		}}
	>
			
			<Container>
					
				<Card  elevation={2} sx={{ paddingTop: "24px", paddingLeft: "24px", paddingRight: "24px", borderRadius: "16px" }}>
				<Button sx={{margin: "8px", display: "flex"}} variant='contained' color='primary' onClick={() => navigate(-1)}>
						{"< Back"}
						</Button>
					<CardContent>
						<CardFunctions details={true} data={state.data} close={handleClose} />

						<Box>
							<Typography
								sx={{
									fontSize: 32,
									fontWeight: "900",
									textAlign: "left",
								}}
							>
								{state.data.name || "Placeholder"}
							</Typography>
						</Box>

						<Stack direction='row' spacing={1} justifyContent='flex-start' alignItems='center' mb={1}>
							<Rating size='small' name='simple-controlled' sx={{ color: "#757875", float: "left" }} value={state.data.rate} readOnly />

							<Typography
								color='#757875'
								sx={{
									fontSize: 11,
									fontWeight: "500",
									float: "right",
									color: "#757875",
								}}
							>
								By: {state.data.owner || "Placeholder"}
							</Typography>
							{state?.data.ownerBadges?.map((badge, index) => (
								<div key={index}>
									{badge === "METHOD_CREATOR" ? <NoteAddIcon sx={{ height: "16px", width: "16px", marginLeft: "8px" }} color='primary' /> : null}
									{badge === "METHOD_FACILITATOR" ? <ForumIcon sx={{ height: "16px", width: "16px", marginLeft: "8px" }} color='primary' /> : null}
								</div>
							))}
						</Stack>

						<Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={4} color='#757875'>
							<Typography sx={{ fontWeight: "bold" }}>{state.data.cost || 6500} €</Typography>
							<Typography sx={{ fontWeight: "bold" }}>{state.data.time || 15} Tage</Typography>
							<Typography sx={{ fontWeight: "bold" }}>{state.data.needsInvolvement ? "Expert involved" : null}</Typography>
						</Stack>

						<Stack direction='column' alignItems={"flex-start"}>
							<Paragraph heading='Description' lines='8rem' body={state.data.description || "placeholder"} />
							<ListTemplate heading='When to use' listItems={state.data.whenToConduct} />
							<ListTemplate listItems={state.data.howToConduct} heading='How to conduct' />
							{!state.data.isMethodSet ? null : <MethodList listItems={state.data.simpleUsedMethods} heading='Methods used' />}

							<ChipList listItems={state.data.input.slice(0, 1)} heading='Input' />
							<ChipList listItems={state.data.output.slice(0, 1)} heading='Output' />
							<ListTemplate listItems={state.data.advantages} heading='Advantages' />
							<ListTemplate listItems={state.data.disadvantages} heading='Disadvantages' />
							<ChipList listItems={state.data.relevantPhases} heading='Recommended Sub-Processes' />
							<ListTemplate references listItems={state.data.references} heading='References' />
							<Comments data={ratings?.data ? ratings?.data : []} id={state.data.id} />
						</Stack>
						
					</CardContent>
				</Card>
			</Container>
		</div>
	)
}
