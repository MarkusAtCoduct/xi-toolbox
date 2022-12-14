import { Container } from "@mui/material";

import * as React from "react";

import hp from "../images/HowItWorks.png";
import HomeHeader from "../components/homeComponents/HomeHeader";
import CreateProcess from "../components/homeComponents/CreateProcess";
import FAQ from "../components/homeComponents/FAQ";

export default function Methods() {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <div
                style={{
                    width: 1440,
                }}>
                <HomeHeader />
                <img style={{ width: "100%" }} src={hp} />

                <CreateProcess />

                <FAQ />
            </div>
        </div>
    );
}
