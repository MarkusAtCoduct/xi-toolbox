import { Card, CardContent, Container } from "@mui/material";
import { useAtom } from "jotai";
import * as React from "react";
import { useEffect } from "react";
import { tabAtom } from "../atoms/tabAtom";

export default function About() {
    const [tab , setTab] = useAtom(tabAtom)
    setTab(3)

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F5F5F5",
        }}>
        <Container sx={{height: "100%", overflow: "auto"}}>
            <Card sx={{marginTop: "80px", borderRadius: "16px"}}>
                <CardContent>
                    <p>Impressum Placeholder</p>
                </CardContent>
            </Card>
        </Container>
        </div>
    );
}
