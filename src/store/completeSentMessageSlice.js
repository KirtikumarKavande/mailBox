import { createSlice } from "@reduxjs/toolkit";


const messageInitialState={completeSentMesseage:[]}
const sentMeassageSlice=createSlice({
    name:"message",
    initialState:messageInitialState,
    reducers:{
        sentMessage(state,action){
            state.completeSentMesseage=action.payload
        }
    }
})
export default sentMeassageSlice.reducer;
export const sentMessageAction=sentMeassageSlice.actions.sentMessage