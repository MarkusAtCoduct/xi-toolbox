import AdbIcon from "@mui/icons-material/Adb";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Button } from "@mui/material";
import { Container } from "@mui/system";

import * as React from "react";

import { Link } from "react-router-dom";
import Login from "./login"
import { useAtom } from "jotai";
import { userAtom } from "../atoms/userAtom";
import { logout } from "../services/authApi";
import AccountMenu from "./AccountMenu";

function ElevationScroll(props) {
	const { children, window } = props;
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
	const [user] = useAtom(userAtom)
	
	const handleChange = (event, newValue) => {
	  setValue(newValue);
	}


	return (
	
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
							ToolBox
						</Typography>
					</Stack>
					<Tabs value={value} onChange={handleChange}>
						<LinkTab label="Home" path="/home" />
						<LinkTab label="Methods Library" path="/createSet" />
						<LinkTab label="How it works" href="/trash" />
						<LinkTab label="About us" href="/spam" />
						{user ?
						<LinkTab label="My Profile" path="/myProfile" />
						:null}
						
					</Tabs>
					<Stack direction="row" spacing={2} alignItems="center">
					{!user
					?<>
					<Login/>
					<Button variant="contained" href="/register" sx={{borderRadius: "16px", width: "100%"}} disableElevation>
						Register
					</Button>
					
					</>
					: <AccountMenu/> }	
					
					</Stack>

					
					
					
				</Stack>
			</Container>
		</AppBar>
		
	);
};


