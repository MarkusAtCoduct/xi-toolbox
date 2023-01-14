import { Card, CardContent, Typography } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import RegistrationForm from "../Forms/RegistrationForm";


import Login from "../login";
export default function SignInHome() {


    const { register, handleSubmit, formState: { errors }, watch} = useForm();
  
    const onSubmit = data => {
      console.log(data)
      }


    return (
        <Card sx={{borderRadius: "16px", width: "300px",height: "100%", position: "relative"}}>
            <CardContent sx={{padding: "32px"}}>
                <Stack sx={{height: "100%"}} direction="column" spacing={2} alignItems="center">
                    <div>
            <Typography sx={{fontWeight: 500, fontSize: "22px"}}>Create account for free</Typography>
            <Typography sx={{fontWeight: 300, fontSize: "12px"}}>this way you can save your work!</Typography>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
					<Stack direction='column' spacing={2}>
				
						<TextField {...register("firstName", { required: true })} type="text" label='First name' variant='standard' margin='dense' />
						<TextField {...register("email", { required: true })} type='email'  label='E-mail' variant='standard' margin='dense' />
            <Link to="/register" state={{prefill: {firstName : watch("firstName"), email: watch("email")} }} style={{textDecoration: "none", marginTop: "16px" }} component={<RegistrationForm/>} >

            <Button  variant="contained" type="submit" sx={{borderRadius: "16px"}} disableElevation>
						Create my account
            </Button>
            </Link>
					</Stack>
				</form>
            <Typography sx={{fontWeight: 300, fontSize: "12px"}}>Already have an account? <Login/></Typography>
            </Stack>
            </CardContent>

        </Card>
    );
}
