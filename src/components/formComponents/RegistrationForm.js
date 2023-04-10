import { Button, Card, CardContent, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authApi";


import * as React from "react";


export default function RegistrationForm() {
	const navigate = useNavigate();
	const location = useLocation()
	const state = location.state || ""


	const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = (data) => {	
			console.log(data)
			data.role = ["user"]
			Number(data.yearsOfExperience)
			registerUser(data)
			navigate("/home");
		}

	return (
        <form onSubmit={handleSubmit(onSubmit)}>
		<Card sx={{borderRadius: "16px"}} elevation={0}>
				<CardContent sx={{paddingLeft: "96px", paddingRight: "96px" }}>
					<Stack direction="column" spacing={4}>
						<FormControl>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group">
								<FormControlLabel
									value="female"
									control={<Radio />}
									label="Female"
									{...register("gender")}
								/>
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Male"
									{...register("gender")}
								/>
								<FormControlLabel
									value="other"
									control={<Radio />}
									label="Other"
									{...register("gender")}
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
									label="First Name"
									variant="filled"
									{...register("firstName", { required: true })}
									defaultValue={state.prefill?.firstName || null}
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
									label="Last Name"
									variant="filled"
									
									{...register("lastName", { required: true })}
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
								label="E-mail"
								variant="filled"
								type="email"
								{...register("email", { required: true })}
							/>
						</div>
						<div style={{ width: "100%" }}>
							<Typography
								sx={{
									fontSize: 18,
									fontWeight: "400",
									float: "left",
								}}>
								Password
							</Typography>
							<TextField
								fullWidth
								id="filled-basic"
								label="password"
								variant="filled"
								type="password"
								{...register("password", { required: true })}
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
							<TextField
								fullWidth
								id="filled-basic"
								label="Filled"
								variant="filled"
								{...register("industry")}
							/>
						</div>
							<div style={{ width: "100%" }}>
							<Typography
								sx={{
									fontSize: 18,
									fontWeight: "400",
									float: "left",
								}}>
								Corrent Job
							</Typography>
							<TextField
								fullWidth
								id="filled-basic"
								label="Filled"
								variant="filled"
								{...register("currentJob")}
							/>
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
									type="number"
									defaultValue={0}
									{...register("yearsOfExperience", {max: 3, valueAsNumber: true,})}
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
								{...register("linkedinLink")}
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
								{...register("aboutMe")}
							/>
						</div>
					</Stack>
				</CardContent>
		</Card>
        <Stack direction="row"   justifyContent="center" alignItems="center" spacing={4} mt={4} pb={4}>
                <Button sx={{width: "264px", height: "52px"}} onClick={() => navigate("/home")} variant="outlined">Cancel</Button>
                <Button sx={{width: "264px", height: "52px"}} type="submit" variant="contained">Save Profile</Button>
        </Stack>
        </form>
	);
}
