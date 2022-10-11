import AdbIcon from '@mui/icons-material/Adb';
import AppBar from "@mui/material/AppBar";
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import React from "react";
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';





function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
	  disableHysteresis: true,
	  threshold: 0,
	  target: window ? window() : undefined,
	});
  
	return React.cloneElement(children, {
	  elevation: trigger ? 4 : 0,
	});
  }
  


function LinkTab(props) {
  return (
    <Tab
		sx={{fontSize: 14, fontWeight: "500"}}
		component={Link}
		to={props.path || "/"}
      	{...props}
    />
  );
}

export default function MainNav(props) {

	
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
	  setValue(newValue);
	}
	return (
		<ElevationScroll {...props}>

		<AppBar position="sticky" color="neutral" elevation={0}>
			<Container>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					mt={1}
					pl={4}
					pr={4}
				>
					<Stack direction="row">
						<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							LOGO
						</Typography>
					</Stack>
					<Tabs value={value} onChange={handleChange}>
						<LinkTab path="/createSet" label="Methods Library" />
						<LinkTab label="How it works" href="/trash" />
						<LinkTab label="About us" href="/spam" />
						<LinkTab label="My Profile" path="/myProfile" />
					</Tabs>
					<Stack direction="row" spacing={2}>
					<Button variant="outlined" sx={{borderRadius: "16px"}} disableElevation>
						Log In
					</Button>
					<Button variant="contained" href="/register" sx={{borderRadius: "16px"}} disableElevation>
						Register
					</Button>
					
					</Stack>

					
					<Avatar src="/broken-image.jpg" sx={{ width: "38", height: "38" }} />
				</Stack>
			</Container>
		</AppBar>
		</ElevationScroll>
	);
};


