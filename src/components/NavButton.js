import { Button } from "@mui/material";

import * as React from "react";

import { Link } from "react-router-dom";


export default function NavButton(props) {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
	



	if (props.active) {
		return (
			<Button
				component={Link}
				to={props.path || "/"}
                onClick={props.handleCloseNavMenu}
				sx={{
					marginTop: "3%",
					paddingBottom: "2%",
					borderRadius: 0,
					borderBottom: 4,
					mr: 2,
					color: "primary",
					display: "block",
				}}
			>
				{props.label || "no label set"}
			</Button>
		);
	}else{
	return (
		<Button
			component={Link}
			to={props.path || "/"}
			onClick={props.handleCloseNavMenu}
			sx={{
				marginTop: "3%",
				paddingBottom: "2%",
				borderRadius: 0,
				borderBottom: 4,
                borderColor: "#ffffff",
				mr: 2,
				color: "#606060",
				display: "block",
			}}
		>
			{props.label || "no label set"}
		</Button>
	);
}
}
