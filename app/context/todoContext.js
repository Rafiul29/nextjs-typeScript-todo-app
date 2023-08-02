"use client"
import { createContext,useReducer } from "react";

const initialState = {
  todos: [],
};

export const todosReducer=(state,action)=>{
  switch(action.type){
    case "SET_TODOS":
      return {
        ...state,
        todos:action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
  }
}


export const TodoContext=createContext()

export const TodoContextProvider=({children})=>{
  const [sate,dispatch]=useReducer(todosReducer,initialState);

  return(
    <TodoContext.Provider value={{...sate,dispatch}}>
      {children}
    </TodoContext.Provider>
  )
}

