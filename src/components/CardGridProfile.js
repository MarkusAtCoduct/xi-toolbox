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

import {logout} from "../services/authApi";
import { userAtom } from '../atoms/userAtom';
import { GetUserDetails } from '../services/Api';
import { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { recommendedMethodAtom } from '../atoms/recommendedMethodAtom';





export default function CardGridProfile(props) {
  const [methods, setMethods] = useAtom(methodAtom);
  const [recommendedMethods, setRecommendedMethods] = useAtom(recommendedMethodAtom);
  const [activeId, setActiveId] = useAtom(activeAtom);
  const [user, setUser] = useAtom(userAtom);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => { 
	setLoading(true)
	GetUserDetails().then((res) => GetContent(`/api/method/search?label=${res.data.lastName}&pageIndex=0&pageSize=50&sortBy=cost&sortDirection=desc&includeMethods=true&includeMethodSets=true`)
	.then((response) => {
		response.data.forEach(element => {
			element.type = "method"
		});
		setMethods(response.data)
		console.log(response.data)
		setLoading(false)
	}))
	
   }, []);

   
  return (
	<><Typography gutterBottom ml={4} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
				All Methods / Method Sets
			</Typography>
	{loading ? 
		<>
		
		<Grid container spacing={1}>
			<Grid xs={6} item><Skeleton  animation="wave" height={"350px"} sx={{borderRadius: "16px"}} variant="rectangular" /></Grid>
			<Grid xs={6} item><Skeleton  animation="wave" height={"350px"} sx={{borderRadius: "16px"}} variant="rectangular" /></Grid>
			<Grid xs={6} item><Skeleton  animation="wave" height={"350px"} sx={{borderRadius: "16px"}} variant="rectangular" /></Grid>
			<Grid xs={6} item><Skeleton  animation="wave" height={"350px"} sx={{borderRadius: "16px"}} variant="rectangular" /></Grid>
		
		</Grid> 
		</>
	:
		<Box>	
					{methods === [] ? (
						<Box sx={{ display: 'flex' }}>
      						<CircularProgress />
    					</Box>
					) : ( 
						<>
					<Masonry breakpointCols={2} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
					{recommendedMethods.map((method) => (
						<div key={method.id}>
							{!method.isMethodSet ? (
								<div className='method'>
										<>
											<CardItem className='method' data={method}></CardItem>
										</>
								</div>
							) : (
								<div className='methodset' key={method.id}>
										<>
											<CardItem data={method}></CardItem>
										</>
								</div>
							)}
						</div>
					))}
				</Masonry>
							<Masonry breakpointCols={2} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
							{methods.map((method) => (
								<div key={method.id}>
									{!method.isMethodSet ? (
										<div className='method'>
												<>
													<CardItem className='method' data={method}></CardItem>
												</>
										</div>
									) : (
										<div className='methodset' key={method.id}>
												<>
													<CardItem data={method}></CardItem>
												</>
										</div>
									)}
								</div>
							))}
						</Masonry>
						</>
						)}
     
		</Box>
	}
</>

		
	)
}
