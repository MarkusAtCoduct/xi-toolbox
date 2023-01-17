import Avatar from "@mui/material/Avatar"
import Divider from "@mui/material/Divider"
import { Stack } from "@mui/system"
import { Typography, Skeleton } from "@mui/material"
import * as React from "react"

import Badges from "./detailsComponents/Badges"
import Box from "@mui/material/Box"

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
					{!props.loading ? props?.user?.data?.firstName + " " + props?.user?.data?.lastName : "Loading..."}
				</Typography>
					<Badges badges={props?.user?.data?.badges} />
					
					<Divider />
					
					<Box>
						{props?.user?.data?.currentJob ?(
						<div>
							<Typography align="left" variant="h5">Occupation</Typography>
							<Typography align="left" variant="subtitle1">{props?.user?.data?.currentJob}</Typography>
							<Divider />
						</div>
						): null}
						{props?.user?.data?.yearsOfExperience ?(
						<div>
							<Typography align="left" variant="h5">Years of Experience</Typography>
							<Typography align="left" variant="subtitle1">{props?.user?.data?.yearsOfExperience}</Typography>
							<Divider />
						</div>
						): null}

						{props?.user?.data?.industry ?(
						<div>
							<Typography align="left" variant="h5">Industry</Typography>
							<Typography align="left" variant="subtitle1">{props?.user?.data?.industry}</Typography>
							<Divider />
						</div>
						): null}
					</Box>
			</Stack>
			<Divider />
		</>
	)
}