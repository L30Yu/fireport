import React,{createContext,useReducer} from "react";

export const GridContext=createContext();

const reducer=(state,action)=>{
    return state;
}

const initialState={
    page:10,
}

export const GridProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    return(
        <GridContext.Provider value={{...state}}>
            {children}
        </GridContext.Provider>
    )
}

