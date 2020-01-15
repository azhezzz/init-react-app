import React, { useContext, memo } from "react";
import { useCountStore } from "../../context";
const A = () => {
  const {
    state: { count },
    dispatch
  } = useCountStore();

  console.log("render A子组件");
  return <div>子组件：A,{count}</div>;
};
export default memo(A);
