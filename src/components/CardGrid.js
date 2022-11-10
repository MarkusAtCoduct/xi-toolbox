import { DragOverlay} from '@dnd-kit/core';
import {snapCenterToCursor} from '@dnd-kit/modifiers';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from "@mui/material/Box";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from "@mui/material/Grid";
import { Typography, Stack } from "@mui/material";

import * as React from "react";

import { useAtom } from "jotai";

import { activeAtom } from '../atoms/activeAtom';
import { methodAtom } from "../atoms/methodAtom";
import { phaseAtom } from '../atoms/phaseAtom';

import CardItem from "./CardTemplate";
import {Draggable} from './Draggable';
import {Droppable} from './Droppable';
import SmallCard from './SmallCardTemplate';

import Masonry from 'react-masonry-css'





const cards1 = ["Eins", "Zwei"];
const cards2 = ["drei", "vier"];



export default function CardGrid(props) {
  const [methods] = useAtom(methodAtom);
  const [activeId, setActiveId] = useAtom(activeAtom);
  const [phaseItems] = useAtom(phaseAtom);



  return (
		<Box>
			<Accordion defaultExpanded sx={{ background: "none" }} elevation={0}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<Typography gutterBottom ml={4} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
						Top Recommended
					</Typography>
				</AccordionSummary>
				<Stack direction='row'>
					<Droppable id='recommendedMethodContainer'>
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
					<DragOverlay dropAnimation={null} style={{ width: 270 }} modifiers={[snapCenterToCursor]}>
						{activeId ? <SmallCard header={methods[activeId - 1]?.header || phaseItems[activeId - 1]?.header}></SmallCard> : null}
					</DragOverlay>
				</Stack>
			</Accordion>
			<Typography gutterBottom ml={4} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
				All Methods / Method Sets
			</Typography>
      <Droppable id='allMethodsContainer'>
						{/*<Masonry breakpointCols={2} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
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
						</Masonry>*/}
					</Droppable>
		</Box>
	)
}
