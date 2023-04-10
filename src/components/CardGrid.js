import { DragOverlay } from "@dnd-kit/core"
import { snapCenterToCursor } from "@dnd-kit/modifiers"
import Masonry from "@mui/lab/Masonry"
import CircularProgress from "@mui/material/CircularProgress"
import { useAtom } from "jotai"
import * as React from "react"
import { useEffect } from "react"
import { useInfiniteQuery } from "react-query"

import { Typography } from "@mui/material"
import { activeAtom } from "../atoms/activeAtom"
import { dragDisableAtom } from "../atoms/dragDisableAtom"
import { methodAtom } from "../atoms/methodAtom"
import { phaseAtom } from "../atoms/phaseAtom"
import { queryAtom } from "../atoms/queryAtom"
import { recommendedMethodAtom } from "../atoms/recommendedMethodAtom"
import { GetContent } from "../services/Api"
import CardItem from "./cardComponents/CardTemplate"
import SmallCard from "./cardComponents/SmallCardTemplate"
import { Draggable } from "./Draggable"
import { Droppable } from "./Droppable"
import RecommendedGrid from "./RecommendedGrid"

export default function CardGrid(props) {
	const [phaseItems] = useAtom(phaseAtom)
	const [methods, setMethods] = useAtom(methodAtom)
	const [recommendedMethods] = useAtom(recommendedMethodAtom)
	const [activeId] = useAtom(activeAtom)
	const [query] = useAtom(queryAtom)
	const [dragDisable] = useAtom(dragDisableAtom)

	const fetchData = ({ pageParam = 0 }) => {
		return GetContent(
			`/api/method/search?label=${query.label}
				&pageIndex=${pageParam}
				&pageSize=4&sortBy=${query.sortBy}
				&sortDirection=${query.sortDirection}
				&includeMethods=${query.includeMethods}
				&includeMethodSets=${query.includeMethodSets}`,
		)
	}

	const { data, fetchNextPage, isFetching } = useInfiniteQuery(["methods", query], fetchData, {
		getNextPageParam: (lastPage) => {
			const maxPages = Math.round(lastPage.pagination.totalItems / lastPage.pagination.itemsPerPage)
			const nextPage = lastPage.pagination.currentPage + 1
			if (nextPage <= maxPages) {
				return nextPage
			} else {
				return undefined
			}
		},
		keepPreviousData: true,
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
			<RecommendedGrid></RecommendedGrid>
			
			<Typography gutterBottom ml={4} mt={2} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
				All Methods / Method Sets
			</Typography>
			<Droppable id='allMethodsContainer'>
				<Masonry columns={2} spacing={2}>
					{data?.pages.map((page) =>
						page?.data.map((method) => (
							<div key={method.id}>
								{method.type === "method" ? (
									<div className='method' item key={method.id}>
										<Draggable disabled={dragDisable} key={method.id} id={method.id}>
											<CardItem className='method' data={method} header={method.header}></CardItem>
										</Draggable>
									</div>
								) : (
									<div className='methodset' item key={method.id}>
										<Draggable disabled={dragDisable} data={method} key={method.id} id={method.id}>
											<CardItem data={method} header={method.header}></CardItem>
										</Draggable>
									</div>
								)}
							</div>
						)),
					)}
				</Masonry>
				{isFetching ? (
					<div className='loading'>
						<CircularProgress />
					</div>
				) : null}
			</Droppable>
			<DragOverlay dropAnimation={null} style={{ width: 270 }} modifiers={[snapCenterToCursor]}>
				{activeId ? (
					<>
						<SmallCard
							last={true}
							data={methods[methods.findIndex(({ id }) => id === activeId)] ||
							 phaseItems[phaseItems.findIndex(({ id }) => id === activeId)]}
						/>
					</>
				) : null}
			</DragOverlay>
		</>
	)
}
