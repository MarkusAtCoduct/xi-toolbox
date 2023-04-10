import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import { Box } from "@mui/system"

import * as React from "react"

import { useAtom } from "jotai"
import { outputAtom } from "../../atoms/outputAtom"

import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { phaseAccordionAtom } from "../../atoms/phaseAccordionAtom"
import { phaseAtom } from "../../atoms/phaseAtom"
import { queryAtom } from "../../atoms/queryAtom"
import { recommendedMethodAtom } from "../../atoms/recommendedMethodAtom"
import { GetContent } from "../../services/Api"
import SmallCard from "../cardComponents/SmallCardTemplate"
import { Droppable } from "../Droppable"
import MethodCreatorForm from "../formComponents/MethodCreatorForm"
import { Sortable } from "./Sortable"
import ToolboxStepperPhase from "./toolboxStepperPhase"

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={2} sx={{ borderRadius: "16px", backgroundColor: "none" }} square {...props} />
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
}))

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary sx={{ height: "70px" }} expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />
))(({ theme }) => ({
	flexDirection: "row-reverse",
	color: "#5C5F5D",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
		color: "#FFF",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: "0px",
	borderRadius: "0 0 16px 16px",
}))

export default function Phase(props) {
	const [phaseItems, setPhaseItems] = useAtom(phaseAtom)
	const [recommendedMethods, setRecommendedMethods] = useAtom(recommendedMethodAtom)
	const [expanded, setExpanded] = useAtom(phaseAccordionAtom)
	const [currentOutput, setCurrentOutput] = useAtom(outputAtom)
	const [query] = useAtom(queryAtom)

	const fetchRecommendedMethods = () => {
		return GetContent(
			`/api/method/search?label=${props.phasetext}
				&pageIndex=0
				&pageSize=4&sortBy=${query.sortBy}
				&sortDirection=${query.sortDirection}
				&includeMethods=true
				&includeMethodSets=false`,
		)
	}

	const { data} = useQuery(["recommendedMethods", currentOutput], fetchRecommendedMethods, {
		enabled: expanded === props.id,
		onSuccess: (data) => {
			console.log(data)
			if (expanded === props.id) {
				console.log(data)
				data.data.map((element) => {
					element.container = "recommendedMethodContainer"
					element.type = "method"
				})
				setRecommendedMethods(data)
			}
		},
	})

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);

		if (newExpanded === false) {
			setRecommendedMethods([])
		}
	}

	const methodset = []

	const handleSave = () => {
		phaseItems.forEach((element) => {
			if (element.container === props.id) {
				methodset.push(element.prevId)
			} else {
				return
			}
		})
		setPhaseItems([])
	}

	return (
		<div style={{ marginBottom: "8px" }}>
			<Accordion id={props.id} expanded={expanded === props.id} className='phase disableTransition' onChange={handleChange(props.id)} square={true}>
				<AccordionSummary className='disableTransition' aria-controls='panel1d-content' id='panel1d-header'>
					<Stack direction='row' spacing={3} alignItems='center'>
						<Stack direction='column' spacing={0} alignItems='center'>
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
					<Box sx={{ width: "100%" }} mb={3} mt={2}></Box>
					<Stack direction='column'>
						<SortableContext items={phaseItems} strategy={verticalListSortingStrategy}>
							<Droppable id={props.id}>
								{phaseItems.map((method, index, array) => (
									<div key={method.id}>
										{method.container === props.id ? (
											<Stack direction={"row"} pr={3} pl={3} spacing={2} mb={1}>
												<ToolboxStepperPhase index={index}></ToolboxStepperPhase>
												<Sortable id={method.id}>
													<SmallCard
														index={index}
														indicator
														last={array.length - 1 === index}
														matchTop={array[index - 1]?.output?.[0] === method?.input?.[0]}
														matchBottom={array[index + 1]?.input?.[0] === method?.output?.[0]}
														id={method.id}
														data={method}
													></SmallCard>
												</Sortable>
											</Stack>
										) : null}
									</div>
								))}
								<Stack direction={"row"} pr={3} pl={3} spacing={2}>
									{phaseItems.length > 0 ? <ToolboxStepperPhase empty last></ToolboxStepperPhase> : <ToolboxStepperPhase empty></ToolboxStepperPhase>}
									<Box sx={{ width: "254px", height: "140px", borderRadius: "8px", padding: "6px", border: "dashed 2px #FFF" }}>
										<Typography p={1} sx={{ fontWeight: "400", fontSize: "32px", color: "#fff" }} align='center'>
											Drop Methods here
										</Typography>
									</Box>
								</Stack>

								<Box pt={2}>
									<Stack direction={"row"} spacing={1} justifyContent={"center"} alignItems='flex-end'>
										<Link
											className='LinkButtonOutlined'
											to='/createMethod'
											state={{ methodupdate: true, isMethodSet: false }}
											component={<MethodCreatorForm />}
										>
											Create new Method
										</Link>
										<Link
											className='LinkButton'
											to='/createMethodSet'
											state={{ set: methodset, isMethodSet: true }}
											onClick={handleSave}
											component={<MethodCreatorForm />}
										>
											Save
										</Link>
									</Stack>
								</Box>
							</Droppable>
						</SortableContext>
					</Stack>
					<Box p={1} mt={2} sx={{ backgroundColor: "#757875", borderRadius: "0 0 16px 16px" }}>
						<Typography sx={{ fontWeight: "400", fontSize: "12px" }} color='white'>
							Output:
						</Typography>
						<Typography sx={{ fontWeight: "400", fontSize: "16px" }} color='white'>
							{props.phaseOutput || "Undefined Output"}
						</Typography>
					</Box>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
