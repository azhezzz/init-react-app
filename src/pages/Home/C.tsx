import React, { memo } from "react";
import { useCountStore } from "../../context";
const C = () => {
  console.log("render C子组件");
  return <div>子组件：C</div>;
};
export default memo(C);
