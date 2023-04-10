import { Container } from "@mui/material";

import * as React from "react";
import { useEffect } from "react";
import { BrowserRouter as useParams } from "react-router-dom";
import ForgotPassword from "../components/ForgotPassword";

export default function ResetPassword() {
    useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
    const { token } = useParams();
    return (
        <Container>
            <ForgotPassword token={token}/>
        </Container>
    );
}
