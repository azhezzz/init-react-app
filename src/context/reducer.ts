import produce, { Draft } from "immer";
import { createReducer } from "react-use";
import createSagaMiddleware, { stdChannel, runSaga } from "redux-saga";
import { useCallback, useMemo, useEffect, useRef } from "react";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const useMiddlewareReducer = createReducer(sagaMiddleware);

// function useReducerAndSaga(reducer, initialState, rootSaga) {
//     const [state, reactDispatch] = useReducer(reducer, initialState)
//     const env = useRef(state)
//     env.current = state
//     const channel = useMemo(() => stdChannel(), [])
//     const dispatch = useCallback((a) => {
//       setImmediate(channel.put, a)
//       reactDispatch(a)
//     }, [])
//     const getState = useCallback(() => env.current, [])
  
//     useEffect(() => {
//       const task = runSaga({ channel, dispatch, getState }, rootSaga)
//       return () => task.cancel()
//     }, [])
  
//     return [state, dispatch]
//   }

export type Reducer<S = any, A = any> = (
  draftState: Draft<S>,
  action: A
) => void | S;

export function useCustomizeReducer<S = any, A = any>(
    reducer: Reducer<S, A>,
    initialState: S,
    rootSaga: any,
    initialAction?: (initial: any) => S
): [S, React.Dispatch<A>];
export function useCustomizeReducer(reducer: any, initialState: any, rootSaga:any, initialAction:any){
    const cachedReducer = useCallback(produce(reducer), [reducer]);
    // return useMiddlewareReducer(cachedReducer, initialState,initialAction)
    const [state, reactDispatch] = useMiddlewareReducer(cachedReducer, initialState,initialAction)
    const env = useRef(state)
    env.current = state
    const channel = useMemo(() => stdChannel(), [])
    const dispatch = useCallback((a) => {
      setImmediate(channel.put, a)
      reactDispatch(a)
    }, [])
    const getState = useCallback(() => env.current, [])
  
    useEffect(() => {
      const task = runSaga({ channel, dispatch, getState }, rootSaga)
      return () => task.cancel()
    }, [])
  
    return [state, dispatch]
}

