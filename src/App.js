import React from "react";
import Painel from "./components/Painel";
import { Container, GlobalStyles } from "./styles/GlobalStyles";

export default function App() {
  return (
    <>
      <Container>
        <Painel></Painel>
      </Container>
      <GlobalStyles></GlobalStyles>
    </>
  );
}
