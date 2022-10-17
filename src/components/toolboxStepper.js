import * as React from "react";

import { Box, Stack, Typography, Divider } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import CircleIcon from '@mui/icons-material/Circle';


export default function ToolboxStepper(props) {
	return (
        

    <Stack direction="column" alignItems="center"  justifyContent="stretch" ml={1}>
        {props.first
        ?<Box sx={{width: "2px", height: "100%"}}/>
        :<Box sx={{width: "2px", height: "100%", borderLeft: "solid #FF5454 2px", transform: "TranslateX(1px)"}}/>
        }

        {props.variant === "Card" 
        ?<CircleIcon sx={{fontSize: "0.5em"}} color="primary"/>
        :<RadioButtonCheckedRoundedIcon fontSize="small" color="primary"/>

        }
        {props.first
        ?<Box sx={{width: "2px", height: "100%", borderLeft: "dashed #FF5454 2px", transform: "TranslateX(1px)"}}/>
        :<Box sx={{width: "2px", height: "100%", borderLeft: "solid #FF5454 2px", transform: "TranslateX(1px)"}}/>
        }
    </Stack>
        
	);
}