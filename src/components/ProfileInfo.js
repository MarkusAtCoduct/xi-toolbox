import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Stack } from "@mui/system";
import { Typography} from "@mui/material";
import * as React from "react";
import { useAtom } from "jotai";
import { userAtom } from '../atoms/userAtom';
import { Link } from "react-router-dom";
import EditProfileForm from "./formComponents/EditProfileForm";
import {Button} from "@mui/material";
import Badges from "./detailsComponents/Badges";

export default function ProfileInfo(props) {
	const [user] = useAtom(userAtom)

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
					<Typography
					sx={{
						fontSize: 28,
						fontWeight: "400",
						float: "right",
					}}>
					{user?.data?.firstName +" "+ user?.data?.lastName || "Placeholder"}
				</Typography>
                <Stack direction="column" alignItems="center">
				<Badges badges={user?.data?.badges}/>
                </Stack>
			
				<Link to="/editProfile" state={{prefill: user }} style={{textDecoration: "none" }} component={<EditProfileForm/>} >
				<Button label="fsdgg" size="medium" variant="contained" startIcon={<EditOutlinedIcon />}>
					Edit Personal Detail
				</Button>
				</Link>
			</Stack>
			<Divider />
		</>
	);
}
