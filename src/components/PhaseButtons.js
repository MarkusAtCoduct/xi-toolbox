
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import * as React from "react";

import { useAtom } from "jotai";

import { phaseAtom } from "../atoms/phaseAtom";
import { privatePhaseAtom } from "../atoms/privatePhaseAtom";
import { activeAtom } from "../atoms/activeAtom";
import { methodAtom } from "../atoms/methodAtom";
import { userAtom } from "../atoms/userAtom";
import { GetUserDetails } from "../services/Api";
import { GetContent } from "../services/Api";
import { useState } from "react";
import { useEffect } from "react";
import { recommendedMethodAtom } from "../atoms/recommendedMethodAtom";





const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={2} sx={{ borderRadius: "16px", backgroundColor: "none"}} square {...props} />
))(({ theme }) => ({
	
	
	"&:not(:last-child)": {
		borderBottom: 0,
	},
   
	marginBottom: theme.spacing(1),
	"&:before": {
		display: "none",

	},
	"& .MuiButtonBase-root.Mui-expanded": {
		backgroundColor: "#ff5354",
		boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
		borderRadius: "16px 16px 16px 16px",
		color: "#FFF"
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		sx={{height: "70px"}}
		{...props}
	/>
))(({ theme }) => ({
	flexDirection: "row-reverse",
	color: "#5C5F5D",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
		color: "#FFF"
		
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
		
	},
}));


export default function PhaseButtons(props) {

	const [expanded, setExpanded] = useAtom(privatePhaseAtom);
	const [recommendedMethods, setRecommendedMethods] = useAtom(recommendedMethodAtom);
	const [loading, setLoading] = useState(false);
	const [methods, setMethods] = useAtom(methodAtom);


	const handleChange = (panel) => (event, newExpanded) => {
	 	setExpanded(newExpanded ? panel : false);
		console.log(panel)
		if(newExpanded === true) {
		setLoading(true)
		GetUserDetails().then((res) => GetContent(`/api/method/search?label=${props.phasetext}&pageIndex=0&pageSize=50&sortBy=cost&sortDirection=desc&includeMethods=true&includeMethodSets=true`)
		.then((response) => {
			response.data.forEach(element => {
				element.container = "recommendedMethodContainer"
				element.type = "method"
			});
			setRecommendedMethods(response.data)
			console.log(response.data)
			setLoading(false)
		}))
		}else{
			setRecommendedMethods([])
			setLoading(true)
		GetUserDetails().then((res) => GetContent(`/api/method/search?label=&pageIndex=0&pageSize=50&sortBy=cost&sortDirection=desc&includeMethods=true&includeMethodSets=true`)
		.then((response) => {
			response.data.forEach(element => {
				element.container = "recommendedMethodContainer"
				element.type = "method"
			});
			setMethods(response.data)
			console.log(response.data)
			setLoading(false)
		}))
		}
		
	 };

		return (
			<div style={{marginBottom: "8px"}} >
				<Accordion id={props.id} expanded={expanded === props.id} className='phase disableTransition' onChange={handleChange(props.id)} square={true}>
					<AccordionSummary className='disableTransition' aria-controls='panel1d-content' id='panel1d-header'>
						<Stack direction='row' spacing={3} alignItems='center'>
							<Stack direction='column' spacing={0} alignItems='center'>
								<Typography sx={{ fontWeight: "", fontSize: "0.8rem" }}>Phase</Typography>
								<Typography variant={"h4"} sx={{ fontWeight: "900" }}>
									{props.phasenumber}
								</Typography>
							</Stack>
							<Typography sx={{ fontWeight: "bold" }} align='left'>
								{props.phasetext}
							</Typography>
						</Stack>
					</AccordionSummary>
				</Accordion>
			</div>
		)
}
