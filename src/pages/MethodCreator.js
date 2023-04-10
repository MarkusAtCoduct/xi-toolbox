import { Container, Typography } from "@mui/material";

import * as React from "react";
import { useEffect } from "react";

import { useAtom } from "jotai";
import { tabAtom } from "../atoms/tabAtom";
import MethodCreatorForm from "../components/formComponents/MethodCreatorForm";

export default function MethodCreator() {

	//get all methods from the database


	const [tab , setTab] = useAtom(tabAtom)


	var inputsOutputs = { inputs: [], outputs: []}
	setTab(null)

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
					Create new Method
					</Typography>
				<MethodCreatorForm inputsOutputs={inputsOutputs}/>
			</Container>
			</div>
		</>
	)
}