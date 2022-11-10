import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Chip from "@mui/material/Chip";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

import * as React from "react";

import { useAtom } from "jotai";

import { phaseAccordionAtom } from "../atoms/phaseAccordionAtom";
import { phaseAtom } from "../atoms/phaseAtom";

import { Droppable } from "./Droppable";
import SmallCard from "./SmallCardTemplate";
import { Sortable } from "./Sortable";
import ToolboxStepperPhase from "./toolboxStepperPhase";

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={2} sx={{ borderRadius: "16px", backgroundColor: "none"}} square {...props} />
))(({ theme }) => ({
	
	
	"&:not(:last-child)": {
		borderBottom: 0,
	},
    marginRight: theme.spacing(1),
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
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: "0px",
	paddingBottom: "32px",
	backgroundColor: "#C4C7C4",
	borderRadius: "0 0 16px 16px", 
}));


export default function Phase(props) {

	const [phaseItems, setPhaseItems] = useAtom(phaseAtom);

	const [expanded, setExpanded] = useAtom(phaseAccordionAtom);

	const handleChange = (panel) => (event, newExpanded) => {
		
		// const section = document.querySelector("#"+props.id);
		// console.log(section)
  		// section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
	 	setExpanded(newExpanded ? panel : false);

	 };

	 const handleSave =() =>{
		const methodset = []
		phaseItems.forEach(element => {
			if (element.container === props.id){
				methodset.push(element)
			}else{
				return
			}
		});
		console.table(methodset)
		setPhaseItems([])
	 }
		return (
			<>
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
					<AccordionDetails>
						<Box sx={{ width: "100%", backgroundColor: "#757875" }} mb={1}>
							<Stack direction='row' spacing={2} p={2} pl={3} alignItems='center'>
								<Typography sx={{ fontWeight: "400", fontSize: "12px" }} color='white'>
									Output:
								</Typography>
								<Chip
									sx={{
										backgroundColor: "#FFDAD6",
										fontSize: 14,
										fontWeight: "500",
									}}
									label={props.phaseOutput || "Undefined Output"}
								/>
							</Stack>
						</Box>
						<Typography pl={3} mb={3} sx={{ fontWeight: "400", fontSize: "32px" }} align='left'>
							My Toolbox
						</Typography>
						<Stack direction='column'>

						<SortableContext items={phaseItems} strategy={verticalListSortingStrategy}>
							
	
						<Droppable id={props.id}>
							{phaseItems.map((method, index) =>
							<div key={method.id}>
							{method.container === props.id
								?	<Stack direction={"row"} pr={3} pl={3} spacing={2} mb={1}>
											<ToolboxStepperPhase index={index}></ToolboxStepperPhase>
											<Sortable id={method.id}>
												<SmallCard id={method.id} header={method.header}></SmallCard>
											</Sortable>
									</Stack>
								:null}
								</div>
							)}
						<Stack direction={"row"} pr={3} pl={3} spacing={2}>
							{phaseItems.length > 0
							?<ToolboxStepperPhase empty last></ToolboxStepperPhase>
							:<ToolboxStepperPhase empty ></ToolboxStepperPhase>}
							
							
								<Box sx={{width: "270px",minHeight: "140px", borderRadius: "16px", border: "dashed 2px #FFF"}}>
								<Typography p={1} mb={3} sx={{ fontWeight: "400", fontSize: "32px", color: "#fff" }} align='center'>
									Drop Methods here
								</Typography>
								</Box>
						</Stack>

						</Droppable>
						</SortableContext>
						
						</Stack>
						<Button variant="contained" color="primary"
							size="large"
							sx={{ borderRadius: "100px", marginTop:"32px" }}
							disableElevation
							onClick={handleSave}>
						  Save Methodset
						</Button>
					</AccordionDetails>
					
				</Accordion>
			</>
		)
}
