import { Container, Typography } from "@mui/material";

import * as React from "react";
import { useEffect } from "react";

import MethodCreatorForm from "../components/Forms/MethodCreatorForm";
import { useAtom } from "jotai";
import { tabAtom } from "../atoms/tabAtom";

export default function MethodCreator() {
	const [tab , setTab] = useAtom(tabAtom)
	setTab(null)
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
					Create new Method
					</Typography>
				<MethodCreatorForm />
			</Container>
			</div>
		</>
	)
}