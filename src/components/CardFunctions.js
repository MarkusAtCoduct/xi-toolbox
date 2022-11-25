import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FileDownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import MediationIcon from "@mui/icons-material/Mediation";
import ShareIcon from "@mui/icons-material/ShareOutlined";
import SvgIcon from "@mui/material/SvgIcon";
import { ButtonGroup, IconButton } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";

import * as React from "react";

export default function CardFunctions(props) {
	console.log(props.id)
        return (
		<Box>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<div>
					
					<Stack direction="row" alignItems="center">
                        {props.type === "method" 
						?<SvgIcon {...props} color="primary" viewBox="0 0 24 7">
							<path d="M0.0550897 3.43919C0.136072 2.72513 0.451492 2.05807 0.951992 1.54239L0.980545 1.51298C1.12641 1.36268 1.28826 1.22878 1.46322 1.11365C1.86784 0.847387 2.33318 0.687664 2.81603 0.649308L2.83867 0.647509C3.05217 0.630549 3.26692 0.638364 3.47862 0.670797C3.82312 0.723573 4.1546 0.840773 4.45571 1.01627L4.54418 1.06783C4.79338 1.21307 5.01995 1.39405 5.21666 1.60499C5.46994 1.87661 5.6697 2.19359 5.80543 2.53929L5.92 2.8311H16.56L15.66 1.86595L15.5454 1.71475C15.4501 1.58898 15.3895 1.44041 15.3696 1.28388L15.3573 1.18734C15.3458 1.09679 15.3461 1.00513 15.3582 0.914647L15.3686 0.836417C15.423 0.427597 15.7355 0.100885 16.1415 0.0283208C16.2464 0.0095744 16.3537 0.00864241 16.4589 0.025564L16.5432 0.0391234C16.6465 0.0557398 16.745 0.0945033 16.8319 0.152755L16.8572 0.169719C16.9654 0.242221 17.065 0.32671 17.1542 0.421578L19.42 2.8311L19.6807 3.134C19.8244 3.30085 19.9213 3.50274 19.9616 3.71915L19.9643 3.73376C19.9879 3.86032 19.9903 3.98994 19.9713 4.11728C19.9378 4.34157 19.8393 4.55112 19.6879 4.71997L19.42 5.01877L17.0487 7.54092C17.003 7.58946 16.9523 7.63301 16.8975 7.67083C16.6048 7.87259 16.2233 7.89183 15.9118 7.72054L15.8784 7.70214C15.7223 7.6163 15.5919 7.49037 15.5008 7.33734L15.4896 7.31865C15.2972 6.99573 15.2864 6.59606 15.461 6.26319L15.4702 6.2456C15.5165 6.15733 15.5744 6.07566 15.6424 6.00276L16.56 5.01877H5.94L5.85967 5.20829C5.64893 5.70546 5.33553 6.1525 4.94 6.52011L4.71724 6.68122C4.30093 6.98231 3.8079 7.15943 3.29516 7.19209C3.14531 7.20164 2.99493 7.19877 2.84555 7.18351L2.67685 7.16628C2.24514 7.12219 1.83011 6.97607 1.466 6.73997C1.2629 6.60828 1.07816 6.45021 0.916637 6.26992L0.869574 6.21739C0.420823 5.71652 0.137635 5.08932 0.0586927 4.42147L0.0475196 4.32695C0.0159454 4.05983 0.0153073 3.78996 0.0456181 3.5227L0.0550897 3.43919Z" />
						</SvgIcon>
                        :<MediationIcon color="primary"/>
                        }
						<Typography sx={{ fontSize: 11, fontWeight: "500", textAlign: "left" }}color="#000">{props.type === "method" ? "Method" : "Methodset"}</Typography>
					</Stack>
				</div>
				<div>
					<ButtonGroup
						disableElevation
						variant="contained"
						aria-label="Disabled elevation buttons">
						<IconButton aria-label="download" size="medium">
							<FileDownloadIcon />
						</IconButton>
						<IconButton aria-label="delete" size="medium">
							<ShareIcon />
						</IconButton>
						<IconButton aria-label="edit" size="medium">
							<EditOutlinedIcon />
						</IconButton>
						<IconButton
							onClick={() => props.add()}
							color="primary"
							aria-label="add to phase"
							size="medium"
							sx={{ paddingRight: "0" }}>
                            {props.type === "method" 
                            ?<AddCircleOutlinedIcon/>
                            :<CancelIcon color="black"/>
                            }
							
						</IconButton>
					</ButtonGroup>
				</div>
			</Stack>
		</Box>
	);
}
