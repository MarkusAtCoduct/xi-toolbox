import { Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Box, Stack } from '@mui/system';
import {CardContent} from '@mui/material';
import { AddBox, CheckBox } from '@mui/icons-material';

import { useForm } from 'react-hook-form';
import * as React from 'react';

import { userForgotPassword } from '../services/Api';
import { login} from "../services/authApi";
import { useAtom } from "jotai";
import { userAtom } from '../atoms/userAtom';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GetUserDetails } from '../services/Api';
import {FormGroup, FormControlLabel, Checkbox} from '@mui/material';


export default function Login() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = useAtom(userAtom)
  const [forgotPassword, setForgotPassword] = React.useState(false);
  const navigate = useNavigate();


  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
	setForgotPassword(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleForgotPassword = () => {
	setForgotPassword(!forgotPassword);
	console.log(forgotPassword)
	  }


  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => {
	if(!forgotPassword){	
	login(data.username, data.password)
	.then((response) => {
        return GetUserDetails().then((res)=> setUser(res))})
		Navigate("/home")
	}
	else{
		delete data.password
		delete data.username
		userForgotPassword("/api/user/forget-password",data).then((response) => {
			console.log(response)
		})
	}
	}

  return (
		<>
			<Button
				variant='outlined'
				sx={{ borderRadius: "16px", width: "100%"}}
				disableElevation
				id='Login-Button'
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				Log in
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "Login-Button",
				}}
			>
				<Box p={2} pl={4} pr={4}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Stack direction='column' spacing={2}>
						{!forgotPassword ?
						<>
						<TextField {...register("username", { required: true })} type="email" label='Username / E-mail' variant='outlined' margin='dense' />
						<TextField {...register("password", { required: true })} type='password'  label='Password' variant='outlined' margin='dense' />
                        
                        <Button onClick={handleClose} type="submit" fullWidth variant='contained' sx={{ borderRadius: "16px" }} disableElevation>
							LOGIN
						</Button>
						</>
						:<> 
						<TextField {...register("email", { required: true })} type="email" label='Username / E-mail' variant='outlined' margin='dense' />
                        
                        <Button onClick={handleClose} type="submit" fullWidth variant='contained' sx={{ borderRadius: "16px" }} disableElevation>
							Send Reset Link
						</Button>
						</>
						}
						<FormGroup>
      						<FormControlLabel control={<Checkbox value={forgotPassword} onClick={handleForgotPassword}/>} label="Forgot your Password?" />
						</FormGroup>
                        
					</Stack>
				</form>
				</Box>
			</Menu>
		</>
	)
}