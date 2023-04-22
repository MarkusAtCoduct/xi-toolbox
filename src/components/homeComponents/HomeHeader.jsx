import { Container } from "@mui/system";
import * as React from "react";
import Logos from "../../assets/Logos.png";
import Methods from "./Methods";
import SignInHome from "./SignInHome";
import Title from "./Title";

export default function HomeHeader() {
    return (
        <div className="HomeHeader">
          
            <div
                style={{
                    display: "flex",
                    alignContent: "flex-start",
                    flexDirection: "row",
                }}>
                <div
                    style={{
                        display: "flex",
                        alignContent: "flex-start",
                        flexDirection: "column",
                        textAlign: "left",
                        paddingRight: 77,
                    }}>
                    <Title />
                    <Methods />
                </div>
                <div>
                    <SignInHome />
                </div>
            </div>
            <div style={{ marginTop: 66, marginBottom: 90 }}>
                <img src={Logos} />
            </div>
            
        </div>
    );
}
