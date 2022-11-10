import { Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Box, Stack } from '@mui/system';
import {CardContent} from '@mui/material';
import { AddBox } from '@mui/icons-material';

import * as React from 'react';

export default function Login() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
		<div style={{ borderRadius: "16px" }}>
			<Button
				variant='outlined'
				sx={{ borderRadius: "16px" }}
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
					<Stack direction='column'>
						<TextField id='outlined-basic' label='Username / E-mail' variant='outlined' margin='dense' />
						<TextField type='password' id='outlined-basic' label='Password' variant='outlined' margin='dense' />
						<Typography gutterBottom>forgot password ? </Typography>
                        
                        <Button onClick={handleClose} fullWidth variant='contained' sx={{ borderRadius: "16px" }} disableElevation>
							LOGIN
						</Button>
                        
					</Stack>
				</Box>
			</Menu>
		</div>
	)
}