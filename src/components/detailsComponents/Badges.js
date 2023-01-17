
import * as React from "react";

import Tooltip from '@mui/material/Tooltip';
import { Button, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ForumIcon from '@mui/icons-material/Forum';



export default function Badges(props) {

	return (
		<>
            {props?.badges?.map((badge, index) => 
                <div key={index}>
                <Tooltip  title={badge.achieveOn}>
                    
                <IconButton>
                    {badge.badgeType === "METHOD_CREATOR" ? <NoteAddIcon sx={{height:"16px" ,width:"16px"}}  color="primary" /> : null}
                    {badge.badgeType === "METHOD_FACILITATOR" ? <ForumIcon sx={{height:"16px",width:"16px"}} color="primary" /> : null}
                </IconButton>
                </Tooltip>
                <Typography variant="caption" gutterBottom>
                {badge.badgeType === "METHOD_CREATOR" ? "Method Creator" : null}
                {badge.badgeType === "METHOD_FACILITATOR" ? "Method Facilitator" : null}
                </Typography>
                </div>
            )}

		</>
	);
}
