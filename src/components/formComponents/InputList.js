
import { verticalListSortingStrategy } from "@dnd-kit/sortable";
import SendIcon from '@mui/icons-material/Send';
import { IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";

import {
	restrictToVerticalAxis
} from '@dnd-kit/modifiers';


import { DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { useState } from "react";
import { SortableListItem } from './SortableListItem';


import * as React from "react";

export default function InputList(props) {
	const handleDragEnd = (event) => {
		const {active, over} = event;
		var test = props.data.findIndex(({ id }) => id === active.id)
		var newIndex = props.data.findIndex(({ id }) => id === over.id)
		if (active.id !== over.id) {
			console.log("test: " + test + " newIndex: " + newIndex);
			return props.Move( [test, newIndex])
	};

};

const [data, setData] = useState("");

return (
	<div style={{ width: "100%" }}>
		<DndContext onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]}>
			
			<SortableContext items={props.data}>
				<Stack direction={"column"} alignItems='flex-start'>
					<Typography
						sx={{
							fontSize: 22,
							fontWeight: "400",
							float: "left",
						}}
						gutterBottom
					>
						{props.header}
					</Typography>
					<TextField
					fullWidth
					value={data}
					sx={{marginBottom: "8px"}}
					onChange={(e) => { setData(e.target.value) }}
					InputProps={{endAdornment: (<InputAdornment position="end">
						<IconButton onClick={() => {setData(""); if(data != "")props.Append({name: data})}}>
						<SendIcon color="primary"/>
						</IconButton>
					</InputAdornment>),
				}}
				></TextField>
					{props.data.map((item, index) => (
						<SortableListItem
							strategy={verticalListSortingStrategy}
							data={item}
							register={props.register}
							formRegister={props.formRegister}
							key={item.id}
							id={item.id}
							index={index}
							Remove={props.Remove}
						></SortableListItem>
					))}
				</Stack>
			</SortableContext>
		</DndContext>
	</div>
)
}
