import { Masonry } from "@mui/lab"
import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Skeleton from "@mui/material/Skeleton"
import { useAtom } from "jotai"
import * as React from "react"
import { useEffect, useState } from "react"
import { useInfiniteQuery } from "react-query"

import { methodAtom } from "../atoms/methodAtom"
import { queryAtom } from "../atoms/queryAtom"
import { GetContent } from "../services/Api"
import CardItem from "./cardComponents/CardTemplate"

export default function CardGridProfile(props) {
	const [methods, setMethods] = useAtom(methodAtom)
	const [loading] = useState(false)
	const [query] = useAtom(queryAtom)

	const fetchData = ({ pageParam = 0 }) => {
		const response = GetContent(
			`/api/method/search?label=${query.label}
			&pageIndex=${pageParam}
			&pageSize=4&sortBy=${query.sortBy}
			&sortDirection=${query.sortDirection}
			&includeMethods=${query.includeMethods}
			&includeMethodSets=${query.includeMethodSets}`,
		)
		return response
	}

	const { data, fetchNextPage, isFetching } = useInfiniteQuery(["userMethods", query], fetchData, {
		getNextPageParam: (lastPage) => {
			const maxPages = Math.round(lastPage.pagination.totalItems / lastPage.pagination.itemsPerPage)
			const nextPage = lastPage.pagination.currentPage + 1
			if (nextPage <= maxPages) {
				return nextPage
			} else {
				return undefined
			}
		},
		onSettled: (data) => {
			console.log(data)

			var temp = []

			data.pages.forEach((page) => {
				temp = temp.concat(page.data)
			})
			temp = temp.filter((method) => method.ownerId === props?.user?.data?.userId)

			if (query.Phase) {
				temp = temp.filter((method) => method.relevantPhases.includes(query.Phase))
			}
			setMethods(temp)
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

	return (
		<>
			<Typography gutterBottom ml={4} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
				All Methods / Method Sets
			</Typography>
			{loading ? (
				<>
					<Masonry breakpointCols={2} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
						<Skeleton animation='wave' height={"700px"} sx={{ borderRadius: "16px", marginBottom: "16px" }} variant='rectangular' />
						<Skeleton animation='wave' height={"350px"} sx={{ borderRadius: "16px", marginBottom: "16px" }} mb={2} variant='rectangular' />
						<Skeleton animation='wave' height={"350px"} sx={{ borderRadius: "16px", marginBottom: "16px" }} mb={2} variant='rectangular' />
						<Skeleton animation='wave' height={"700px"} sx={{ borderRadius: "16px", marginBottom: "16px" }} mb={2} variant='rectangular' />
					</Masonry>
				</>
			) : (
				<Box>
					{methods === [] ? (
						<Box sx={{ display: "flex" }}>
							<CircularProgress />
						</Box>
					) : (
						<>
							<Masonry columns={2} spacing={2}>
								{methods?.map((method) => (
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
			)}
		</>
	)
}
