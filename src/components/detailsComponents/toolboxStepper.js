import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import { Box, Stack } from "@mui/material";

import * as React from "react";


export default function ToolboxStepper(props) {
	return (
        

    <Stack direction="column" alignItems="center"  justifyContent="stretch" ml={1}>
        {props.first
        ?<Box sx={{width: "2px", height: "100%"}}/>
        :<Box sx={{width: "2px", height: "100%", borderLeft: "solid #00afc8 2px", transform: "TranslateX(1px)"}}/>
        }

        {props.variant === "Card" 
        ?<CircleIcon sx={{fontSize: "0.5em"}} color="primary"/>
        :<RadioButtonCheckedRoundedIcon fontSize="small" color="primary"/>

        }
        {props.first
        ?<Box sx={{width: "2px", height: "100%", borderLeft: "dashed #00afc8 2px", transform: "TranslateX(1px)"}}/>
        :<Box sx={{width: "2px", height: "100%", borderLeft: "solid #00afc8 2px", transform: "TranslateX(1px)"}}/>
        }
    </Stack>
        
	);
}