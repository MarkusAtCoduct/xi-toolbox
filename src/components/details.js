import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MilitaryTech from "@mui/icons-material/MilitaryTechOutlined";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Container, Rating, Stack } from "@mui/material";

import * as React from "react";

import CardFunctions from "./CardFunctions";
import ChipList from "./ChipList";
import ListTemplate from "./ListTemplate";
import MethodList from "./MethodList";
import Paragraph from "./Paragraph";

const style = {
	position: "absolute",
	top: "1vh",
	left: "50%",
	maxWidth: "1100px",
	transform: "translateX(-50%)",
	
};

export default function Details(props) {
	
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [value, setValue] = React.useState(2);


	return (
		<>
			<Stack sx={{height: "100%"}} direction="row" justifyContent="flex-end" alignItems="flex-end">
			<Button onClick={handleOpen}>Details</Button>
			</Stack>

				<Modal
					open={open}
					onClose={() => handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					p={3}
					>
						<Container sx={style}>
							<Card elevation={2} sx={{ borderRadius: "16px" }}>
								<CardContent sx={{ maxHeight:"94vh"}}>
										<CardFunctions details close={handleClose} type={props.data.isMethodSet}/>

										<Box>
											<Typography
												sx={{
													fontSize: 28,
													fontWeight: "900",
													textAlign: "left",
												}}>
												{props.data.header || "Placeholder"}
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
												value={value | props.data.value}
												onChange={(event, newValue) => {
													setValue(newValue);
												}}
											/>

											<Typography
												color="#757875"
												sx={{
													fontSize: 11,
													fontWeight: "500",
													float: "right",
													color: "#757875",
												}}>
												{props.data.ratings | 253} Ratings | {props.data.questions | 36}{" "}
												answered Questions | By: {props.data.owner || "Placeholder"}{" "}
											</Typography>
											<MilitaryTech color="primary" />
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
												{props.data.type || "placeholder"}
											</Typography>
										</Stack>

										<Grid container spacing={2}>
											<Grid md={4}>
												<Stack direction="column">
													<Paragraph
														heading="Description"
														lines="4rem"
														body={
															props.data.description ||
															"A market analysis is the process of conducting thorough research on a specific market. Businesses typically use market analysis to determine whether a new product can perform well in a market or if it needs adjustment before being presented to consumers"
														}
													/>
													<Paragraph
														heading="When to use"
														body={props.data.whenToConduct || "placeholder"}
													/>
													<ListTemplate listItems={props.data.howToConduct} heading="How to conduct" />
													{!props.data.isMethodSet
													?null
													:<MethodList listItems={props.data.simpleUsedMethods} heading="Methods used"/>}
													
												</Stack>
											</Grid>
											<Grid md={4}>
												<Stack direction="column">
													<ChipList listItems={props.data.input} heading="Input" />
													<ChipList listItems={props.data.output} heading="Output" />
													<ListTemplate listItems={props.data.advantages} heading="Advantages" />
													<ListTemplate listItems={props.data.disadvantages}heading="Disadvantages" />
													
													<ChipList listItems={props.data.sameOutputMethods} heading="Methods of same output" />
												</Stack>
											</Grid>
											<Grid md={4}>
												<Stack direction="column">
													<ChipList listItems={props.data.recommendedPhases} heading="Recommended Phases" />
													<ListTemplate listItems={props.data.references} heading="References" />
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
						</Modal>
				</>
		
	);
}
