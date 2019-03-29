import styled from "styled-components";

export default styled.div`
  table {
    width: 50%;
    border-collapse: collapse;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: rgb(79,147,206);
    color: white;
    margin-bottom: 20px;
  }

  td {
    text-align: left;
    padding: 15px;
  }

  tr:hover {
    background-color: #ddd;
  }

  .TableContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`