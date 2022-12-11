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



	console.log(props.data)
	return (
		<Card
			elevation={3}
			sx={{
				padding: "8px",
				borderRadius: "16px",
				minWidth: "254px",
				minHeight: "140px",
				maxHeight: "140px",
				maxWidth: "254px",
				overflow: "hidden"
			}}
		>
			<CardContent>
				
			<Stack direction='column' spacing={1} justifyContent='center' alignItems="flex-start">

			<Stack sx={{width: "100%"}} direction="row" justifyContent="space-between" alignItems="center">
            <Typography sx={{ fontSize: 28, fontWeight: "900", textAlign: "left" }}>{props.data?.name || "Placeholder"}</Typography>
			
			<IconButton onClick={handleDelete} aria-label="deleteMethod" size="medium">
				<RemoveCircleOutlineIcon />
			</IconButton>
			</Stack>
						<Typography sx={{textOverflow: "ellipsis"}}>{props.data?.description || "lorem"} </Typography>
			</Stack>
			</CardContent>
			
		</Card>
	)
}
