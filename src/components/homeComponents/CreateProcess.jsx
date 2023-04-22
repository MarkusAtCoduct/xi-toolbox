import * as React from "react";
import Title from "./Title";
import Methods from "./Methods";
import SignInHome from "./SignInHome";
import Fakten from "./Fakten";
import Logos from "../../assets/Logos.png";
import ProcessCards from "./ProcessCards";
import { Button } from "@mui/material";

export default function CreateProcess() {
    return (
        <div style={{ marginTop: 100 }}>
            <div
                style={{
                    
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: 57,
                    letterSpacing: -0.25,
                    color: "#000000",
                    marginBottom: 65,
                }}>
                How to create your own Process?
            </div>
            <ProcessCards />
            <Button
					variant='contained'
					href='/createSet'
					sx={{borderRadius: "16px",}}
					disableElevation
				>
					Create your own Process
				</Button>
        </div>
    );
}
