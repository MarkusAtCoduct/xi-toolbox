import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Unstable_Grid2";
import MilitaryTech from "@mui/icons-material/MilitaryTechOutlined";
import Rating from "@mui/material/Rating";
import { Typography, Stack } from "@mui/material";

import * as React from "react";

import { useAtom } from "jotai";

import { phaseAccordionAtom } from "../atoms/phaseAccordionAtom";
import { phaseAtom } from "../atoms/phaseAtom";

import CardFunctions from "./CardFunctions";
import MethodList from "./MethodList";
import Details from "./details";

export default function BasicCard(props) {
	const [value, setValue] = React.useState(2);
	const [phaseItems, setPhaseItems] = useAtom(phaseAtom)
	const [expanded] = useAtom(phaseAccordionAtom);



	const handleAdd = () => {
		if(expanded){
		let tmp = {...props.data}
		const tmpItems = [...phaseItems]

		tmp.id = String(Math.random())
		tmp.container = expanded
		tmpItems.push(tmp)
		setPhaseItems(tmpItems)
		}
	}

	return (
		<Card
			className={props.data.isMethodSet ? "methodSet" : "method"}
			elevation={0}
			sx={{
				borderRadius: "16px",
				maxWidth: "344px",
				minWidth: "300px",
				//height: "352px",
			}}
			style={props.drag ? { outline: " solid 2px #FF5454" } : null}
		>
			<CardContent sx={{padding: "24px", paddingBottom: "24px"}}>
				<CardFunctions addtoset={handleAdd} data={props.data} owner={props.data.ownerId} id={props.data.id}/>
				<Box>
						<Typography sx={{ fontSize: 28, fontWeight: "900", textAlign: "left" }}>{props.data.name || "Placeholder"}</Typography>
					<Stack direction='row' alignItems='flex-end' justifyContent='space-between'>
						<Stack direction='row' alignItems='flex-end'>
							<Typography gutterBottom sx={{width: "max-content", fontSize: 11, fontWeight: "500", paddingTop: "5px" }}>
								{"by: "+props.data.owner || "Placeholder"}
							</Typography>
							{props?.data.ownerBadges?.map((badge, index) => (
									<div key={index}>
									{badge === "METHOD_CREATOR" ?<MilitaryTech color='primary' /> : null}
									</div>))}
						</Stack>
					</Stack>
				</Box>

				<Box>
					<Stack direction='row' spacing={1} justifyContent='space-between' mb={1}>
						<Rating
							size='small'
							name='simple-controlled'
							readOnly
							sx={{ color: "#757875", float: "left" }}
							value={props.data.rate}
						/>

						<Typography
							color='#757875'
							sx={{
								fontSize: 11,
								fontWeight: "500",
								float: "right",
								color: "#757875",
							}}
						>
							{props.data.rate | 253} Ratings | {props.data.questions | 36} answered Questions
						</Typography>
					</Stack>

					<Stack direction='row' justifyContent='space-between' alignItems='center' color='#000000'>
						<Typography sx={{ fontWeight: "bold" }}>{props.data.cost || 6500} €</Typography>
						<Typography sx={{ fontWeight: "bold" }}>{props.data.time || 15} Tage</Typography>
						<Typography sx={{ fontWeight: "bold" }}>{props.data.needInvolvement ? "Expert Involved" : null}</Typography>
					</Stack>
					<Stack direction='column' justifyContent='flex-start' alignItems='flex-start' mt={1}>
						<Typography sx={{ fontSize: 11, fontWeight: "500", color: "#757875" }}>Brief</Typography>
						<Box>
							<Typography
								mb={2}
								sx={{
									textAlign: "left",
									fontSize: 14,
									fontWeight: "500",
									color: "#444845",
									minHeight: "2.5rem",
									maxHeight: "2.5rem",
									overflow: "hidden",
								}}
							>
								{props.data.descriptionBrief || "lorem Ipsum dolor sit amet fsadgfsalknasdlökfn asdg afdfga sfasg ag fdadf saf asf asf agasgAGHTSH"}
							</Typography>
						</Box>
					</Stack>

					{!props.data.isMethodSet ? (
						<Grid container spacing={2} direction='row' justifyContent='space-around'>
							<Grid xs={6}>
								<Stack direction='column' justifyContent='center' alignItems='flex-start' spacing={1}>
									<Typography sx={{ fontSize: 11, fontWeight: "500", color: "#757875" }}>Input</Typography>
									<Chip
										sx={{
											backgroundColor: "#FFDAD6",
											fontSize: 14,
											fontWeight: "500",
										}}
										label={props.data.input[0] || "Input"}
									/>
								</Stack>
							</Grid>
							<Grid xs={6}>
								<Stack direction='column' justifyContent='center' alignItems='flex-start' spacing={1}>
									<Typography sx={{ fontSize: 11, fontWeight: "500", color: "#757875" }}>Output</Typography>
									<Chip
										sx={{
											backgroundColor: "#FFDAD6",
											fontSize: 14,
											fontWeight: "500",
										}}
										label={props.data.output[0] || "Output"}
									/>
								</Stack>
							</Grid>
						</Grid>
					) : (
						<MethodList listItems={props.data.simpleUsedMethods} heading='Methods used' />
					)}

					<Details style={{position: "absolute"}} data={props.data} />
				</Box>
			</CardContent>
		</Card>
	)
}
