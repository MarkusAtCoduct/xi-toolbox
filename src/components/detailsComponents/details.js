import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Container, Rating, Stack } from "@mui/material";
import Fade from '@mui/material/Fade';
import * as React from "react";
import { useState } from 'react';
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ForumIcon from "@mui/icons-material/Forum";
import { useAtom } from "jotai";



import { dragDisableAtom } from "../../atoms/dragDisableAtom";
import CardFunctions from "../cardComponents/CardFunctions";
import ChipList from "./ChipList"
import ListTemplate from "./ListTemplate";
import MethodList from "./MethodList";
import Paragraph from "./Paragraph";
import Comments from "./Comments";

const style = {
	position: "absolute",
	top: "1vh",
	left: "50%",
	maxWidth: "1100px",
	transform: "translateX(-50%)",
	
};

export default function Details(props) {
	
	const [open, setOpen] = React.useState(false);
	const [dragDisable, setDragDisable] = useAtom(dragDisableAtom);
	const handleOpen = () => {
		setDragDisable(true);
		setOpen(true)
	};
	const handleClose = () => {
		setDragDisable(false);
		setOpen(false)
	};
	const [value] = React.useState(2);
	const [ratings ] = useState(null);


	return (
		<>
			<Stack sx={{height: "100%"}} direction="row" justifyContent="flex-end" alignItems="flex-end">
			<Button onClick={handleOpen}>Details</Button>
			</Stack>

				<Modal
					open={open}
					onClose={handleClose}
					closeAfterTransition
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					p={3}
					
					>
						<Fade in={open}>
						<Container sx={style} >
							<Card elevation={2} sx={{paddingLeft : "24px",paddingRight : "24px", borderRadius: "16px" }}>
								<CardContent sx={{ maxHeight:"94vh"}}>
										<CardFunctions details={true} data={props.data} close={handleClose}/>

										<Box>
											<Typography
												sx={{
													fontSize: 28,
													fontWeight: "900",
													textAlign: "left",
												}}>
												{props.data.name || "Placeholder"}
											</Typography>
										</Box>

										<Stack
											direction="row"
											spacing={1}
											justifyContent="flex-start"
											alignItems="center"
											mb={1}>
											<Rating
												size="small"
												name="simple-controlled"
												sx={{ color: "#757875", float: "left" }}
												value={props.data.rate}
												readOnly
											/>
											
											<Typography
												color="#757875"
												sx={{
													fontSize: 11,
													fontWeight: "500",
													float: "right",
													color: "#757875",
												}}>
												By: {props.data.owner || "Placeholder"}
											</Typography>
											{props?.data.ownerBadges?.map((badge, index) => (
									<div key={index}>
									{badge === "METHOD_CREATOR" ?<NoteAddIcon sx={{height:"16px", width:"16px", marginLeft:"8px"}} color='primary' /> : null}
									{badge === "METHOD_FACILITATOR" ?<ForumIcon sx={{height:"16px", width:"16px",  marginLeft:"8px"}} color='primary' /> : null}
									</div>))}
										</Stack>

										<Stack
											direction="row"
											justifyContent="flex-start"
											alignItems="center"
                                            spacing={4}
											color="#757875">
											<Typography sx={{ fontWeight: "bold" }}>
												{props.data.price || 6500} €
											</Typography>
											<Typography sx={{ fontWeight: "bold" }}>
												{props.data.time || 15} Tage
											</Typography>
											<Typography sx={{ fontWeight: "bold" }}>
												{props.data.needsInvolvement ? "Expert involved" : null}
											</Typography>
										</Stack>

										<Grid container spacing={2}>
											<Grid md={4}>
												<Stack direction="column">
													<Paragraph
														heading="Description"
														lines="8rem"
														body={
															props.data.description || "placeholder"
														}
													/>
													<ListTemplate
														heading="When to use"
														listItems={props.data.whenToConduct}
													/>
													<ListTemplate listItems={props.data.howToConduct} heading="How to conduct" />
													{!props.data.isMethodSet
													?null
													:<MethodList listItems={props.data.simpleUsedMethods} heading="Methods used"/>}
													
												</Stack>
											</Grid>
											<Grid md={4}>
												<Stack direction="column">
													<ChipList listItems={props.data.input.slice(0,1)} heading="Input" />
													<ChipList listItems={props.data.output.slice(0,1)} heading="Output" />
													<ListTemplate listItems={props.data.advantages} heading="Advantages" />
													<ListTemplate listItems={props.data.disadvantages}heading="Disadvantages" />
													
													<ChipList listItems={props.data.sameOutputMethods} heading="Methods of same output" />
												</Stack>
											</Grid>
											<Grid md={4}>
												<Stack direction="column">
													<ChipList listItems={props.data.relevantPhases} heading="Recommended Phases" />
													<ListTemplate references listItems={props.data.references} heading="References" />
													<Comments data={ratings?.data ? ratings?.data : []} id={props.data.id}/>
												</Stack>
											</Grid>
										</Grid>
										<Stack
											direction="row"
											justifyContent="center"
											alignItems="center"
											mt={4}>
											<Button
												size="large"
												variant="contained"
												sx={{ borderRadius: "100px" }}
												onClick={() =>handleClose()}
												disableElevation>
												Close
											</Button>
										</Stack>
								</CardContent>
							</Card>
							</Container>
							</Fade>
						</Modal>
				</>
		
	);
}
