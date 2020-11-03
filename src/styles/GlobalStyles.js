import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  body{
    font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    background-color: var(--main-bg);
    color: var(--color-gray);
  }

  input{
    border: none;
  }

  :root{
    --main-bg: #FFF;
    --color-blue: #4285F4;
    --color-gray: #5f6368;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 0;
  padding: 32px 16px;
  max-width: 1104px;
  margin: auto;
`;
