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
    case "DELETE_TODO":
      return {
        ...state,
        todos:state.todos.filter((project)=>project._id !==action.payload._id)
    }
    
   case "UPDATE_TODO":
        const [existTodo]=state.todos.filter((todo)=>todo._id===action.payload._id)
      return{
        todos:[action.payload,...state.todos.filter((todo)=>todo._id!==existTodo._id)]
      } 
    default:
        return state;  
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

