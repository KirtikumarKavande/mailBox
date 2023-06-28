import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import toggleSlice from "./toggleSlice";

 const store= configureStore({
  reducer: {
    loading: loadingSlice,
    toggle:toggleSlice
  },
});
export default store