import Box from "@mui/material/Box";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { useAtom } from "jotai";

import { methodAtom } from "../atoms/methodAtom";
import { useForm } from 'react-hook-form';


import * as React from "react";
import { IconButton } from "@mui/material";
import { GetContent } from '../services/Api';
import Select from '@mui/material/Select';


export default function Filter() {

	const Search = useForm({defaultValues:{
		label: "",
		pageIndex: 0,
		pageSize: 20,
		sortBy: "NAME",
		sortDirection: "ASC",
		includeMethods: true,
		includeMethodSets: true,
	}})

	const { control, watch, register, handleSubmit, formState: { errors } } = Search;
	const [methods, setMethods] = useAtom(methodAtom);

	const onSubmit = data =>{ 
		console.log(watch)
		//console.log(`/api/method/search?label=${data.label}&pageIndex=${data.pageIndex}&pageSize=${data.pageSize}&sortBy=${data.sortBy}&sortDirection=${data.sortDirection}&includeMethods=${data.includeMethods}&includeMethodSets=${data.includeMethodSets}`)
	const tmpItems = [...methods]
	GetContent(`/api/method/search?label=${data.label}&pageIndex=${data.pageIndex}&pageSize=${data.pageSize}&sortBy=${data.sortBy}&sortDirection=${data.sortDirection}&includeMethods=${data.includeMethods}&includeMethodSets=${data.includeMethodSets}`)
	.then((response) => {
		response.data.forEach(element => {
			element.container = "recommendedMethodContainer"
			element.type = "method"
		});
		console.log(response.data)
		setMethods(response.data)
	});
		
	}

	return (
		<>
		<form onSubmit={handleSubmit(onSubmit)}>
		<Box p={1}>
			<Card
				elevation={0}
				sx={{ backgroundColor: "#fafafa", borderRadius: "16px" }}>
				<CardContent>
					<Stack
						direction="row"
						justifyContent="space-around"
						alignItems="center">
						<TextField
							id="outlined-basic"
							label="Search"
							variant="outlined"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<IconButton type='submit'>
										<SearchOutlinedIcon />
										</IconButton>
									</InputAdornment>
								),
							}}

							{...register("label")}
						/>


						<Stack direction="column">
							<FormGroup>
								<FormControlLabel sx={{ fontSize: 11, color: "#5C5F5D" }} control={<Checkbox defaultChecked {...register("includeMethods")}/>}label="Methods"/>
								<FormControlLabel control={<Checkbox defaultChecked {...register("includeMethodSets")}/>}  label="MethodSets" />
							</FormGroup>
						</Stack>

						<Box sx={{ minWidth: 120 }}>
							<FormControl fullWidth>
								
								Sort by
								
								<select
									{...register("sortBy", {onChange: handleSubmit(onSubmit)})}
									value={watch("sortBy")}
									//defaultValue="name"
								>
									<option value={"name"}>Name</option>
									<option value={"cost"}>Cost</option>
									<option value={"time"}>Time</option>
									<option value={"rate"}> Rating</option>
								</select>
							</FormControl>
						</Box>
					</Stack>
				</CardContent>
			</Card>
		</Box>
		<div className="fade"></div>
		</form>
		</>
	);
}
