import * as React from "react";
import Title from "./Title";
import Methods from "./Methods";
import SignInHome from "./SignInHome";
import Fakten from "./Fakten";
import Logos from "../../images/Logos.png";
import ProcessCards from "./ProcessCards";

export default function CreateProcess() {
    return (
        <div style={{ marginTop: 100 }}>
            <div
                style={{
                    fontFamily: "Roboto",
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
            <button
                style={{
                    color: "white",
                    padding: "10 24",
                    marginBottom: 40,
                    width: 264,
                    height: 52,
                    background: "#FF5449",
                    borderRadius: 100,
                    borderColor: "transparent",
                    fontSize: 18,
                    fontWeight: 900,
                }}>
                Create my own Process
            </button>
        </div>
    );
}
