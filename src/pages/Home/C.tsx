import React, { memo } from "react";
import { useUserStore } from "../../context";
const C = () => {
  const { state, dispatch } = useUserStore();
  console.log("render C子组件", state);
  return <div>子组件：C,{state.name.a}</div>;
};
export default memo(C);
