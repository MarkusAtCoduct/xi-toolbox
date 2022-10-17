import * as React from "react";

import { Box, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import ToolboxStepper from "./toolboxStepper";

const listItems = ["helllom", "fjnflds", "fsgdfg", "fsdfbdslkö"]
export default function MethodList(props) {
	return (
		<Box mt={2}>
			<Typography mb={2} sx={{ fontSize: "22px", fontWeight: "900", textAlign: "left" }}>
			{props.heading || "no heading set"}
			</Typography>
            <Chip label="Input"/>
			{props.listItems ?? (
				<Stack direction='column'>
					{listItems.map((item) => (
                        <Stack direction="row">
                        <ToolboxStepper variant="Card"></ToolboxStepper>
                        <Box p={1} >
						<Chip label={item || "no body set"}/>
                        </Box>
                        </Stack>
					))}
				</Stack>
			)}
            <Chip label="Output"/>
    		</Box>
	)
}