import React, { FC } from "react";
import { PageProps } from "gatsby";

const Home: FC<PageProps> = (props) => {
  console.log(props);

  return <div>Home</div>;
};

export default Home;
