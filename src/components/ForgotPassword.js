import React, { useRef } from "react";

import { Box } from "@mui/system";
import { Card, CardContent, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { checkResetToken } from "../services/Api";
import { userResetPassword } from "../services/Api";
import { useNavigate } from "react-router-dom";

function ForgotPassword(props) {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
	const [isReset, setIsReset] = React.useState(false)

	const navigate = useNavigate();

const onSubmit = (data) => {
    data.resetToken = props.token

	console.log(data)
	checkResetToken("/api/user/check-reset-password-token",data).then((response) => {
		if(response.status === 200){
			console.log("token is valid")
			userResetPassword("/api/user/reset-password",data).then((response) => {
				if(response.status === 200){
					console.log("password reset")
					setIsReset(true)
				}
			})
		}
		else{
			console.error(response);
			console.log("token is invalid")
		}
	}	)
}



const password = useRef({});
password.current = watch("password", "");

    return (
			<Box sx={{ height: "90vh" }}>
				<h1>Reset Password</h1>
				<Card sx={{ borderRadius: "16px" }} elevation={0}>
					<CardContent>
						{!isReset ? (
						<form onSubmit={handleSubmit(onSubmit)}>
							<Stack direction='column' spacing={3} alignItems='center'>
								<Stack direction={"column"} alignItems='center'>
									<Typography
										sx={{
											fontSize: 18,
											fontWeight: "400",
										}}
									>
										New Password
									</Typography>
									<TextField
										label='Password'
										variant='filled'
										{...register("password", {
											required: "You must specify a password",
											minLength: {
												value: 8,
												message: "Password must have at least 8 characters",
											},
										})}
									/>
									{errors.password && <p style={{ fontSize: "9px", color: "#00afc8" }}>{errors.password.message}</p>}
								</Stack>
								<Stack direction='column' alignItems='center'>
									<Typography
										sx={{
											fontSize: 18,
											fontWeight: "400",
											float: "left",
										}}
									>
										Repeat new Password
									</Typography>
									<TextField
										label='repeat password'
										variant='filled'
										{...register("passwordRepeat", {
											validate: (value) => value === password.current || "The passwords do not match",
										})}
									/>

									{errors.passwordRepeat && <p style={{ fontSize: "9px", color: "#00afc8" }}>{errors.passwordRepeat.message}</p>}
								</Stack>
								<Button type='submit' sx={{width: "20%"}} variant='contained'>
									Reset Password
								</Button>
							</Stack>
						</form>
						) : (
							<div>
								<h1>Password reset successfully</h1>
								<Button onClick={() => navigate("/login")}>Login</Button>
							</div>
						)}
					</CardContent>
				</Card>
			</Box>
		)
}

export default ForgotPassword;