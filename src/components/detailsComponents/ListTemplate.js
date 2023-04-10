import { Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import * as React from "react";



export default function ListTemplate(props) {
	return (
		<Box mt={2}>
				<Typography gutterBottom sx={{ fontSize:"20px",  fontWeight: "600", textAlign:"left"}}>
					{props.heading || "no heading set"}
				</Typography>
                
                <List>
                        {props.listItems?.map((item, index) => (
                            <>
                            <ListItem key={index}>
                                {props.references ? 
                                <a href={"https://"+item} sx={{ fontSize:"14px",  fontWeight: "400", textAlign:"left"}}>
                                {item || "no body set"}
                                </a>
                                :<>
                                <ListItemText primary={item || "no body set"} style={{ fontSize:"14px",  fontWeight: "400", textAlign:"left"}}>
                                </ListItemText>
                                </>
                                }
                            </ListItem>
                        <Divider light/>
                        </>
                        ))}
                    
                </List>
                
		</Box>
	);
}
