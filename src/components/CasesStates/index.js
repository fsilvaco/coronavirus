import React, { useState, useEffect } from "react";
import { Cases, Flex } from "./styles";

export default function CasesStates() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fecthData() {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://covid19-brazil-api.now.sh/api/report/v1"
      );
      const data = await response.json();

      setDados(data.data);
    }
    fecthData();
  }, []);

  return (
    <Cases>
      <h3>Casos</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Local</th>
              <th>UF</th>
              <th>Total de casos</th>
              <th>Mortos</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((dado) => (
              <tr key={dado.uid}>
                <td>
                  <Flex>
                    <img
                      src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${dado.uf}.png`}
                      alt=""
                    />
                    <span>{dado.state}</span>
                  </Flex>
                </td>
                <td>{dado.uf}</td>
                <td>{new Intl.NumberFormat().format(dado.cases)}</td>
                <td>{new Intl.NumberFormat().format(dado.deaths)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Cases>
  );
}
