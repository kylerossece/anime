import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: "character",
  initialState: {
    data: [],
    isSearching: false,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },
  },
});

export const { setIsSearching, setData } =
  characterSlice.actions;
export default characterSlice.reducer;
