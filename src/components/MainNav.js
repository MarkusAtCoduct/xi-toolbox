import AdbIcon from "@mui/icons-material/Adb";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Container } from "@mui/system";

import * as React from "react";

import { Link } from "react-router-dom";
import Login from "./login"
import { useAtom } from "jotai";
import { userAtom } from "../atoms/userAtom";
import { tabAtom } from "../atoms/tabAtom";
import AccountMenu from "./AccountMenu";
import { Box } from "@mui/system";


import logo from "../images/logo.png" 


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

	const [tab , setTab] = useAtom(tabAtom)
	const [value, setValue] = React.useState(0);
	const [user] = useAtom(userAtom)
	
	const handleChange = (event, newValue) => {
	  setTab(newValue);
	}


	return (
	
		<AppBar position="fixed" color="neutral" elevation={0}>
			<Container>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					mt={1}
					pl={4}
					pr={4}
				>
				
						<img src={logo } alt="logo" style={{width: "200px"}}/>
					
					<Tabs value={tab} onChange={handleChange}>
						<LinkTab label="Home" path="/home" />
						<LinkTab label="Methods Library" path="/createSet" />
						<LinkTab label="How it works" path="/HowItWorks" />
						<LinkTab label="Imprint" path="/Imprint" />
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


