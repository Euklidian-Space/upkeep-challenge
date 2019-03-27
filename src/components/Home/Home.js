import React, { useEffect } from "react";

const Home = props => {

  useEffect(() => {
    props.login()
  }, []);

  return (
    <div>
      hello world! your token is { props.token }
    </div>
  );
};

export default Home;