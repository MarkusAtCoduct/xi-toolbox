import { Card, Container } from "@mui/material";

import * as React from "react";
import { useEffect } from "react";

import hp from "../images/howItWorks.png";
import HomeHeader from "../components/homeComponents/HomeHeader";
import CreateProcess from "../components/homeComponents/CreateProcess";
import FAQ from "../components/homeComponents/FAQ";
import { useAtom } from "jotai";
import { tabAtom } from "../atoms/tabAtom";


export default function Methods() {
    const [tab , setTab] = useAtom(tabAtom)
    setTab(0)
    useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F5F5F5",
            }}>
            <div
                style={{
                    width: 1440,
                }}>
                <HomeHeader />
                <CreateProcess />
                <FAQ />
            </div>
        </div>
    );
}
