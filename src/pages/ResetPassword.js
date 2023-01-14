import { Container } from "@mui/material";

import * as React from "react";
import ForgotPassword from "../components/ForgotPassword";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { useEffect } from "react";

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
