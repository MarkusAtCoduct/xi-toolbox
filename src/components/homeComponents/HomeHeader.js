import * as React from "react";
import Title from "./Title";
import Methods from "./Methods";
import SignInHome from "./SignInHome";
import Fakten from "./Fakten";
import Logos from "../../images/Logos.png";
import background from "../../images/headerBackground.png";

export default function HomeHeader() {
    return (
        <div className="HomeHeader">
            
            <div
                style={{
                    display: "flex",
                    alignContent: "flex-start",
                    flexDirection: "row",
                    marginLeft: 180,
                    marginRight: 180,
                    paddingTop: 90,
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
