import { Container, Typography } from "@mui/material";

import * as React from "react";

import EditProfileForm from "../components/Forms/EditProfileForm";

export default function EditProfile() {
  return (
		<>
			<div
				style={{
					marginTop: "56px",
					top: "0",
					left: "0",
					width: "100%",
					
					backgroundColor: "#EFF1EE",
					zIndex: "-1",
				}}
			>
			<Container>
				<Typography
					p={4}
					sx={{
						fontSize: 28,
						fontWeight: "900",
						textAlign: "center",
					}}
				>
					Edit Profile
				</Typography>
				<EditProfileForm />
			</Container>
			</div>
		</>
	)
}