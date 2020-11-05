import React, { useContext } from "react";
import { Nav } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

export default function Header({ themeToggler }) {
  const theme = useContext(ThemeContext);
  console.log(theme.background);
  return (
    <Nav>
      <Switch
        onChange={() => themeToggler()}
        checked={theme.background === "#181818"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={30}
        handleDiameter={20}
        onColor={"#4e4e4e"}
        offColor={"#4e4e4e"}
        onHandleColor={"#3ea6ff"}
        offHandleColor={"#9e9e9e"}
      />
    </Nav>
  );
}
