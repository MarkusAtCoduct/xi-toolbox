import * as React from "react"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import Tooltip from "@mui/material/Tooltip"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import Zoom from "@mui/material/Zoom"
import { Divider } from "@mui/material"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"

export default function InformationPopover(props) {
	const [open, setOpen] = React.useState(false)

	const handleTooltipClose = () => {
		setOpen(false)
	}

	const handleTooltipOpen = () => {
		setOpen(true)
	}

	return (
		<ClickAwayListener onClickAway={handleTooltipClose}>
			<div>
				<Tooltip
					arrow
					PopperProps={{
						disablePortal: true,
					}}
					onClose={handleTooltipClose}
					open={open}
					disableFocusListener
					disableHoverListener
					disableTouchListener
					TransitionComponent={Zoom}
					title={
						<div>
							{props.header ? (
								<>
									<Stack direction='row' alignItems={"center"} justifyContent={"space-between"}>
										<div>{props.header}</div>
										<IconButton onClick={handleTooltipClose}>
											<CancelOutlinedIcon color='primary' />
										</IconButton>
									</Stack>
									<Divider />
								</>
							) : (
								<IconButton sx={{ float: "right" }} onClick={handleTooltipClose}>
									<CancelOutlinedIcon color='primary' />
								</IconButton>
							)}

							<Box p={1}>{props.infoText}</Box>
						</div>
					}
				>
					<IconButton onClick={handleTooltipOpen}>
						<InfoOutlinedIcon sx={{ fontSize: "1.2rem" }} />
					</IconButton>
				</Tooltip>
			</div>
		</ClickAwayListener>
	)
}
