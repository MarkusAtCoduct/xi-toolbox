import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Stack, IconButton, Divider} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import {Paper, InputBase} from '@mui/material';

export function SortableListItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
    isDragging,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "100%" ,
    marginBottom: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
	height:"56px"
  };
  
  if(props.index > 0 ) return (
		<Stack
			direction={"row"}
			alignItems='center'
			justifyContent={"flex-start"}
			spacing={2}
			sx={isDragging ? { width: "100%", zIndex: 66} : { width: "100%"}}
			key={props.data.id}
			ref={setNodeRef}
			{...attributes}
		>
			<Paper style={style} component='form' elevation={0} sx={{ pl: "4px", display: "flex", alignItems: "center" }}>
				<DragIndicatorIcon color='primary' className='dragHandle' ref={setActivatorNodeRef} {...listeners}></DragIndicatorIcon>

				<Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
				<InputBase sx={{ ml: 1, flex: 1 }} {...props.register(`${props.formRegister}[${props.index}].name`)} fullWidth />
				<IconButton aria-label='add' onClick={() => props.Remove(props.index)}>
					<HighlightOffIcon />
				</IconButton>
			</Paper>
		</Stack>
	)
}