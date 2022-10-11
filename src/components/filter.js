import * as React from "react";
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

export default function Filter() {
	return (
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
										<SearchOutlinedIcon />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position="end">
										<CancelOutlinedIcon />
									</InputAdornment>
								),
							}}
						/>
						<Stack direction="column">
							<FormGroup>
								<FormControlLabel
									sx={{ fontSize: 11, color: "#5C5F5D" }}
									control={<Checkbox defaultChecked />}
									label="Methods"
								/>
								<FormControlLabel control={<Checkbox />} label="MethodSets" />
							</FormGroup>
						</Stack>

						<Box sx={{ minWidth: 120 }}>
							<FormControl fullWidth>
								<InputLabel variant="standard" htmlFor="uncontrolled-native">
									Sort by
								</InputLabel>
								<NativeSelect
									defaultValue={"most relevant"}
									inputProps={{
										name: "age",
										id: "uncontrolled-native",
									}}>
									<option>Most relevant</option>
								</NativeSelect>
							</FormControl>
						</Box>
					</Stack>
				</CardContent>
			</Card>
		</Box>
	);
}
