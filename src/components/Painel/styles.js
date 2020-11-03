import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 16px 32px;
  width: 100%;
`;

export const PainelLeft = styled.div`
  grid-column: span 8;
`;

export const PainelRight = styled.div`
  grid-column: span 4;
`;
