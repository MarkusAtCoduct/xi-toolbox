import { Container, Typography } from "@mui/material";

import * as React from "react";

import { useEffect } from "react";
import MethodCreatorForm from "../components/formComponents/MethodCreatorForm";

export default function MethodSetCreate() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
  return (
		<>
			<div
				style={{
					
					marginTop: "56px",
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
					Create new Methodset
					</Typography>
				<MethodCreatorForm />
			</Container>
			</div>
		</>
	)
}