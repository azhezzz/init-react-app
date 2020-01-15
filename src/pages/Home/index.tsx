import React from "react";
import A from "./A";
import B from "./B";
import C from "./C";
const Home = () => {
  console.log("render 父组件");
  return (
    <div style={{ margin: "0 auto", width: 300 }}>
      父组件
      <div>
        <A />
        <B />
        <C />
      </div>
    </div>
  );
};
export default Home;
