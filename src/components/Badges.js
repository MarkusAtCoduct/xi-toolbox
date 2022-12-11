
import * as React from "react";

import Tooltip from '@mui/material/Tooltip';
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MilitaryTech from '@mui/icons-material/MilitaryTech';



export default function Badges(props) {
console.log(props.badges)

	return (
		<>
            {props?.badges?.map((badge, index) => 
                <div>
                <Tooltip key={index} title={badge.achieveOn}>
                    
                     <IconButton>
                     <MilitaryTech color="primary" />
                    </IconButton>
                </Tooltip>
                {badge.badgeType === "METHOD_CREATOR" ? "Method Creator" : null}
                </div>
            )}

		</>
	);
}
