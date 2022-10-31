import { Box, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import * as React from "react";

import ToolboxStepper from "./toolboxStepper";

const listItems = ["Focus Groups", "Market analysis", "Expert Interview", "Brainstorming"]
export default function MethodList(props) {
	return (
		<Box mt={2}>
			<Typography mb={2} sx={{ fontSize: "22px", fontWeight: "900", textAlign: "left" }}>
			{props.heading || "no heading set"}
			</Typography>
            
			{props.listItems ?? (
				
				<Stack direction='column' alignItems="flex-start">
					<Chip label="Input"/>
					{listItems.map((item) => (
                        <Stack key={item} direction="row">
                        <ToolboxStepper variant="Card"></ToolboxStepper>
                        <Box p={1} >
						<Chip label={item || "no body set"}/>
                        </Box>
                        </Stack>
					))}
					  <Chip label="Output"/>
				</Stack>
			)}
          
    		</Box>
	)
}