import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";

import React from "react";
import Facebook from "./../images/Facebook.png";
import Instagram from "./../images/Instagram.png";
import YT from "./../images/YouTube.png";

export default function Footer(props) {
    return (
        <div
            style={{
                bottom: 0,
                width: "100%",
                backgroundColor: "#fff",
            }}>
            <div
                style={{
                    paddingTop: 48,
                    paddingBottom: 56,
                }}>
                <img style={{ marginRight: 40 }} src={Facebook} />
                <img style={{ marginRight: 40 }} src={Instagram} />
                <img src={YT} />
            </div>
            <Container>
                <Stack direction={"row"} alignItems='center'>
                    <Box
                        sx={{
                            width: "100%",
                            color: "#909090",
                            marginRight: 24,
                        }}>
                        <h2>Get in Touch</h2>
                        <p style={{ fontSize: "1.2rem" }}>Call us on</p>
                        <p style={{ fontSize: "1.2rem" }}> +49 (0) 207219453</p>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            color: "#909090",
                            marginRight: 24,
                        }}>
                        <h2>Heading 1</h2>
                        <p style={{ fontSize: "1.2rem" }}>
                            Textblock 1 with many things in it
                        </p>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            color: "#909090",
                            marginRight: 24,
                        }}>
                        <h2>Heading 2</h2>
                        <p style={{ fontSize: "1.2rem" }}>
                            Textblock 2 with many things in it
                        </p>
                    </Box>
                    <Box sx={{ width: "100%", color: "#909090" }}>
                        <h2>Heading 3</h2>
                        <p style={{ fontSize: "1.2rem" }}>
                            Textblock 3 with many things in it
                        </p>
                    </Box>
                </Stack>
            </Container>
            <div
                style={{
                    textAlign: "left",
                    marginLeft: 70,
                }}>
                &copy; 2022 Toolbox
            </div>
        </div>
    );
}
