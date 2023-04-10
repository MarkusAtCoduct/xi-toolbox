import AssistantIcon from '@mui/icons-material/Assistant';
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { useAtom } from "jotai";
import * as React from "react";
import { recommendedMethodAtom } from "../../atoms/recommendedMethodAtom";
import SmallCard from "../cardComponents/SmallCardTemplate";
import { Draggable } from '../Draggable';
import { Droppable } from '../Droppable';



export default function RecommendedMethods(props) {
	const [open, setOpen] = React.useState(false)
    const [recommendedMethods, setRecommendedMethods] = useAtom(recommendedMethodAtom)

	const handleTooltipClose = () => {
		setOpen(false)
	}

	const handleTooltipOpen = () => {
		setOpen(true)
	}
    //console.log(recommendedMethods.data)
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

                            <Droppable id="recommendedMethodsContainer">
							<Box p={1}>
                                {recommendedMethods.data && recommendedMethods.data !== [] ?
                                <>
                                {recommendedMethods?.data.map((method) => {
                                    return(
                                    <Draggable key={method.id} id={method.id}>
                                        
                                            <SmallCard data={method} />
                                            </Draggable>)
                                })}
                                </>
                                :
                                <p>No recommended methods</p>
                                }
                            </Box>
                            </Droppable>
						</div>
					}
				>
					<IconButton onClick={handleTooltipOpen}>
						<AssistantIcon sx={{ fontSize: "1.2rem" }} />
					</IconButton>
				</Tooltip>
			</div>
		</ClickAwayListener>
	)
}


