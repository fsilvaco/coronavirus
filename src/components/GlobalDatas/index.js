import React, { useState, useEffect } from "react";
import { Country, Datas, Grid, Flex, Updated } from "./styles";

export default function GlobalDatas() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    async function fecthData() {
      const response = await fetch(
        `https://covid19-brazil-api.now.sh/api/report/v1/brazil`
      );
      const data = await response.json();

      setCountryData(data.data);
    }
    fecthData();
  }, []);

  return (
    <Country>
      <h3>{countryData.country}</h3>
      <Datas>
        <div>
          <Grid>
            <Flex>
              <span>Total de casos</span>
              <h2>{new Intl.NumberFormat().format(countryData.confirmed)}</h2>
              <span>
                Informados ontem: <b>+505.854</b>
              </span>
            </Flex>
            <Flex>
              <span>Recuperados</span>
              <h2>{new Intl.NumberFormat().format(countryData.recovered)}</h2>
              <span>
                Informados ontem: <b>+505.854</b>
              </span>
            </Flex>
            <Flex>
              <span>Mortos</span>
              <h2>{new Intl.NumberFormat().format(countryData.deaths)}</h2>
              <span>
                Informados ontem: <b>+7.011</b>
              </span>
            </Flex>
          </Grid>
          <Updated>{/*Pegar o horário da ultima atualização da API */}</Updated>
        </div>
      </Datas>
    </Country>
  );
}
