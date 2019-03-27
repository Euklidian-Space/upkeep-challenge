import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { login } from "./actions";
import './App.css';
import Home from "./components/Home";

const App = props => {

  useEffect(() => {
    props.login();
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
};

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(App);
