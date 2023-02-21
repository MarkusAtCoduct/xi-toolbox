import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { useAtom } from "jotai";

import { methodAtom } from "../atoms/methodAtom";
import { useForm } from 'react-hook-form';


import * as React from "react";
import { IconButton, MenuItem } from "@mui/material";
import { GetContent } from '../services/Api';
import { queryAtom } from "../atoms/queryAtom";
import Select from '@mui/material/Select';

export default function Filter(props) {

	const Search = useForm({defaultValues:{
		label: "",
		pageIndex: 0,
		pageSize: 20,
		sortBy: "name",
		sortDirection: "asc",
		includeMethods: true,
		includeMethodSets: true,
	}})

	const { control, watch, register, handleSubmit, formState: { errors } } = Search;
	const [methods, setMethods] = useAtom(methodAtom);
	const [query, setQuery] = useAtom(queryAtom);


	

	const onSubmit = data =>{
		setQuery(data)
		const tmpItems = [...methods]
	}

	return (
		
		<form onSubmit={handleSubmit(onSubmit)}>
		<Box p={2}>
			<Card
				elevation={0}
				sx={{ backgroundColor: "#fafafa", borderRadius: "16px" }}>
				<CardContent>
					<Box>
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


							<FormGroup onChange={handleSubmit(onSubmit)}>
								<FormControlLabel sx={{ fontSize: 11, color: "#5C5F5D", margin: 0}} control={<Checkbox  checked={query?.includeMethods} {...register("includeMethods")}/>}label="Methods"/>
								<FormControlLabel sx={{ fontSize: 11, color: "#5C5F5D", margin: 0}} control={<Checkbox checked={query?.includeMethodSets} {...register("includeMethodSets")}/>}  label="MethodSets" />
							</FormGroup>
						
						<Box sx={{ width: 125}}>
							<FormControl fullWidth >
								<InputLabel id="demo-simple-select-label">Sort By</InputLabel>
								<Select
								sx={{height: "56px"}}
								className="selectSort"
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								label="Sort By"
								{...register("sortBy", {onChange: handleSubmit(onSubmit)})}
								value={watch("sortBy")}
								>
									<MenuItem value={"name"}>Name</MenuItem>
									<MenuItem value={"cost"}>Cost</MenuItem>
									<MenuItem value={"time"}>Time</MenuItem>
									<MenuItem value={"rate"}>Rating</MenuItem>
								</Select>
								</FormControl>
						</Box>

						{/* <Box sx={{ width: 125}}>
							<FormControl fullWidth >
								<InputLabel id="sortDirectionLabel">Sort Direction</InputLabel>
								<Select
								sx={{height: "56px"}}
								className="selectSort"
								labelId="sortDirectionLabel"
								id="sortDirection"
								label="sort Direction"
								{...register("sortDirection", {onChange: handleSubmit(onSubmit)})}
								value={watch("sortDirection")}
								>
									<MenuItem value={"asc"}>Ascending</MenuItem>
									<MenuItem value={"desc"}>Descending</MenuItem>
								</Select>
								</FormControl>
						</Box> */}
					</Stack>
					</Box>
				</CardContent>
			</Card>
		</Box>
		<div className="fade"></div>
		</form>
		
	);
}
