import { Container, Typography } from "@mui/material";

import * as React from "react";

import MethodCreatorForm from "../components/MethodCreatorForm";

export default function MethodCreator() {
  return (
		<>
			<div
				style={{
					
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
					Create new Method				</Typography>
				<MethodCreatorForm />
			</Container>
			</div>
		</>
	)
}