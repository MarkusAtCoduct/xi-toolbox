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
import { FormProvider, useForm, useFieldArray, Controller } from 'react-hook-form';
import {registerUser} from "../../services/authApi"
import { useNavigate } from "react-router-dom";
import AvatarUpload from "../AvatarUpload";
import { useLocation} from "react-router-dom"

import * as React from "react";
import { updateUserDetails } from "../../services/Api";


export default function EditProfileForm(props) {



	const navigate = useNavigate();


	const location = useLocation()
	const state = location.state || ""
	const { register, handleSubmit, formState: { errors } } = useForm();

    const [age, setAge] = React.useState('');


    const handleChange = (event) => {
      setAge(event.target.value);
    };
	console.log(state)

	const onSubmit = (data) => {	
		console.log(data)
			updateUserDetails("/api/user/update", data)
			//navigate("/home");
		}


	return (
        <form onSubmit={handleSubmit(onSubmit)}>
		<Card sx={{borderRadius: "16px"}} elevation={0}>
			<AvatarUpload/>
				<CardContent sx={{paddingLeft: "96px", paddingRight: "96px" }}>
					<Stack direction="column" spacing={4}>
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
									label="First Name"
									variant="filled"
									{...register("firstName", { required: true })}
									defaultValue={state.prefill?.data?.firstName || null}
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
									label="Last Name"
									variant="filled"
									
									{...register("lastName", { required: true })}
									defaultValue={state.prefill?.data?.lastName || null}
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
								label="E-mail"
								variant="filled"
								type="email"
								{...register("email", { required: true })}
								defaultValue={state.prefill?.data?.email || null}
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
								label="Filled"
								variant="filled"
								{...register("industry")}
								defaultValue={state.prefill?.data?.industry || null}
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
								label="Filled"
								variant="filled"
								{...register("currentJob")}
								defaultValue={state.prefill?.data?.currentJob || null}
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
									label="Filled"
									variant="filled"
									type="number"
									{...register("yearsOfExperience", {valueAsNumber: true,})}
									defaultValue={state.prefill?.data?.yearsOfExperience || null}
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
								label="Filled"
								variant="filled"
								{...register("linkedinLink")}
								defaultValue={state.prefill?.data?.linkedinLink || null}
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
								label="Filled"
								variant="filled"
								{...register("aboutMe")}
								defaultValue={state.prefill?.data?.aboutMe || null}
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
