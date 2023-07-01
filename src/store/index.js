import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import toggleSlice from "./toggleSlice";
import meassageSlice from './completeMessegeSlice'
import sentMeassageSlice from './completeSentMessageSlice'

 const store= configureStore({
  reducer: {
    loading: loadingSlice,
    toggle:toggleSlice,
    message:meassageSlice,
    sentMessage:sentMeassageSlice
  },
});
export default store