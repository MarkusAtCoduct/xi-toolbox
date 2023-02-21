import { Card, Container } from "@mui/material";

import * as React from "react";
import { useEffect } from "react";


import hp from "../images/howItWorks.png";
import HomeHeader from "../components/homeComponents/HomeHeader";
import CreateProcess from "../components/homeComponents/CreateProcess";
import FAQ from "../components/homeComponents/FAQ";
import { useAtom } from "jotai";
import { tabAtom } from "../atoms/tabAtom";
import { Stack } from "@mui/system";


export default function Methods() {
    const [tab , setTab] = useAtom(tabAtom)
    setTab(0)
    useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
    return (
        
        <Stack

                alignItems= "center"
                justifyContent="center"
                sx={{backgroundColor: "#fff"}}>
            
                <HomeHeader />
                <CreateProcess />
                <FAQ />
        
        </Stack>
        
    );
}
