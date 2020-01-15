import React from "react";
import { CountProvider, useCountStore } from "./count";
import { UserProvider, useUserStore } from "./user";

const createStoreProvider = (providers: any) => (props: any) =>
  providers
    .reverse()
    .reduce(
      (tree: any, Provider: any) => <Provider>{tree}</Provider>,
      props.children
    );

const StoreProvider = createStoreProvider([CountProvider, UserProvider]);

export default StoreProvider;
export { useCountStore, useUserStore };
