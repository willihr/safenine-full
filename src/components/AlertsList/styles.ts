import styled, { css } from 'styled-components';

const tableColors = css`
  --table-border-color: #ddd;
  --table-title-color: #666;
  --table-content-color: #666;
  --table-hover-color: #d1deff;
`;

export const Container = styled.div`
  margin: 30px 0;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  h3 {
    background: #f8f8f8;
    padding: 15px 20px;
    font-size: 15px;
    color: #4e73df;

    border-bottom: 1px solid #ddd;
  }

  div {
    padding: 25px 20px;
  }
`;

export const Table = styled.table`
  ${tableColors}

  border-collapse: collapse;
  border: solid 1px black;
  width: 100%;

  thead {
    border-bottom: solid 2px var(--table-border-color);
    text-align: left;

    th {
      border: solid 1px var(--table-border-color);
      padding: 12px 12px;
      font-weight: 500;
      color: var(--table-title-color);
    }
  }

  tbody {
    tr {
      cursor: pointer;
      transition: background 0.2s;
      position: relative;

      &:hover {
        background: var(--table-hover-color) !important;
      }

      td {
        border: solid 1px var(--table-border-color);
        padding: 14px 12px;
        color: var(--table-content-color);
      }
      /*
      svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      } */
    }
  }
`;
