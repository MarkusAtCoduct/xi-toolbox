import * as React from "react";
import { Container, Typography } from "@mui/material";
import RegistrationForm from "../components/RegistrationForm";

export default function Register() {
  return (
		<>
			<div
				style={{
					position: "absolute",
					top: "0",
					left: "0",
					width: "100%",
					height: "500%",
					backgroundColor: "#EFF1EE",
					zIndex: "-1",
					overflow: "hidden",
				}}
			></div>
			<Container>
				<Typography
					p={4}
					sx={{
						fontSize: 28,
						fontWeight: "900",
						textAlign: "center",
					}}
				>
					Registration
				</Typography>
				<RegistrationForm />
			</Container>
		</>
	)
}