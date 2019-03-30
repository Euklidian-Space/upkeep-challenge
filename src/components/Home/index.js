import React from "react";
import { connect } from "react-redux";
import { flow } from "lodash/fp";
import Home from "./Home";
import HomeStyles from "./styles";

const mapStateToProps = ({ appData }) => ({
  errs: appData.authErrs
});

const connectToRedux = connect(mapStateToProps);

const applyStyle = StyledComponent => ComposedComponent => () => (
  <StyledComponent>
    <ComposedComponent />
  </StyledComponent>
);

const connectAndStyleHome = flow(
  connectToRedux,
  applyStyle(HomeStyles)
);

export default connectAndStyleHome(Home);