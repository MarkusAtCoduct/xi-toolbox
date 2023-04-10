import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/system";
import { useAtom } from "jotai";
import * as React from "react";
import { Link } from "react-router-dom";
import { userAtom } from '../../atoms/userAtom';
import Badges from "../detailsComponents/Badges";
import EditProfileForm from "../formComponents/EditProfileForm";

export default function ProfileInfo(props) {
	const [user] = useAtom(userAtom)
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
