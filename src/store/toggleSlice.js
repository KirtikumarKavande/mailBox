import { createSlice } from "@reduxjs/toolkit";
const toggleInitialState={isMenuShow:false}
const toggleSlice= createSlice({
    name:"toggle",
    initialState:toggleInitialState,
    reducers:{
        toggle(state,action){
         state.isMenuShow=action.payload
        }
    }
})

export const toggleAction=toggleSlice.actions.toggle

export default  toggleSlice.reducer; 