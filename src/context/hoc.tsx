import { memo } from "react";

function areEqual(prevProps: any, nextProps: any) {
  return true;
}

const storeMemo = (Component: any) => memo(Component, areEqual);

export { storeMemo };
