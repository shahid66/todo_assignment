import { createSlice } from "@reduxjs/toolkit";

export const todoSlice=createSlice({
    name:"todo",
    initialState:{
        value:[]
       
    },
    reducers:{
        ADDTODO:(state,action)=>{
            
            state.value.push(action.payload)
        },
        REMOVETODO:(state,action)=>{
            
            state.value.splice(action.payload,1)
        },
        EDITTODO:(state,action)=>{
            
            state.value.splice(action.payload['index'],1,action.payload['todo'])
        }
    }
})

export const {ADDTODO,REMOVETODO,EDITTODO}=todoSlice.actions
export default todoSlice.reducer;