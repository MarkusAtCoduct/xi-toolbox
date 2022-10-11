import * as React from "react";

import { Container } from "@mui/material";

import Heading from "../components/Heading";
import Filter from "../components/filter";
import MethodCards from "../components/CardGrid"

export default function Methods() {
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
