import { createSlice } from "@reduxjs/toolkit";


const messageInitialState={completeMesseageData:[]}
const meassageSlice=createSlice({
    name:"message",
    initialState:messageInitialState,
    reducers:{
        message(state,action){
            state.completeMesseageData=action.payload
        }
    }
})
export default meassageSlice.reducer;
export const messageAction=meassageSlice.actions.message