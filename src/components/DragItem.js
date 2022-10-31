import { Box, Stack, Typography, Divider, Button, Card } from "@mui/material";
import Popover from '@mui/material/Popover';
import AdjustIcon from '@mui/icons-material/Adjust';

import * as React from "react";

import { Draggable } from "react-beautiful-dnd";


export default function DragItem(props) {
	return (
        <Draggable draggableId={props.id} index={props.index}>
            {(provided)=>(
                <div ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                    <Card>
                      TEST
                    </Card>
                {provided.placeholder}
                </div>
            )}
        </Draggable>
	);
}
