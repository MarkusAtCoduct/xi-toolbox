import { DragOverlay } from "@dnd-kit/core"
import { snapCenterToCursor } from "@dnd-kit/modifiers"
import { styled } from "@mui/material/styles"

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"

import Grid from "@mui/material/Grid"
import { Typography } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"

import * as React from "react"
import { useEffect } from "react"

import { useAtom } from "jotai"

import { activeAtom } from "../atoms/activeAtom"
import { methodAtom } from "../atoms/methodAtom"
import { phaseAtom } from "../atoms/phaseAtom"
import { queryAtom } from "../atoms/queryAtom"
import { dragDisableAtom } from "../atoms/dragDisableAtom"

import CardItem from "./cardComponents/CardTemplate"
import { Draggable } from "./Draggable"
import { Droppable } from "./Droppable"
import SmallCard from "./cardComponents/SmallCardTemplate"

import Masonry from "react-masonry-css"

import { GetContent } from "../services/Api"

import Skeleton from "@mui/material/Skeleton"
import { recommendedMethodAtom } from "../atoms/recommendedMethodAtom"
import { useQuery, useQueryClient, useInfiniteQuery } from "react-query"

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} {...props} />)(({ theme }) => ({
	"&:not(:last-child)": {
		borderBottom: "solid 1px #c2c2c2",
	},
	"&:before": {
		display: "none",
	},
}))

const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />)(
	({ theme }) => ({
		flexDirection: "row-reverse",
		"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
			transform: "rotate(90deg)",
		},
		"& .MuiAccordionSummary-content": {},
	}),
)

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(0),
}))

