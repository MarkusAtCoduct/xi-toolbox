import Avatar from "@mui/material/Avatar"
import Divider from "@mui/material/Divider"
import { Stack } from "@mui/system"
import { Typography, Skeleton } from "@mui/material"
import * as React from "react"

import Badges from "./Badges"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

import Modal from "@mui/material/Modal"
import { useEffect } from "react"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	borderRadius: "16px",
	boxShadow: 24,
	p: 8,
}

export default function UserProfileInfo(props) {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)


	return (
		<>
			<Stack direction='column' spacing={1} mt={2} mb={4} alignItems='center' justifyContent='center'>
				{props.loading ? (<Skeleton variant='circular' width={112} height={112} />)
				 : (<Avatar src={props?.user?.data?.mainAvatarUrl || null} sx={{ width: "112px", height: "112px", fontSize: "5rem" }}>{props?.user.data?.firstName.charAt(0)}</Avatar>
				 )}
				<Typography 
					sx={{width: "100%",
						fontSize: 28,
						fontWeight: "400",
						float: "right"}}
				>
					{!props.loading ? props?.user?.data?.firstName + " " + props?.user?.data?.lastName : <Skeleton width={"100%"}/>}
				</Typography>
					<Badges badges={props?.user?.data?.badges} />


				<div>
					<Button onClick={handleOpen}>Further Details</Button>
					<Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
						<Box sx={style}>
							<Typography id='modal-modal-title' variant='h6' component='h2'>
							Job
							</Typography>
							<Typography id='modal-modal-description' sx={{ mt: 2 }}>
							{props?.user?.data?.currentJob}							
							</Typography>
							<Typography id='modal-modal-title' variant='h6' component='h2'>
							Industry
							</Typography>
							<Typography id='modal-modal-description' sx={{ mt: 2 }}>
							{props?.user?.data?.industry} {props?.user?.data?.yearsOfExperience}						
							</Typography>
							<Typography id='modal-modal-title' variant='h6' component='h2'>
							email
							</Typography>
							<Typography id='modal-modal-description' sx={{ mt: 2 }}>
							{props?.user?.data?.email}							
							</Typography>
						</Box>
					</Modal>
				</div>
			</Stack>
			<Divider />
		</>
	)
}