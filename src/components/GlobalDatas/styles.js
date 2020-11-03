import styled from "styled-components";

export const Country = styled.div`
  padding: 16px;
  border: 1px solid #dadce0;
  border-radius: 8px;
  margin-bottom: 32px;
  background: #ffffff;

  h3 {
    font-size: 1.375rem;
    font-family: "Google Sans", sans-serif;
    font-weight: 400;
    color: #202124;
    padding-bottom: 8px;
    margin-bottom: 16px;
  }
`;

export const Datas = styled.div`
  display: flex;
  box-orient: vertical;
  flex-direction: column;
  box-align: start;
  align-items: start;
  box-pack: start;
  justify-content: start;
  outline: none;
  width: 100%;

  div {
    margin-bottom: 16px;
    width: 100%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 24px;
`;

export const Flex = styled.div`
  display: flex;
  box-pack: justify;
  justify-content: start;
  box-orient: vertical;
  flex-direction: column;
  position: relative;

  :not(:last-child) {
    border-right: 1px solid #eee;
  }

  span {
    word-wrap: break-word;
    word-break: break-word;
    font-family: "Roboto", sans-serif;
    color: #5f6368;
    font-size: 0.75rem;
    line-height: 1.3;
  }
  h2 {
    font-family: "Google Sans", sans-serif;
    font-weight: 500;
    color: #202124;
    margin: 4px 0 8px;
    font-size: 26px;
  }
`;

export const Updated = styled.div``;
