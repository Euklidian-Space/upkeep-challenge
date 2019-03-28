import React from "react";
import { mergeStyles } from "./utils";

export const Row = props => (
  <div style={mergeStyles(props.containerStyle, styles.row)}>
    {props.children}
  </div>
);

const styles = {
  row: {
    display: "flex",
    justifyContent: "row",
    width: "100%"
  }
};
