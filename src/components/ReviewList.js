import * as React from "react";

import { Chip, Container } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const listItems = ["helllom", "fjnflds"]

export default function ReviewList(props) {
	return (
		<Box mt={2}>
				<Typography GutterBottom sx={{ fontSize:"22px",  fontWeight: "900", textAlign:"left"}}>
					{props.heading || "no heading set"}
				</Typography>
                {props.listItems ??
                
                    <Stack direction="row" spacing={1}>
                        {listItems.map((item) => (
                            <Chip sx={{
                                backgroundColor: "#FFDAD6",
                                fontSize: 14,
                                fontWeight: "500",
                            }}
                            label={item || "no body set"}
                            />
                        ))}
                    </Stack>
                }
		</Box>
	);
}
