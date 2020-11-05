import styled from "styled-components";

export const MainNews = styled.div`
  padding: 16px;
  border: ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  margin-bottom: 32px;
  background: ${({ theme }) => theme.backgroundPainel};

  h3 {
    font-size: 1rem;
    font-family: "Google Sans", sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.fontColor};
    padding-bottom: 8px;
    margin-bottom: 16px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 16px 32px;

  grid-row-gap: 32px;
  grid-column-gap: 0;

  :not(:last-child) {
    margin-bottom: 32px;
  }

  article {
    grid-column: span 12;
    grid-template-columns: 1fr 16px auto;

    display: grid;
    grid-template-rows: repeat(6, minmax(0px, auto));
    grid-column-gap: 0;
    grid-row-gap: 0;

    box-orient: vertical;
    flex-direction: column;
    color: ${({ theme }) => theme.fontColor};
    vertical-align: top;

    align-items: center;

    border-top: ${({ theme }) => theme.borderColor};

    padding-top: 24px;

    span {
      font-size: 0.75rem;
      margin-bottom: 5px;
    }

    figure {
      width: 72px;
      height: 72px;

      grid-column: 3/3;

      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }

    h4 {
      font-size: 0.9375rem;
      grid-column: 1 / span 1;
      line-height: 1.4;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.fontColor};
        font-weight: 500;

        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const Link = styled.div`
  width: 100%;
  text-align: center;
  border-top: ${({ theme }) => theme.borderColor};
  height: 50px;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: #1a73e8;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-size: 0.95rem;

    :hover {
      text-decoration: underline;
    }
  }
`;
