import { Card, CardContent, Container } from "@mui/material";
import { useEffect } from "react";
import * as React from "react";
import process from "../images/XI-Lab_Prozessmodell.png";
import { useAtom } from "jotai";
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