export default function CardGrid(props) {
	const [phaseItems] = useAtom(phaseAtom)
	const [methods, setMethods] = useAtom(methodAtom)
	const [recommendedMethods] = useAtom(recommendedMethodAtom)
	const [activeId] = useAtom(activeAtom)
	const [query] = useAtom(queryAtom)
	const [dragDisable] = useAtom(dragDisableAtom)

	const fetchData = ({ pageParam = 0 }) => {
		return GetContent(
			`/api/method/search?label=&pageIndex=${pageParam}
				&pageSize=4&sortBy=${query.sortBy}
				&sortDirection=${query.sortDirection}
				&includeMethods=${query.includeMethods}
				&includeMethodSets=${query.includeMethodSets}`,
		)
	}

	const { data, fetchNextPage, isFetching } = useInfiniteQuery("methods", fetchData, {
		getNextPageParam: (lastPage, allPages) => {
			const maxPages = Math.round(lastPage.pagination.totalItems / lastPage.pagination.itemsPerPage)
			const nextPage = lastPage.pagination.currentPage + 1
			if (nextPage <= maxPages) {
				return nextPage
			} else {
				return undefined
			}
		},
		onSuccess: (data) => {
			let temp = []
			data.pages.forEach((page) => {
				temp = temp.concat(page.data)
			})
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
			<div className='spacer'></div>
			<Typography gutterBottom ml={4} mt={2} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
				All Methods / Method Sets
			</Typography>
			<Droppable id='allMethodsContainer'>
				<Masonry className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
					{data?.pages.map((page) =>
						page?.data.map((method) => (
							<div key={method.id}>
								{method.type === "method" ? (
									<div className='method' item key={method.id} mb={1} mr={-1} xs={props.columns || 3}>
										<Draggable disabled={dragDisable} key={method.id} id={method.id}>
											<CardItem className='method' data={method} header={method.header}></CardItem>
										</Draggable>
									</div>
								) : (
									<Grid className='methodset' item key={method.id} mb={1} mr={-1} xs={props.columns || 3}>
										<Draggable disabled={dragDisable} data={method} key={method.id} id={method.id}>
											<CardItem data={method} header={method.header}></CardItem>
										</Draggable>
									</Grid>
								)}
							</div>
						)),
					)}
				</Masonry>
				{isFetching ? (
					<div className='loading'>
						<CircularProgress />
					</div>
				) : 
				null}
			</Droppable>
			<DragOverlay dropAnimation={null} style={{ width: 270 }} modifiers={[snapCenterToCursor]}>
				{activeId ? (
					<>
						<SmallCard
							last={true}
							data={
								methods[methods.findIndex(({ id }) => id === activeId)] ||
								phaseItems[phaseItems.findIndex(({ id }) => id === activeId)] ||
								recommendedMethods[recommendedMethods.findIndex(({ id }) => id == activeId.split("-")[0])]
							}
						/>
					</>
				) : null}
			</DragOverlay>
		</>
	)

	{
		/* 
  return (
		<>			
					<div className="spacer"></div>
					<Accordion  sx={{ background: "none"}} elevation={0}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
							<Typography gutterBottom ml={2} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
								Top Recommended
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
						<Stack direction='row'>
							<Droppable id='recommendedMethodContainer'>
								{loading ? (
									<Masonry breakpointCols={2} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
										<Skeleton animation='wave' height={"700px"} sx={{ borderRadius: "16px", marginBottom: "16px"}}  variant='rectangular' />
										<Skeleton animation='wave' height={"350px"} sx={{ borderRadius: "16px", marginBottom: "16px" }} mb={2} variant='rectangular' />
										<Skeleton animation='wave' height={"350px"} sx={{ borderRadius: "16px", marginBottom: "16px" }} mb={2}variant='rectangular' />
										<Skeleton animation='wave' height={"700px"} sx={{ borderRadius: "16px", marginBottom: "16px" }} mb={2}variant='rectangular' />
									</Masonry>
								) : (
									<Masonry breakpointCols={2} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
										{recommendedMethods.map((method) => (
											<div key={method.id}>
												{!method.isMethodSet ? (
													<div className='method'>
														<Draggable disabled={dragDisable} key={method.id + "-recommendedMethodContainer"} data={method} id={method.id + "-recommendedMethodContainer"}>
															<CardItem className='method' data={method}></CardItem>
														</Draggable>
													</div>
												) : (
													<div className='methodset' key={method.id}>
														<Draggable disabled={dragDisable} data={method} key={method.id} id={method.id}>
															<CardItem data={method}></CardItem>
														</Draggable>
													</div>
												)}
											</div>
										))}
									</Masonry>
								)}
							</Droppable>
						</Stack>
						</AccordionDetails>
					</Accordion>
					
					<Typography gutterBottom ml={4} mt={2} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
						All Methods / Method Sets
					</Typography>
					<InfiniteScroll
    style={{ overflow: "none" }}
    dataLength={data.data.length} //This is important field to render the next data
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

						{loading ? (
							<>
									<Masonry  className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
										<Skeleton animation='wave' height={"700px"} sx={{ borderRadius: "16px", marginBottom: "16px"}}  variant='rectangular' />
										<Skeleton animation='wave' height={"350px"} sx={{ borderRadius: "16px", marginBottom: "16px" }} mb={2} variant='rectangular' />
										<Skeleton animation='wave' height={"350px"} sx={{ borderRadius: "16px", marginBottom: "16px" }} mb={2}variant='rectangular' />
										<Skeleton animation='wave' height={"700px"} sx={{ borderRadius: "16px", marginBottom: "px" }} mb={2}variant='rectangular' />
									</Masonry>
									</>
								): (

							<Masonry breakpointCols={2} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
								{data?.data?.map((method) => (
									<div key={method.id}>
										{method.type === "method" ? (
											<Grid className='method' item key={method.id} mb={1} mr={-1} xs={props.columns || 3}>
												<Draggable disabled={dragDisable} key={method.id} data={method} id={method.id}>
													<CardItem className='method' data={method} header={method.header}></CardItem>
												</Draggable>
											</Grid>
										) : (
											<Grid className='methodset' item key={method.id} mb={1} mr={-1} xs={props.columns || 3}>
												<Draggable disabled={dragDisable} data={method} key={method.id} id={method.id}>
													<CardItem data={method} header={method.header}></CardItem>
												</Draggable>
											</Grid>
										)}
									</div>
								))}
							</Masonry>)}
						</Droppable>
						<DragOverlay dropAnimation={null} style={{ width: 270 }} modifiers={[snapCenterToCursor]}>
								{activeId ? (
									<>
									<SmallCard data={methods[methods.findIndex(({ id }) => id === activeId)] || phaseItems[phaseItems.findIndex(({ id }) => id === activeId)] || recommendedMethods[recommendedMethods.findIndex(({ id }) => id == activeId.split("-")[0])] }/>
									</>
								) : null}
							</DragOverlay>
					</InfiniteScroll>
				</>
	)
	*/
	}
}
