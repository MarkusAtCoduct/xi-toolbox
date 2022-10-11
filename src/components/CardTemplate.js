import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardFunctions from "./CardFunctions";
import Chip from "@mui/material/Chip";
import Details from "./details";
import Grid from "@mui/material/Unstable_Grid2";
import MilitaryTech from "@mui/icons-material/MilitaryTechOutlined";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


export default function BasicCard(props) {
	const [value, setValue] = React.useState(2);

	return (
		<Card
			elevation={3}
			sx={{
				padding: "8px",
				borderRadius: "16px",
				maxWidth: "344px",
				maxHeight: "340",
			}}
		>
			<CardContent>
				<CardFunctions type='Method' />
				<Box>
					<Stack direction='row' alignItems='flex-end' justifyContent='space-between'>
						<Typography sx={{ fontSize: 28, fontWeight: "900", textAlign: "left" }}>{props.header || "Placeholder"}</Typography>
						<Stack direction='row' alignItems='flex-end'>
							<Typography gutterBottom sx={{ fontSize: 11, fontWeight: "500", paddingTop: "5px" }}>
								{props.author || "Placeholder"}
							</Typography>
							<MilitaryTech color='primary' />
						</Stack>
					</Stack>
				</Box>

				<Box>
					<Stack direction='row' spacing={1} justifyContent='space-between' mb={1}>
						<Rating
							size='small'
							name='simple-controlled'
							sx={{ color: "#757875", float: "left" }}
							value={value | props.value}
							onChange={(event, newValue) => {
								setValue(newValue)
							}}
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
							{props.ratings | 253} Ratings | {props.questions | 36} answered Questions
						</Typography>
					</Stack>

					<Stack direction='row' justifyContent='space-between' alignItems='center' color='#000000'>
						<Typography sx={{ fontWeight: "bold" }}>{props.price || 6500} €</Typography>
						<Typography sx={{ fontWeight: "bold" }}>{props.time || 15} Tage</Typography>
						<Typography sx={{ fontWeight: "bold" }}>{props.MethodType || "placeholder"}</Typography>
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
								{props.brief || "lorem Ipsum dolor sit amet fsadgfsalknasdlökfn asdg afdfga sfasg ag fdadf saf asf asf agasgAGHTSH"}
							</Typography>
						</Box>
					</Stack>

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
									label={props.input || "Input"}
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
									label={props.output || "Output"}
								/>
							</Stack>
						</Grid>
					</Grid>
					<Details />
				</Box>
			</CardContent>
		</Card>
	)
}
