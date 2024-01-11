import { createContext, useReducer } from "react";
// import newData from "../Data/filteredData";

const DataContext = createContext();

const initialState = {
    xAxis:[],
    yAxis:[],
    label:""
}
const dataReducer = (state,action)=>{
    switch(action.type){
        case "SET_X":
            return {xAxis : action.payload}
        case"SET_Y":{
            return  {yAxis :  action.payload}
        }
        case "SET_LABEL":{
        return {label : action.payload}
        }
        default:
            return state;
        
    }
};

const DataProvider = ({children})=>{
    const[state,dispatch] = useReducer(dataReducer,initialState);
    return (
        <DataContext.Provider value={{state,dispatch}}>
            {children}
        </DataContext.Provider>
    )
}
export{DataContext,DataProvider}
