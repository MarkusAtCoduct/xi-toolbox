import * as React from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";
import { Droppable } from 'react-beautiful-dnd';
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Stack from "@mui/material/Stack";
import Stepper from '@mui/material/Stepper';
import StepContent from '@mui/material/StepContent';
import { styled } from "@mui/material/styles";
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ToolboxStepper from "./toolboxStepper";
import Typography from "@mui/material/Typography";

import DropList from "./DropList";




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
	paddingBottom: "64px",
	backgroundColor: "#C4C7C4",
	borderRadius: "0 0 16px 16px", 
}));


export default function Phase(props) {

/*
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
	  setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};
  
	const handleBack = () => {
	  setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
  
	const handleReset = () => {
	  setActiveStep(0);
	};

	*/




	const [expanded, setExpanded] = React.useState();

	const handleChange = (panel) => (event, newExpanded) => {
	 	setExpanded(newExpanded ? panel : false);

	 };



		return (
			<>
				<Accordion expanded={expanded === "panel1"} className='phase disableTransition' onChange={handleChange("panel1")} square={true}>
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
						<Stack direction={"row"} pr={3} pl={3} spacing={2}>
								<ToolboxStepper first></ToolboxStepper>
								<DropList dropId="4234"></DropList>
							</Stack>
						</Stack>
					</AccordionDetails>
				</Accordion>
			</>
		)
}
