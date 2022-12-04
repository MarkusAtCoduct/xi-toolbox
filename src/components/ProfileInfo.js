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
import MethodCreatorForm from "./Forms/MethodCreatorForm";
import IconButton from "@mui/material/IconButton"; 
import { Link } from "react-router-dom";
import AvatarUpload from "./AvatarUpload";
import RegistrationForm from "./Forms/RegistrationForm";
import EditProfileForm from "./Forms/EditProfileForm";

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
					src={user?.data?.mainAvatarUrl || "/broken-image.jpg"}
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
					{user?.data?.firstName +" "+ user?.data?.lastName || "Placeholder"}
				</Typography>
				<Link to="/editProfile" state={{prefill: user }} component={<EditProfileForm />} ><IconButton aria-label="edit" size="medium">
						<EditOutlinedIcon />Edit Personal Details
						</IconButton>
				</Link>
			</Stack>
			<Divider />
		</>
	);
}
