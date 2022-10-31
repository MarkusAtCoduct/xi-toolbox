import { Box, Stack, Typography, Divider } from "@mui/material";
import Popover from '@mui/material/Popover';
import AdjustIcon from '@mui/icons-material/Adjust';

import * as React from "react";


export default function LoginPopover(props) {
	return (
        
        <Popover 
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box>
            <Stack direction="column" spacing={2} p={2}>
            <TextField id="filled-basic" label="E-mail" variant="filled" />
            <TextField id="filled-basic" label="Password" variant="filled" />
            </Stack>
        </Box>
      </Popover>
        
	);
}
