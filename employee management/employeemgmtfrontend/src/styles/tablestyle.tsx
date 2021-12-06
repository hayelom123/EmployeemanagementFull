import styled from "styled-components";
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 5px auto;
  th,
  td {
    text-align: left;
    padding: 8px;
  }
  thead {
    background-color: rgba(0, 0, 0, 0.2);
  }
  tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.2);
    font-size: 1.2em;
  }
  tr:nth-child(odd) {
    font-size: 1.2em;
    background-color: rgba(255, 255, 255, 0.2);
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
`;
