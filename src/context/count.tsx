import React, { useEffect, useReducer } from "react";

const Context = React.createContext<any>(null);

const initialState = {
  count: 1
};

const Reducer = (
  state: any,
  { type, payload }: { type: string; payload?: any }
) => {
  switch (type) {
    case "add_count":
      return { ...state, count: state.count };
  }
  return state;
};

export const CountProvider = (props: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  useEffect(() => {
    const timer = setInterval(() => {
      //   dispatch({ type: "add_count" });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
export const useCountStore = () => React.useContext(Context);
