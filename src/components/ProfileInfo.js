import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MilitaryTech from "@mui/icons-material/MilitaryTechOutlined";
import { Stack } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { useEffect } from "react";

import * as React from "react";

import { useAtom } from "jotai";
import { userAtom } from '../atoms/userAtom';
 
import AvatarUpload from "./AvatarUpload";

export default function ProfileInfo(props) {
	const [user, setUser] = useAtom(userAtom)
console.log(user)

	return (
		<>
			<Stack
				direction="column"
				spacing={1}
				mt={2}
				mb={4}
				alignItems="center"
				justifyContent="center">
				<Avatar
					src={user.data.mainAvatarUrl || "/broken-image.jpg"}
					sx={{ width: "112px", height: "112px" }}
				/>
                <Stack direction="column" alignItems="center">
				<MilitaryTech color="primary" />
				<Typography
					color="#757875"
					sx={{
						fontSize: 12,
						fontWeight: "400",
						float: "right",
						color: "#757875",
					}}>
					{props.badge || "Placeholder"}
				</Typography>
                </Stack>
				<Typography
					sx={{
						fontSize: 28,
						fontWeight: "400",
						float: "right",
					}}>
					{user.data.firstName +" "+ user.data.lastName || "Placeholder"}
				</Typography>

					<AvatarUpload />

                <Button variant="text" sx={{color:"#757875" }} size="small" startIcon={<EditOutlinedIcon />}>
                    Edit Personal Details
                </Button>
			</Stack>
			<Divider />
		</>
	);
}
