import React, { useEffect } from "react";
import { useCustomizeReducer } from "./reducer";

const Context = React.createContext<any>(null);

const initialState = {
  name: { a: 1, b: 2 }
};

const Reducer = (
  state: any,
  { type, payload }: { type: string; payload?: any }
) => {
  switch (type) {
    case "initial": {
      state.name.a = 2;
      break;
    }
    default:
      return state;
  }
};

export const UserProvider = (props: any) => {
  const [state, dispatch] = useCustomizeReducer(Reducer, initialState);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "initial" });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export const useUserStore = () => React.useContext(Context);
