
import Masonry from "@mui/lab/Masonry";
import { Typography } from "@mui/material";
import { useAtom } from "jotai";
import React from "react";
import { dragDisableAtom } from "../atoms/dragDisableAtom";
import { recommendedMethodAtom } from "../atoms/recommendedMethodAtom";
import CardItem from "./cardComponents/CardTemplate";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";


export default function RecommendedGrid(props) {
	const [recommendedMethods] = useAtom(recommendedMethodAtom)
    const [dragDisable] = useAtom(dragDisableAtom)


	if(!recommendedMethods.data || recommendedMethods.data.length === 0){
		return(null)
	}
	else{

	return (
		<Droppable id='recommendedMethodContainer'>
			<Typography gutterBottom ml={4} mt={2} sx={{ textAlign: "left", fontSize: "28px", fontWeight: "400", color: "#5C5F5D" }}>
				Recommended Methods
			</Typography>
				<Masonry columns={2} spacing={2}>
					{recommendedMethods.data.map((method) => (
						<div key={method.id}>

								<div className='method'>
									<Draggable disabled={dragDisable} key={method.id + "-recommendedMethodContainer"} data={method} id={method.id + "-recommendedMethodContainer"}>
										<CardItem className='method' data={method} header={method.header}></CardItem>
									</Draggable>
								</div>
                                
						</div>
					
                    ))}
				</Masonry>
		</Droppable>
	)
	}
}