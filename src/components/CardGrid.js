import * as React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from "@mui/material/Box";
import CardItem from "./CardTemplate";
import { DragDropContext } from 'react-beautiful-dnd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const cards = ["Eins", "Zwei", "drei", "vier"];

const cards2 = ["Eins", "Zwei", "drei", "vier", "fünf","eins", "zwei", "drei", "vier", "fünf","eins", "zwei", "drei", "vier", "fünf","letzte"]



export default function CardGrid(props) {
  return (
    <Box>
      <Accordion defaultExpanded sx={{background: "none"}} elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography gutterBottom ml={4} sx={{textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D"}}>Top Recommended</Typography>
        </AccordionSummary>
          <Grid container
          columnSpacing={3}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          >{cards.map((card) => (
            <Grid item key={card} mb={1} mr={-1} md={props.columns || 3} xs={12} >
              <CardItem header={card} className="Button">{card}</CardItem>
            </Grid>
          ))}
          </Grid>
      </Accordion>  
      <Typography gutterBottom ml={4} sx={{textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D"}}>All Methods / Method Sets</Typography>
        <Grid container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        >{cards2.map((card) => (
          <Grid item key={card} mb={1} mr={-1} xs={props.columns || 3}>
            <CardItem header={card}className="Button">{card}</CardItem>
          </Grid>
        ))}
        </Grid>
    </Box>
  );
}
