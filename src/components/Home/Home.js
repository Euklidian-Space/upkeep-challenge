import React from "react";

const Home = props => {

  return (
    <div style={styles.container}>
      hello world! your token is {props.token}
      {props.children}
    </div>
  );
};

const styles = {
  container: {
    height: "100%",
    width: "100%"
  }
}

export default Home;