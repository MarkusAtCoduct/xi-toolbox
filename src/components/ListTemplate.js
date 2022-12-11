import { Box, Typography } from "@mui/material";

import * as React from "react";


export default function ListTemplate(props) {
	return (
		<Box mt={2}>
				<Typography gutterBottom sx={{ fontSize:"22px",  fontWeight: "900", textAlign:"left"}}>
					{props.heading || "no heading set"}
				</Typography>
                
                <ol>
                        {props.listItems?.map((item, index) => (
                            <li key={index}>
                                <Typography gutterBottom sx={{ fontSize:"14px",  fontWeight: "400", textAlign:"left"}}>
                                {item || "no body set"}
                                </Typography>
                            </li>
                        ))}
                    
                </ol>
                
		</Box>
	);
}
