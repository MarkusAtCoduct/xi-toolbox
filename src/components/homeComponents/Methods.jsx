import * as React from "react";
import Checkbox from "../../assets/Checkbox.png";
import { Button, Icon } from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function Methods() {
    return (
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div
					style={{
						
						fontStyle: "normal",
						fontWeight: 700,
						fontSize: 28,
						marginBottom: 20,
						color: "#000000",
					}}
				>
					Tailor your methods with worldwide expert community
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						marginBottom: 12,
					}}
				>
					<Icon>
						<TaskAltIcon color="primary"/>
					</Icon>
					<div
						style={{
							
							fontStyle: "normal",
							fontWeight: 400,
							fontSize: 14,
							marginLeft: 16,
							color: "#000000",
						}}
					>
						Explore methods’ combinations, how to conduct, time, budget, effectiveness in practice, and much more.
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						marginBottom: 12,
					}}
				>
					<Icon>
						<TaskAltIcon color="primary"/>
					</Icon>					
					<div
						style={{
							
							fontStyle: "normal",
							fontWeight: 400,
							fontSize: 14,
							marginLeft: 16,
							color: "#000000",
						}}
					>
						Combine methods in the right sequance that gives you the best results for your specific business case.
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						marginBottom: 12,
					}}
				>
					<Icon>
						<TaskAltIcon color="primary"/>
					</Icon>
					<div
						style={{
							
							fontStyle: "normal",
							fontWeight: 400,
							fontSize: 14,
							marginLeft: 16,
							color: "#000000",
						}}
					>
						Create new methods to fulfill your business needs effeciently, and get the expert community validation.
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						marginBottom: 28,
					}}
				>
					<Icon>
						<TaskAltIcon color="primary"/>
					</Icon>
					<div
						style={{
							
							fontStyle: "normal",
							fontWeight: 400,
							fontSize: 14,
							marginLeft: 16,
							color: "#000000",
						}}
					>
						Share your experiences and riewies about methods’ combinations in practice.
					</div>
				</div>
				<Button
					variant='outlined'
					href='/createSet'
					sx={{ float: "left",
                    borderRadius: "16px",
                    background: "transparent",
                    borderColor: "transparent",
                    width: "40%",}}
					disableElevation
				>
					Explore Methods Now
				</Button>
			</div>
		)
}
