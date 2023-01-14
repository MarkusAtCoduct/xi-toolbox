import * as React from "react";

import { Container } from "@mui/material";

import Heading from "../components/Heading";
import Filter from "../components/filter";
import MethodCards from "../components/CardGrid"
import {useEffect} from "react";

export default function Methods() {
  useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
  return (
    <>
    <Heading heading={"Methods"}/>
    <Filter />
    <Container>
    <MethodCards />
    </Container>
    </>
  );
}
