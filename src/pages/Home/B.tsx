import React, { useContext, memo } from "react";
import { useUserStore } from "../../context";
const B = () => {
  const { state, dispatch } = useUserStore();

  console.log("render B子组件");
  return <div>子组件：B,{state.name.a}</div>;
};
export default memo(B);
