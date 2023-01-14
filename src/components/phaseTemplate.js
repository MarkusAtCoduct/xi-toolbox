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


import { Link, useLocation} from "react-router-dom"
import MethodCreatorForm from "./Forms/MethodCreatorForm";
import { recommendedMethodAtom } from "../atoms/recommendedMethodAtom";
import { GetUserDetails } from "../services/Api";
import { GetContent } from "../services/Api";


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
		backgroundColor: "#00afc8",
		boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
		borderRadius: "16px 16px 16px 16px",
		color: "#FFF",
		
	},
	"& .MuiButtonBase-root.Mui-expanded:hover": {
		backgroundColor: "#00afc8",

		color: "#5C5F5D",
	},
	"& .MuiButtonBase-root:hover": {
		backgroundColor: "#90eaf490",
		borderRadius: "16px 16px 16px 16px",		
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
	const [loading, setLoading] = React.useState(false);
	const [recommendedMethods, setRecommendedMethods] = useAtom(recommendedMethodAtom)

	const [expanded, setExpanded] = useAtom(phaseAccordionAtom);

	const handleChange = (panel) => (event, newExpanded) => {
	 		setExpanded(newExpanded ? panel : false);
			setLoading(true)
			if(newExpanded === true){
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
				setLoading(false)
			}
	 };


	const methodset = []

	const handleSave =() =>{

		
		phaseItems.forEach(element => {
			if (element.container === props.id){
				methodset.push(element.prevId)
			}else{
				return
			}
		});
		setPhaseItems([])

	 }



		return (
			<div style={{marginBottom: "8px"}}>
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
												<SmallCard id={method.id} data={method}></SmallCard>
											</Sortable>
									</Stack>

								: null }
								</div>
							)}
						<Stack direction={"row"} pr={3} pl={3} spacing={2}>
							{phaseItems.length > 0
							?<ToolboxStepperPhase empty last></ToolboxStepperPhase>
							:<ToolboxStepperPhase empty ></ToolboxStepperPhase>}
							
							
								<Box sx={{width: "254px", height: "140px", borderRadius: "8px", padding: "6px", border: "dashed 2px #FFF"}}>
								<Typography p={1} mb={3} sx={{ fontWeight: "400", fontSize: "32px", color: "#fff" }} align='center'>
									Drop Methods here
								</Typography>
								</Box>
						</Stack>

						</Droppable>
						</SortableContext>
						
						</Stack>
						<Box sx={{ width: "100%"}} mt={2}>
						<Link className="LinkButton" to="/createMethodSet" state={{set: methodset, isMethodSet:true}} onClick={handleSave} component={<MethodCreatorForm />} >Save Methodset</Link>
						</Box>
					</AccordionDetails>
					
				</Accordion>
			</div>
		)
}
