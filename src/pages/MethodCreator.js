import { Container, Typography } from "@mui/material";

import * as React from "react";
import { useEffect } from "react";

import MethodCreatorForm from "../components/formComponents/MethodCreatorForm";
import { useAtom } from "jotai";
import { tabAtom } from "../atoms/tabAtom";
import { queryAtom } from "../atoms/queryAtom";
import { GetContent } from "../services/Api";

export default function MethodCreator() {

	//get all methods from the database


	const [tab , setTab] = useAtom(tabAtom)
	const [query, setQuery] = useAtom(queryAtom)


	var inputsOutputs = { inputs: [], outputs: []}
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
				<MethodCreatorForm inputsOutputs={inputsOutputs}/>
			</Container>
			</div>
		</>
	)
}