import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Checkbox from "@mui/material/Checkbox"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import InputAdornment from "@mui/material/InputAdornment"
import InputLabel from "@mui/material/InputLabel"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"

import { useAtom } from "jotai"
import { useForm } from "react-hook-form"

import * as React from "react"

import { IconButton, MenuItem } from "@mui/material"
import Select from "@mui/material/Select"
import { queryAtom } from "../atoms/queryAtom"

export default function Filter() {
	const Search = useForm({
		defaultValues: {
			label: "",
			pageIndex: 0,
			pageSize: 20,
			sortBy: "name",
			sortDirection: "asc",
			includeMethods: true,
			includeMethodSets: true,
		},
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = Search

	const [query, setQuery] = useAtom(queryAtom)
	const [state, setState] = React.useState({})

	const onSubmit = (data) => {
		console.log("test")
		if (data.label === "") {
			setQuery({ ...query, includeMethods: data.includeMethods, includeMethodSets: data.includeMethodSets, sortBy: data.sortBy })
		} else {
			setQuery(data)
		}
	}

	const handleChange = (event) => {
		console.log(event)
		console.log(state)
		if(event.target.name === "includeMethods" || event.target.name === "includeMethodSets"){
			setState({ ...state, [event.target.name]: event.target.checked })
			setQuery({ ...query, [event.target.name]: event.target.checked })
		}else{
		setState({ ...state, [event.target.name]: event.target.value })
		setQuery({ ...query, [event.target.name]: event.target.value })
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box p={2}>
					<Card elevation={0} sx={{ backgroundColor: "#fafafa", borderRadius: "16px" }}>
						<CardContent>
							<Box>
								<Stack direction='row' justifyContent='space-around' alignItems='center'>
									<TextField
										id='outlined-basic'
										label='Search'
										variant='outlined'
										name="label"
										onChange={(e) => handleChange(e)}
										value={state.label || query.label}
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<IconButton type='submit'>
														<SearchOutlinedIcon />
													</IconButton>
												</InputAdornment>
											),
										}}
									/>

									<Stack direction={"column"}>
										<FormControlLabel
											sx={{ fontSize: 11, color: "#5C5F5D", margin: 0 }}
											control={<Checkbox 
												checked={query?.includeMethods} 
												onClick={(e)=> handleChange(e)}
												{...register("includeMethods")} />}
												label='Methods'
											/>
										<FormControlLabel
											sx={{ fontSize: 11, color: "#5C5F5D", margin: 0 }}
											control={<Checkbox
												checked={query?.includeMethodSets} 
												onClick={(e)=> handleChange(e)}
												{...register("includeMethodSets")} />}
												label='MethodSets'
											/>
									</Stack>

									<Box sx={{ width: 125 }}>
										<FormControl fullWidth>
											<InputLabel id='demo-simple-select-label'>Sort By</InputLabel>
											<Select
												sx={{ height: "56px" }}
												className='selectSort'
												labelId='demo-simple-select-label'
												id='demo-simple-select'
												label='Sort By'
												{...register("sortBy", { onChange: (e) => handleChange(e) })}
												value={query.sortBy}
											>
												<MenuItem value={"name"}>Name</MenuItem>
												<MenuItem value={"cost"}>Cost</MenuItem>
												<MenuItem value={"time"}>Time</MenuItem>
												<MenuItem value={"rate"}>Rating</MenuItem>
											</Select>
										</FormControl>
									</Box>
{/* 
									<Box sx={{ width: 125 }}>
										<FormControl fullWidth>
											<InputLabel id='sortDirectionLabel'>Sort Direction</InputLabel>
											<Select
												sx={{ height: "56px" }}
												className='selectSort'
												labelId='sortDirectionLabel'
												id='sortDirection'
												label='sort Direction'
												{...register("sortDirection", { onChange: (e) => handleChange(e) })}
												value={query.sortDirection}
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
				<div className='fade'></div>
			</form>
		</>
	)
}
