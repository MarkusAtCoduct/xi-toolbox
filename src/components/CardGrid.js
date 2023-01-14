import { DragOverlay} from '@dnd-kit/core';
import {snapCenterToCursor} from '@dnd-kit/modifiers';
import { styled } from '@mui/material/styles';


import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

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
import { queryAtom } from '../atoms/queryAtom';

import CardItem from "./CardTemplate";
import {Draggable} from './Draggable';
import {Droppable} from './Droppable';
import SmallCard from './SmallCardTemplate';

import Masonry from 'react-masonry-css'

import { GetContent } from '../services/Api';

import Skeleton from '@mui/material/Skeleton';
import { recommendedMethodAtom } from '../atoms/recommendedMethodAtom';

import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
	marginTop: "35px",
	'&:not(:last-child)': {
	  borderBottom: 0,
	},
	'&:before': {
	  display: 'none',
	},
  }));
  

  const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
	  expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
	  {...props}
	/>
  ))(({ theme }) => ({
	backgroundColor:
	  theme.palette.mode === 'dark'
		? 'rgba(255, 255, 255, .05)'
		: 'rgba(0, 0, 0, .03)',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
	  transform: 'rotate(90deg)',
	}
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  }));
  

export default function CardGrid(props) {
	const [phaseItems, setPhaseItems] = useAtom(phaseAtom);
  const [methods, setMethods] = useAtom(methodAtom);
  const [recommendedMethods, setRecommendedMethods] = useAtom(recommendedMethodAtom);
  const [activeId, setActiveId] = useAtom(activeAtom);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [query] = useAtom(queryAtom);
  
  useEffect(() => { 
	setIndex(1)
	setLoading(true)
	GetContent(`/api/method/search?label=${query.label}&pageIndex=0&pageSize=6&sortBy=${query.sortBy}&sortDirection=${query.sortDirection}&includeMethods=${query.includeMethods}&includeMethodSets=${query.includeMethodSets}`)
	.then((response) => {
		response.data.forEach(element => {
			element.container = "AllMethodsContainer"
		});
		setMethods(response.data)
		setLoading(false)
		console.log(response.data)
	});	
   }, []);


   const fetchMoreData = () => {
	   
		GetContent(`/api/method/search?label=${query.label}&pageIndex=${index}&pageSize=6&sortBy=${query.sortBy}&sortDirection=${query.sortDirection}&includeMethods=${query.includeMethods}&includeMethodSets=${query.includeMethodSets}`)
		.then((response) => {
			response.data.forEach(element => {
				element.container = "AllMethodsContainer"
			});
			//methods.push(...response.data)
			if(response.data.length === 0){
				setHasMore(false)
			}
			setMethods([...methods, ...response.data])
			console.log(index+"  "+response.data)
			console.log(hasMore)
			setLoading(false)
		});
		console.log(methods)
		setIndex(index + 1)
	  };

   
  return (
		<>
			{loading ? (
				<>
					<Typography gutterBottom ml={4} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
						Top Recommended
					</Typography>
					<Grid container spacing={1} sx={{width: "100%"}}>
						<Grid xs={6} item>
							<Skeleton animation='wave' height={"350px"} sx={{ borderRadius: "16px" }} variant='rectangular' />
						</Grid>
						<Grid xs={6} item>
							<Skeleton animation='wave' height={"350px"} sx={{ borderRadius: "16px" }} variant='rectangular' />
						</Grid>
						<Grid xs={6} item>
							<Skeleton animation='wave' height={"350px"} sx={{ borderRadius: "16px" }} variant='rectangular' />
						</Grid>
						<Grid xs={6} item>
							<Skeleton animation='wave' height={"350px"} sx={{ borderRadius: "16px" }} variant='rectangular' />
						</Grid>
					</Grid>
				</>
			) : (
				<>
					
					<Accordion defaultExpanded sx={{ background: "none" }} elevation={0}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
							<Typography gutterBottom ml={2} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
								Top Recommended
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
						<Stack direction='row'>
							<Droppable id='recommendedMethodContainer'>
								{methods === [] ? (
									<Box sx={{ display: "flex" }}>
										<CircularProgress />
									</Box>
								) : (
									<Masonry breakpointCols={2} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
										{recommendedMethods.map((method) => (
											<div key={method.id}>
												{!method.isMethodSet ? (
													<div className='method'>
														<Draggable key={method.id + "recommendedMethodContainer"} data={method} id={method.id + "recommendedMethodContainer"}>
															<CardItem className='method' data={method}></CardItem>
														</Draggable>
													</div>
												) : (
													<div className='methodset' key={method.id}>
														<Draggable data={method} key={method.id} id={method.id}>
															<CardItem data={method}></CardItem>
														</Draggable>
													</div>
												)}
											</div>
										))}
									</Masonry>
								)}
							</Droppable>
							<DragOverlay dropAnimation={null} style={{ width: 270 }} modifiers={[snapCenterToCursor]}>
								{activeId ? (
									<SmallCard
										data={methods[methods.findIndex(({ id }) => id === activeId)] || phaseItems[phaseItems.findIndex(({ id }) => id === activeId)]}
									/>
								) : null}
							</DragOverlay>
						</Stack>
						</AccordionDetails>
					</Accordion>
					
					<Typography gutterBottom ml={4} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
						All Methods / Method Sets
					</Typography>
					<InfiniteScroll
						style={{ overflow: "none" }}
						dataLength={methods.length} //This is important field to render the next data
						next={fetchMoreData}
						hasMore={hasMore}
						initialScrollY={0}
						loader={<Stack p={3} justifyContent={"center"} alignItems={"center"} direction={"row"} spacing={2}><CircularProgress/><p>Loading...</p></Stack>}
						endMessage={
							<p style={{ textAlign: "center" }}>
								<b>No more Methods to show you! maybe go and create one!</b>
							</p>
						}
					>
						<Droppable id='allMethodsContainer'>
							<Masonry breakpointCols={2} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
								{methods.map((method) => (
									<div key={method.id}>
										{method.type === "method" ? (
											<Grid className='method' item key={method.id} mb={1} mr={-1} xs={props.columns || 3}>
												<Draggable key={method.id} data={method} id={method.id}>
													<CardItem className='method' data={method} header={method.header}></CardItem>
												</Draggable>
											</Grid>
										) : (
											<Grid className='methodset' item key={method.id} mb={1} mr={-1} xs={props.columns || 3}>
												<Draggable data={method} key={method.id} id={method.id}>
													<CardItem data={method} header={method.header}></CardItem>
												</Draggable>
											</Grid>
										)}
									</div>
								))}
							</Masonry>
						</Droppable>
						<DragOverlay dropAnimation={null} style={{ width: 270 }} modifiers={[snapCenterToCursor]}>
								{activeId ? (
									<SmallCard
										data={methods[methods.findIndex(({ id }) => id === activeId)] || phaseItems[phaseItems.findIndex(({ id }) => id === activeId)]}
									/>
								) : null}
							</DragOverlay>
					</InfiniteScroll>
				</>
			)}
		</>
	)
}
