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
import { IconButton, Typography } from "@mui/material";
import { GetContent } from '../services/Api';
import { queryAtom } from "../atoms/queryAtom";
import Select from '@mui/material/Select';


export default function Filter(props) {

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
	const [query, setQuery] = useAtom(queryAtom);

	const onSubmit = data =>{
		console.log("USER" + props.user)

		if (props.user) {
			console.log(props.user)
			GetContent(`/api/method/search?label=${watch("label")}&pageIndex=0&pageSize=${data.pageSize}&sortBy=${watch("sortBy")}&sortDirection=${data.sortDirection}&includeMethods=${watch("includeMethods")}&includeMethodSets=${watch("includeMethodSets")}`)
			.then((response) => {
				var temp = response.data.filter((method) => method.ownerId === props?.user?.data?.userId)
				temp.forEach(element => {
					element.type = "method"
				});
				setMethods(temp)
			})}
		else {
			GetContent(
				`/api/method/search?label=${watch("label")}&pageIndex=${data.pageIndex}&pageSize=${data.pageSize}&sortBy=${data.sortBy}&sortDirection=${data.sortDirection}&includeMethods=${data.includeMethods}&includeMethodSets=${data.includeMethodSets}`,
			).then((response) => {
				response.data.forEach((element) => {
					element.container = "recommendedMethodContainer"
					element.type = "method"
				})
				console.log(response.data)
				setMethods(response.data)
			})
		}
		setQuery(data)
		const tmpItems = [...methods]
		
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
							<FormGroup onChange={handleSubmit(onSubmit)}>
								<FormControlLabel sx={{ fontSize: 11, color: "#5C5F5D" }} control={<Checkbox  checked={query?.includeMethods} {...register("includeMethods")}/>}label="Methods"/>
								<FormControlLabel control={<Checkbox checked={query?.includeMethodSets} {...register("includeMethodSets")}/>}  label="MethodSets" />
							</FormGroup>
						</Stack>

						<Box sx={{ minWidth: 120 }}>
								<Typography>Sort by</Typography>
							<FormControl fullWidth>
								<select
								className="selectSort"
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
