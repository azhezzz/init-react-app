import React, { useContext, memo, useState, useEffect } from "react";
import { useUserStore } from "../../context";
const B = () => {
  const { state, dispatch } = useUserStore();
  console.log("render B子组件", state);
  return <div>子组件：B,{state.name.b}</div>;
};
export default memo(B);
