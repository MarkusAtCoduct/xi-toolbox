
import { Box } from "@mui/material"
import * as React from "react"
import CheckIcon from '@mui/icons-material/CheckRounded';
import { Stack } from "@mui/system";
import DoDisturbAltRoundedIcon from '@mui/icons-material/DoDisturbAltRounded';
import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastRounded';
import SouthWestOutlinedIcon from '@mui/icons-material/SouthWestRounded';


export default function MatchIndicator(props) {

	return (
        <Box>
            <Stack direction={"column"}>
{/*                 <SouthEastOutlinedIcon />
 */}                    {props.match ? <CheckIcon /> : <DoDisturbAltRoundedIcon />}
{/*                 <SouthWestOutlinedIcon />
 */}            </Stack>
        </Box>
    )

	}

