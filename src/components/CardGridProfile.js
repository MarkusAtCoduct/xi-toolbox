import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

import * as React from "react";
import { useEffect } from 'react';

import { useAtom } from "jotai";

import { activeAtom } from '../atoms/activeAtom';
import { methodAtom } from "../atoms/methodAtom";
import CardItem from "./cardComponents/CardTemplate";
import Masonry from 'react-masonry-css'

import { GetContent } from '../services/Api';

import { userAtom } from '../atoms/userAtom';
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
	GetContent(`/api/method/search?label=&pageIndex=0&pageSize=50&sortBy=cost&sortDirection=desc&includeMethods=true&includeMethodSets=true`)
	.then((response) => {
		console.log(response.data)
		console.log(props?.user?.data?.userId)

		var temp = response.data.filter((method) => method.ownerId === props?.user?.data?.userId)

		temp.forEach(element => {
			element.type = "method"
		});
		setMethods(temp)
		
		setLoading(false)
	})
	
   }, [props?.user?.data?.userId]);


   
  return (
	<><Typography gutterBottom ml={4} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
				All Methods / Method Sets
			</Typography>
	{loading ? 
		<>
		
		<Masonry breakpointCols={2} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
							<Skeleton animation='wave' height={"700px"} sx={{ borderRadius: "16px", marginBottom: "16px"}}  variant='rectangular' />
							<Skeleton animation='wave' height={"350px"} sx={{ borderRadius: "16px", marginBottom: "16px" }} mb={2} variant='rectangular' />
							<Skeleton animation='wave' height={"350px"} sx={{ borderRadius: "16px", marginBottom: "16px" }} mb={2}variant='rectangular' />
							<Skeleton animation='wave' height={"700px"} sx={{ borderRadius: "16px", marginBottom: "16px" }} mb={2}variant='rectangular' />
					</Masonry> 
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
							{methods.map((method) => (
								<div key={method.id}>
									{!method.isMethodSet ? (
										<div className='method'>
												<>
													<CardItem profile className='method' data={method}></CardItem>
												</>
										</div>
									) : (
										<div className='methodset' key={method.id}>
												<>
													<CardItem profile data={method}></CardItem>
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
