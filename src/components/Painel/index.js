import React from "react";
import { Grid, PainelLeft, PainelRight } from "./styles";
import GlobalDatas from "../GlobalDatas";
import CasesStates from "../CasesStates";
import News from "../News";

export default function Painel() {
  return (
    <Grid>
      <PainelLeft>
        <GlobalDatas />
        <CasesStates />
      </PainelLeft>
      <PainelRight>
        <News />
      </PainelRight>
    </Grid>
  );
}
