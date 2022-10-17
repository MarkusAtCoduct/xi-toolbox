import * as React from "react";

import { Box, Stack, Typography, Divider } from "@mui/material";
import Popover from '@mui/material/Popover';
import { Droppable } from "react-beautiful-dnd";
import DragItem from "./DragItem";


import AdjustIcon from '@mui/icons-material/Adjust';

const cards = ["Eins", "Zwei", "drei", "vier"];


export default function DropList(props) {
	return (
        <Droppable droppableId={props.dropId}>
            {(provided)=>(
                <div ref={provided.innerRef}
                {...provided.droppableProps}>


                    <Box component='div' p={1} sx={{ width: "100%", height: "140px" }}>
                                        
									<Box  sx={{height: "100%", border: "2px dashed white", borderRadius: "8px" }}>
                                        <Stack direction="column" aligrItems="center" justifyContent="center">
										<Typography 
											sx={{ fontWeight: "400", fontSize: "32px" }}
                                            p={2}
											align='center'
											color='white'>
                                                Drag & Drop Cards here
										</Typography>
                                        </Stack>
									</Box>
								</Box>
                                <DragItem id="13234" index={0}></DragItem>

                {provided.placeholder}
                </div>
            )}
        </Droppable>
	);
}
