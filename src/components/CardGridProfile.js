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

import { useInfiniteQuery } from 'react-query'
import { queryAtom } from '../atoms/queryAtom';




export default function CardGridProfile(props) {
  const [methods, setMethods] = useAtom(methodAtom);
  const [recommendedMethods, setRecommendedMethods] = useAtom(recommendedMethodAtom);
  const [activeId, setActiveId] = useAtom(activeAtom);
  const [user, setUser] = useAtom(userAtom);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useAtom(queryAtom);

  




  const fetchData = ({ pageParam = 0 }) => {
	const response =  GetContent(
		`/api/method/search?label=&pageIndex=${pageParam}
			&pageSize=4&sortBy=${query.sortBy}
			&sortDirection=${query.sortDirection}
			&includeMethods=${query.includeMethods}
			&includeMethodSets=${query.includeMethodSets}`)
		return response

	response.then((response) => {
			
		var temp = response.data.filter((method) => method.ownerId === props?.user?.data?.userId)

		temp.forEach(element => {
			element.type = "method"
		});
		return temp
	})
}

const { data, fetchNextPage, isFetching } = useInfiniteQuery("userMethods", fetchData, {
	getNextPageParam: (lastPage, allPages) => {
		const maxPages = Math.round(lastPage.pagination.totalItems / lastPage.pagination.itemsPerPage)
		const nextPage = lastPage.pagination.currentPage + 1
		if (nextPage <= maxPages) {
			return nextPage
		} else {
			return undefined
		}
	},
	onSettled: (data) => {
		//console.log(data)
	},
})

useEffect(() => {

	let fetching = false
	const handleScroll = async (event) => {
		const { scrollTop, clientHeight, scrollHeight } = event.target.scrollingElement
		if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
			fetching = true
			await fetchNextPage()
			fetching = false
		}
	}
	document.addEventListener("scroll", handleScroll)
	return () => {
		document.removeEventListener("scroll", handleScroll)
	}
}, [])


if (data) {
	var temp = []
		data.pages.forEach((page) => {
			temp = temp.concat(page.data)

		})
		temp = temp.filter((method) => method.ownerId === props?.user?.data?.userId)
}
   
  return (
	<>
		<Typography gutterBottom ml={4} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
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
							{
								temp?.map((method) => (
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
							))
						}
							
						</Masonry>
						</>
						)}
     
		</Box>
	}
</>

		
	)
}
