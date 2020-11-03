import React from "react";
import { Nav, Logo } from "./styles";

import logo from "../../assets/microbe.png";

export default function Header() {
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="Virus" />
        <span>Covid-19</span>
      </Logo>
    </Nav>
  );
}
