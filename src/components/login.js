import { Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Box, Stack } from '@mui/system';
import {CardContent} from '@mui/material';
import { AddBox } from '@mui/icons-material';

import { useForm } from 'react-hook-form';
import * as React from 'react';


import { login } from "../services/authApi";
import { useAtom } from "jotai";
import { userAtom } from '../atoms/userAtom';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GetUserDetails } from '../services/Api';

export default function Login() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = useAtom(userAtom)
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => {
	login(data.username, data.password)
	.then((response) => {
        return GetUserDetails().then((res)=> setUser(res))})
	}
	Navigate("/home")
		/*{return GetUserDetails()})
	.then((response) => {
        if (!response.ok) {
            throw Error("lol");
        }
        return response;
    }).then((res)=> setUser(res))
	
	
  } */

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
				<Box p={2}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Stack direction='column'>
						<TextField {...register("username", { required: true })} id='outlined-basic' label='Username / E-mail' variant='outlined' margin='dense' />
						<TextField {...register("password", { required: true })} type='password' id='outlined-basic' label='Password' variant='outlined' margin='dense' />
						{/*<Typography gutterBottom>forgot password ? </Typography>*/}
                        
                        <Button onClick={handleClose} type="submit" fullWidth variant='contained' sx={{ borderRadius: "16px" }} disableElevation>
							LOGIN
						</Button>
                        
					</Stack>
				</form>
				</Box>
			</Menu>
		</>
	)
}