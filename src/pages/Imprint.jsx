import { Card, CardContent, Container } from "@mui/material";
import { useAtom } from "jotai";
import * as React from "react";
import { useEffect } from "react";
import { tabAtom } from "../atoms/atomDefinitions";

export default function About() {
    const [tab , setTab] = useAtom(tabAtom)
    setTab(3)

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
            <Card sx={{ borderRadius: "16px"}}>
                <CardContent>
                    <p>Impressum Placeholder</p>
                </CardContent>
            </Card>
    );
}
