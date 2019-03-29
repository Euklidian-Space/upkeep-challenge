import styled from "styled-components";

export default styled.div`
  font-family: sans-serif;

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
  }

  form {
    max-width: 30%;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;

      & > input,
      & > select {
        width: 100%;
        padding: 3px 5px;
        font-size: 1em;
        margin-top: 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
    }


    & > .buttonContainer {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 15px;
    }
  }
`;