import React, { useState } from "react";
import Painel from "./components/Painel";
import Header from "./components/Header";
import { Container, GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Header themeToggler={themeToggler}></Header>
        <Container>
          <Painel></Painel>
        </Container>
        <GlobalStyles></GlobalStyles>
      </ThemeProvider>
    </>
  );
}
