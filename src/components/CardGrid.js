import { DragOverlay} from '@dnd-kit/core';
import {snapCenterToCursor} from '@dnd-kit/modifiers';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from "@mui/material/Box";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from "@mui/material/Grid";
import { Typography, Stack, Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

import * as React from "react";
import { useEffect } from 'react';

import { useAtom } from "jotai";

import { activeAtom } from '../atoms/activeAtom';
import { methodAtom } from "../atoms/methodAtom";
import { phaseAtom } from '../atoms/phaseAtom';

import CardItem from "./CardTemplate";
import {Draggable} from './Draggable';
import {Droppable} from './Droppable';
import SmallCard from './SmallCardTemplate';

import Masonry from 'react-masonry-css'

import { GetContent } from '../services/Api';

import Skeleton from '@mui/material/Skeleton';
import { recommendedMethodAtom } from '../atoms/recommendedMethodAtom';

import { useState } from 'react';



export default function CardGrid(props) {
	const [phaseItems, setPhaseItems] = useAtom(phaseAtom);
  const [methods, setMethods] = useAtom(methodAtom);
  const [recommendedMethods, setRecommendedMethods] = useAtom(recommendedMethodAtom);
  const [activeId, setActiveId] = useAtom(activeAtom);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => { 
	setLoading(true)
	GetContent("/api/method/search?label&pageIndex=0&pageSize=50&sortBy=name&sortDirection=asc&includeMethods=true&includeMethodSets=true")
	.then((response) => {
		response.data.forEach(element => {
			element.container = "recommendedMethodContainer"
			element.type = "method"
		});
		setMethods(response.data)
		setLoading(false)
		console.log(response.data)
	});	
   }, []);

   
  return (
	<>{loading ? 
		<>
		<Typography gutterBottom ml={4} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
						Top Recommended
					</Typography>
		<Grid container spacing={1}>
			<Grid xs={6} item><Skeleton  animation="wave" height={"350px"} sx={{borderRadius: "16px"}} variant="rectangular" /></Grid>
			<Grid xs={6} item><Skeleton  animation="wave" height={"350px"} sx={{borderRadius: "16px"}} variant="rectangular" /></Grid>
			<Grid xs={6} item><Skeleton  animation="wave" height={"350px"} sx={{borderRadius: "16px"}} variant="rectangular" /></Grid>
			<Grid xs={6} item><Skeleton  animation="wave" height={"350px"} sx={{borderRadius: "16px"}} variant="rectangular" /></Grid>
		
		</Grid> 
		</>
	:
		<Box>
			<Accordion defaultExpanded sx={{ background: "none" }} elevation={0}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<Typography gutterBottom ml={4} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
						Top Recommended
					</Typography>
				</AccordionSummary>
				<Stack direction='row'>
					<Droppable id='recommendedMethodContainer'>
							
					{methods === [] ? (
						<Box sx={{ display: 'flex' }}>
      						<CircularProgress />
    					</Box>
					) : ( 
							<Masonry breakpointCols={2} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
							{recommendedMethods.map((method) => (
								<div key={method.id}>
									{!method.isMethodSet ? (
										<div className='method'>
											{method.container === "recommendedMethodContainer" || method.container === null ? (
												<Draggable key={method.id} data={method} id={method.id}>
													<CardItem className='method' data={method}></CardItem>
												</Draggable>
											) : null}
										</div>
									) : (
										<div className='methodset' key={method.id}>
											{method.container === "recommendedMethodContainer" || method.container === null ? (
												<Draggable data={method} key={method.id} id={method.id}>
													<CardItem data={method}></CardItem>
												</Draggable>
											) : null}
										</div>
									)}
								</div>
							))}
						</Masonry>
						)}
					</Droppable>
					<DragOverlay dropAnimation={null} style={{ width: 270 }} modifiers={[snapCenterToCursor]}>
						{activeId ?
						<SmallCard data={methods[methods.findIndex(({id}) => id === activeId)]
						|| phaseItems[phaseItems.findIndex(({id}) => id === activeId)]}
						/> 
						: null}
					</DragOverlay>
				</Stack>
			</Accordion>
			<Typography gutterBottom ml={4} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
				All Methods / Method Sets
			</Typography>
      <Droppable id='allMethodsContainer'>
						<Masonry breakpointCols={2} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
							{methods.map((method) => (
								<div key={method.id}>
									{method.type === "method" ? (
										<Grid className='method' item key={method.id} mb={1} mr={-1} xs={props.columns || 3}>
											{method.container === "recommendedMethodContainer" || method.container === null ? (
												<Draggable key={method.id} data={method} id={method.id}>
													<CardItem className='method' data={method} type={method.type} header={method.header}></CardItem>
												</Draggable>
											) : null}
										</Grid>
									) : (
										<Grid className='methodset' item key={method.id} mb={1} mr={-1} xs={props.columns || 3}>
											{method.container === "recommendedMethodContainer" || method.container === null ? (
												<Draggable data={method} key={method.id} id={method.id}>
													<CardItem data={method} type={method.type} header={method.header}></CardItem>
												</Draggable>
											) : null}
										</Grid>
									)}
								</div>
							))}
						</Masonry>
					</Droppable>
		</Box>}
		</>
	)
}
