import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton } from "@mui/material";

import { useAtom } from "jotai";

import * as React from "react";

import { phaseAtom } from "../atoms/phaseAtom";





export default function SmallCard(props) {
	const [value, setValue] = React.useState(2);
	const [phaseItems, setPhaseItems] = useAtom(phaseAtom)


	const handleDelete = () => {
		const Index = phaseItems.findIndex(({id}) => id == props.id);
		let tmpItems = [...phaseItems] 
		tmpItems.splice(Index,1);
		setPhaseItems(tmpItems)
	}

	return (
		<Card
			elevation={3}
			sx={{
				padding: "8px",
				borderRadius: "16px",
				minWidth: "254px",
				minHeight: "140px",
			}}
		>
			<CardContent>
				
			<Stack direction='column' spacing={1} justifyContent='center' alignItems="flex-start">

			<Stack sx={{width: "100%"}} direction="row" justifyContent="space-between" alignItems="center">
            <Typography sx={{ fontSize: 28, fontWeight: "900", textAlign: "left" }}>{props.header || "Placeholder"}</Typography>
			
			<IconButton onClick={handleDelete} aria-label="deleteMethod" size="medium">
				<RemoveCircleOutlineIcon />
			</IconButton>
			</Stack>

					<Stack direction='row' spacing={1} justifyContent='flex-start' alignItems="center">
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
							{props.ratings | 253} Ratings 
						</Typography>
					</Stack>
					</Stack>
			</CardContent>
			
		</Card>
	)
}
