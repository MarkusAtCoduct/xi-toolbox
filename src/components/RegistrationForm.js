import Avatar from "@mui/material/Avatar";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Stack } from "@mui/system";
import Select from "@mui/material/Select";
import { Typography, Button, Card, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";

import * as React from "react";


export default function RegistrationForm(props) {


    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
	return (
        <>
		<Card sx={{borderRadius: "16px"}} elevation={0}>
				<CardContent sx={{paddingLeft: "96px", paddingRight: "96px" }}>
					<Stack direction="column" spacing={4}>
						<Stack
                            mt={4}
							direction="column"
							justifyContent="center"
							alignItems="center"
							spacing={2}>
							<Avatar
								src="/broken-image.jpg"
								sx={{ width: "120px", height: "120px" }}
							/>
							<Stack direction="column">
								<Typography
									sx={{
										fontSize: 22,
										fontWeight: "400",
										float: "left",
									}}>
									Upload Photo
								</Typography>
								<Typography
									sx={{
										fontSize: 14,
										fontWeight: "400",
										float: "left",
										color: "#5C5F5D",
									}}>
									(optional)
								</Typography>
							</Stack>
						</Stack>
						<FormControl>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group">
								<FormControlLabel
									value="female"
									control={<Radio />}
									label="Female"
								/>
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Male"
								/>
								<FormControlLabel
									value="other"
									control={<Radio />}
									label="Other"
								/>
							</RadioGroup>
						</FormControl>
						<Stack direction="row" spacing={3} justifyContent="center">
							<div style={{ width: "100%" }}>
								<Typography
									sx={{
										fontSize: 18,
										fontWeight: "400",
										float: "left",
									}}>
									First Name
								</Typography>
								<TextField
									fullWidth
									id="filled-basic"
									label="Filled"
									variant="filled"
								/>
							</div>
							<div style={{ width: "100%" }}>
								<Typography
									sx={{
										fontSize: 18,
										fontWeight: "400",
										float: "left",
									}}>
									Last Name
								</Typography>
								<TextField
									fullWidth
									id="filled-basic"
									label="Filled"
									variant="filled"
								/>
							</div>
						</Stack>
						<div style={{ width: "100%" }}>
							<Typography
								sx={{
									fontSize: 18,
									fontWeight: "400",
									float: "left",
								}}>
								E-mail
							</Typography>
							<TextField
								fullWidth
								id="filled-basic"
								label="Filled"
								variant="filled"
							/>
						</div>
						<Stack direction="row" spacing={3} justifyContent="center">
							<div style={{ width: "100%" }}>
								<Typography
									sx={{
										fontSize: 18,
										fontWeight: "400",
										float: "left",
									}}>
									Industry
								</Typography>
								<FormControl variant="filled" fullWidth>
									<InputLabel id="demo-simple-select-label">Age</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={age}
										label="Age"
										onChange={handleChange}>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</div>
							<div style={{ width: "100%" }}>
								<Typography
									sx={{
										fontSize: 18,
										fontWeight: "400",
										float: "left",
									}}>
									Current Job
								</Typography>
								<FormControl variant="filled" fullWidth>
									<InputLabel id="demo-simple-select-label">Age</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={age}
										label="Age"
										onChange={handleChange}>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</div>
							<div style={{ width: "100%" }}>
								<Typography
									sx={{
										fontSize: 18,
										fontWeight: "400",
										float: "left",
									}}>
									Years of Experience
								</Typography>
								<TextField
									fullWidth
									id="filled-basic"
									label="Filled"
									variant="filled"
								/>
							</div>
						</Stack>
						<div style={{ width: "100%" }}>
							<Typography
								sx={{
									fontSize: 18,
									fontWeight: "400",
									float: "left",
								}}>
								LinkedIn
							</Typography>
							<TextField
								fullWidth
								id="filled-basic"
								label="Filled"
								variant="filled"
							/>
						</div>
						<div style={{ width: "100%" }}>
							<Typography
								sx={{
									fontSize: 18,
									fontWeight: "400",
									float: "left",
								}}>
								About me
							</Typography>
							<TextField
								sx={{ height: "6rem" }}
								fullWidth
								id="filled-basic"
								label="Filled"
								variant="filled"
							/>
						</div>
					</Stack>
				</CardContent>
		</Card>
        <Stack direction="row"   justifyContent="center" alignItems="center" spacing={4} mt={4} pb={4}>
                <Button sx={{width: "264px", height: "52px"}} variant="outlined">Cancel</Button>
                <Button sx={{width: "264px", height: "52px"}} variant="contained">Save Profile</Button>
        </Stack>
        </>
	);
}
