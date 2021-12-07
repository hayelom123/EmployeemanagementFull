import styled from "styled-components";

export const TableHolder = styled.div`
  width: 100%;
  min-height: 90vh;
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: start;
  background: rgba(255, 255, 255, 0.2);
  margin-top: 10px;
  border-radius: 10px;
`;
export const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  caption {
    font-size: 2em;
    margin: 0.5em 0 0.75em;
    font-weight: 700;
  }
  thead {
    background-color: rgba(0, 0, 0, 0.2);
  }
  tr {
    border: 1px solid #ddd;
    padding: 0.35em;
    font-size: 1.2em;
  }
  tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.2);
  }
  tr:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.2);
  }
  th,
  td {
    padding: 0.625em;
    text-align: center;
    text-transform: capitalize;
  }

  th {
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 8px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 10px;
  }
  .button2 {
    background-color: purple;
    /* #008cba; */
    color: white;
  }

  .button2:hover {
    /* padding: 6px 8px; */
    border: 2px solid #008cba;

    background-color: white;
    color: black;
  }

  .button3 {
    background-color: #f44336;
    color: white;
  }

  .button3:hover {
    background-color: white;
    color: black;
    border: 2px solid #f44336;
  }

  @media screen and (max-width: 600px) {
    border: 0;

    caption {
      font-size: 1.3em;
    }

    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
      width: 100%;
    }

    td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 1.2em;
      font-weight: 500;
      text-transform: capitalize;
      text-align: right;
    }

    td::before {
      /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
      content: attr(data-label);
      float: left;
      font-size: 0.8em;
      font-weight: bold;
      text-transform: uppercase;
    }

    td:last-child {
      border-bottom: 0;
    }
  }
`;
