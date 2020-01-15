import React, { useEffect, useReducer } from "react";

const Context = React.createContext<any>(null);

const initialState = {
  name: { a: 1 }
};

const Reducer = (
  state: any,
  { type, payload }: { type: string; payload?: any }
) => {
  switch (type) {
    case "initial":
      return { ...state, name: { ...state.name, a: 3 } };
  }
  return state;
};

export const UserProvider = (props: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
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
