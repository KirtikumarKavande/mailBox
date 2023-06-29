import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import toggleSlice from "./toggleSlice";
import meassageSlice from './completeMessegeSlice'

 const store= configureStore({
  reducer: {
    loading: loadingSlice,
    toggle:toggleSlice,
    message:meassageSlice
  },
});
export default store