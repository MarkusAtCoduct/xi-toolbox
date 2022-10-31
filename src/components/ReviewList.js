import { Chip, Container, Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import * as React from "react";

const listItems = ["helllom", "fjnflds"]

export default function ReviewList(props) {
	return (
		<Box mt={2}>
				<Typography gutterBottom sx={{ fontSize:"22px",  fontWeight: "900", textAlign:"left"}}>
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
