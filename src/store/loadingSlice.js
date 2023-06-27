import { createSlice } from "@reduxjs/toolkit";

const loadingInitialState = { isLoading: false };
const loadingSlice= createSlice({
  name: "loading",
  initialState: loadingInitialState,
  reducers: {
    loading(state, action) {
      state.isLoading = action.payload;
    },
  },
});
export const loadingAction=loadingSlice.actions.loading
export default loadingSlice.reducer;
