import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardFunctions from "./CardFunctions";
import ChipList from "./ChipList";
import { Container, Stack, Rating } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ListTemplate from "./ListTemplate";
import Modal from "@mui/material/Modal";
import MilitaryTech from "@mui/icons-material/MilitaryTechOutlined";
import Paragraph from "./Paragraph";
import Typography from "@mui/material/Typography";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

export default function Details(props) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [value, setValue] = React.useState(2);

	return (
		<>
		
			<Stack direction="row"	justifyContent="flex-end"	alignItems="flex-end">
			<Button onClick={handleOpen}>Details</Button>
			</Stack>
				<Container >
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
					<Grid container>
						<Grid xs={10} sx={style}>
							<Card elevation={2} sx={{ borderRadius: "16px" }}>
								<CardContent>
									<Container>
										<CardFunctions />

										<Box>
											<Typography
												sx={{
													fontSize: 28,
													fontWeight: "900",
													textAlign: "left",
												}}>
												{props.header || "Placeholder"}
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
												value={value | props.value}
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
												{props.ratings | 253} Ratings | {props.questions | 36}{" "}
												answered Questions | By: {props.author || "Placeholder"}{" "}
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
												{props.price || 6500} €
											</Typography>
											<Typography sx={{ fontWeight: "bold" }}>
												{props.time || 15} Tage
											</Typography>
											<Typography sx={{ fontWeight: "bold" }}>
												{props.MethodType || "placeholder"}
											</Typography>
										</Stack>

										<Grid container spacing={2}>
											<Grid md={4}>
												<Stack direction="column">
													<Paragraph
														heading="Description"
														body={
															props.description ||
															"A market analysis is the process of conducting thorough research on a specific market. Businesses typically use market analysis to determine whether a new product can perform well in a market or if it needs adjustment before being presented to consumers"
														}
													/>
													<Paragraph
														heading="When to use"
														body={props.whenToUse || "placeholder"}
													/>
													<ListTemplate heading="How to conduct" />
												</Stack>
											</Grid>
											<Grid md={4}>
												<Stack direction="column">
													<ChipList heading="Input" />
													<ChipList heading="Output" />
													<ListTemplate heading="Advantages" />
													<ListTemplate heading="Disadvantages" />
													<ChipList heading="Methods of same output" />
												</Stack>
											</Grid>
											<Grid md={4}>
												<Stack direction="column">
													<ChipList heading="Recommended Phases" />
													<ListTemplate heading="References" />
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
												disableElevation>
												Add to my Toolbox
											</Button>
										</Stack>
									</Container>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
					
				</Modal>
				</Container>
				</>
		
	);
}
