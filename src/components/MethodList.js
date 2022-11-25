import { Box, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import * as React from "react";

import ToolboxStepper from "./toolboxStepper";

export default function MethodList(props) {
	return (
		<Box mt={2}>
			<Typography mb={2} sx={{ fontSize: "22px", fontWeight: "900", textAlign: "left" }}>
			{props.heading || "no heading set"}
			</Typography>
            
				
				<Stack direction='column' alignItems="flex-start">
					<Chip label="Input"/>

					{/*</Stack>*props.listItems.map((item) => (
                        <Stack key={item.id} direction="row">
                        <ToolboxStepper variant="Card"></ToolboxStepper>
                        <Box p={1} >
						<Chip label={item.header || "no body set"}/>
                        </Box>
                        </Stack>
					))*/}
					  <Chip label="Output"/>
				</Stack>
			
          
    		</Box>
	)
}