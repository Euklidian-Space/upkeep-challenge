import React, { useEffect } from "react";

const Home = props => {

  useEffect(() => {
    props.login()
  }, []);

  return (
    <div>
      hello world!
    </div>
  );
};

export default Home;