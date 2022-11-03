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



  return (
    <Box>
      <Accordion defaultExpanded sx={{background: "none"}} elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography gutterBottom ml={4} sx={{textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D"}}>Top Recommended</Typography>
        </AccordionSummary>
        <Stack direction="row">
          <Droppable id="recommendedMethodContainer">
          <Masonry
  breakpointCols={2}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  {methods.map(method =>
        <div>
            {method.type === "method"
             ?<Grid className="method" item key={method.id} mb={1} mr={-1} xs={props.columns || 3}>
                  {method.container === "recommendedMethodContainer" || method.container === null 
                  ? <Draggable key={method.id} id={method.id}>
                    <CardItem className="method" data={method} type={method.type} header={method.header}></CardItem>
                    </Draggable>
                  : null}
            </Grid>
            :<Grid className="methodset" item key={method.id} mb={1} mr={-1} xs={props.columns || 3}>
                  {method.container === "recommendedMethodContainer" || method.container === null 
                  ? <Draggable key={method.id} id={method.id}>
                    <CardItem data={method} type={method.type} header={method.header}></CardItem>
                    </Draggable>
                  : null}
            </Grid>
            }
          </div>
          
        )}
</Masonry>
            {/*
          <Grid container
          data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'
          className='grid'
        columnSpacing={3}
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
        >
        {methods.map(method =>
        <>
            {method.type === "method"
             ?<Grid className="grid-item" item key={method.id} mb={1} mr={-1} xs={props.columns || 3}>
                  {method.container === "recommendedMethodContainer" || method.container === null 
                  ? <Draggable key={method.id} id={method.id}>
                    <CardItem data={method} type={method.type} header={method.header}></CardItem>
                    </Draggable>
                  : null}
            </Grid>
            :<Grid className="grid-item grid-item--height2" item key={method.id} mb={1} mr={-1} xs={props.columns || 3}>
                  {method.container === "recommendedMethodContainer" || method.container === null 
                  ? <Draggable key={method.id} id={method.id}>
                    <CardItem data={method} type={method.type} header={method.header}></CardItem>
                    </Draggable>
                  : null}
            </Grid>
            }
          </>
          
        )}

        </Grid>
        */}
          </Droppable>
          <DragOverlay  style={{width: 270}} modifiers={[snapCenterToCursor]}>
        {activeId ? (
          <SmallCard header={methods[activeId-1]?.header || "Placeholder"}></SmallCard> 
        ): null}
      </DragOverlay>

        {/*<DropList droppableId="methoddrop_1" isDropDisabled={false} methods={state.methods}/>
        <DropList droppableId="methoddrop_2" isDropDisabled={true} methods={cards2}/>*/}
        </Stack>
      
      </Accordion>  
      <Typography gutterBottom ml={4} sx={{textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D"}}>All Methods / Method Sets</Typography>
        {/*<Grid container
        columnSpacing={3}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        >{cards2.map((card) => (
          <Grid item key={card} mb={1} mr={-1} xs={props.columns || 3}>
            <CardItem header={card}className="Button">{card}</CardItem>
          </Grid>
        ))}
        </Grid>*/}
    </Box>
  );
}
