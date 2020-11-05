import styled from "styled-components";

export const Nav = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.backgroundHeader};
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 60px;
  height: 64px;
  box-shadow: ${({ theme }) => theme.boxShadowHeader};
`;
