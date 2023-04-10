import { Container, Typography } from "@mui/material";

import * as React from "react";

import EditProfileForm from "../components/formComponents/EditProfileForm";

export default function EditProfile() {
  return (
		<>
			<div
				style={{
					top: "0",
					left: "0",
					
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