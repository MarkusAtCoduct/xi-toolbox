import { Container, Typography } from "@mui/material";

import * as React from "react";

import { useEffect } from "react";
import MethodEditForm from "../components/formComponents/MethodEditForm";
export default function EditMethod() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
  return (
		<>
			<div
				style={{
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
					Edit Method
					</Typography>
				<MethodEditForm />
			</Container>
			</div>
		</>
	)
}