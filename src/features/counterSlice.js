import { createSlice } from "@reduxjs/toolkit"

const initialValue=100

const counterSlice= createSlice({
    name:"counter",
    initialState: initialValue,
    reducers:{
        increment:(state)=>{return state+1},
        decrement:(state)=>{return state-1},
        reset:(state)=>{return initialValue},
    }
})

export const {increment,decrement,reset}=counterSlice.actions // component purpose
export default counterSlice.reducer // store purpose