import React from "react";
import ButtonStyles from "./styles";

const PrimaryButton = props => (
  <ButtonStyles>
    <button 
      type="submit"
      className="primary-btn"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children} 
    </button>
  </ButtonStyles>
);

const DefaultButton = props => (
  <ButtonStyles>
    <button 
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children} 
    </button>
  </ButtonStyles>
);


export {
  PrimaryButton,
  DefaultButton
};