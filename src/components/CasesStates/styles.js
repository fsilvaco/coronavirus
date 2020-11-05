import styled from "styled-components";

export const Cases = styled.div`
  padding: 16px;
  border: ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  margin-bottom: 32px;
  background: ${({ theme }) => theme.backgroundPainel};

  h3 {
    font-size: 1.375rem;
    font-family: "Google Sans", sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.fontColor};
    padding-bottom: 8px;
    margin-bottom: 16px;
  }

  div {
    overflow: auto;
    overflow-x: hidden;
    padding-right: 12px;
    max-height: 480px;

    table {
      border-collapse: collapse;

      thead {
        border-bottom: ${({ theme }) => theme.borderColor};
      }

      tr {
        font-weight: 400;
        color: #70757a;
        font-size: 12px;

        position: relative;
        margin-right: 16px;

        :not(:last-child) {
          border-bottom: ${({ theme }) => theme.borderColor};
        }

        th {
          padding: 0 8px 12px 0;
          text-align: left;
          font-weight: 400;
          background: ${({ theme }) => theme.backgroundHeader};
          color: #70757a;
          font-size: 12px;
          position: sticky;
          top: 0;
          z-index: 1;
        }

        td {
          text-align: left;
          min-width: 175px;
          padding-left: 0;

          color: ${({ theme }) => theme.fontColor};
          font-size: 14px;
          padding: 12px 8px 12px 0;
        }
      }
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 6px;
    max-width: 25px;
  }
`;
