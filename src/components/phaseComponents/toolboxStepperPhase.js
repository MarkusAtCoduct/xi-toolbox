import { Box, Stack } from "@mui/material";

import * as React from "react";




export default function ToolboxStepperPhase(props) {
	return (
		<Stack direction='column' alignItems='center' justifyContent='stretch' ml={1}>
			{props.index === 0 ? (
				<>
					<Box sx={{ width: "2px", height: "100%", borderLeft: "none", transform: "TranslateX(1px)" }} />
					<div className='circle'></div>
					<Box mb={-1} sx={{ width: "2px", height: "100%", borderLeft: "solid #00afc8 2px", transform: "TranslateX(1px)" }} />
				</>
			) : (
				<>
					{props.empty ? (
                        <>
                        {!props.last ? (
                            <>
							<Box sx={{ width: "2px", height: "100%", borderLeft: "none", transform: "TranslateX(1px)" }} />
							<div className='circle'></div>
							<Box sx={{ width: "2px", height: "100%", borderLeft: "none", transform: "TranslateX(1px)" }} />
						    </>
                        ):(<>
							<Box sx={{ width: "2px", height: "100%", borderLeft: "dotted #00afc8 2px", transform: "TranslateX(1px)" }} />
							<div className='circlePlaceholder'></div>
							<Box sx={{ width: "2px", height: "100%", transform: "TranslateX(1px)" }} />
						</>)
                        }
						</>
					) : (
						<>
							<Box sx={{ width: "2px", height: "100%", borderLeft: "solid #00afc8 2px", transform: "TranslateX(1px)" }} />
							<div className='circle'></div>
							<Box mb={-1} sx={{ width: "2px", height: "100%", borderLeft: "solid #00afc8 2px", transform: "TranslateX(1px)" }} />
						</>
					)}
				</>
			)}
		</Stack>
	)
}