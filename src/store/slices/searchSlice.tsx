import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        data: [],
        isSearching: false,
    },
    reducers: {
        setData: (state,action) => {
            state.data = action.payload;
        },
        setIsSearching: (state, action) => {
            state.isSearching = action.payload;
        },
    }
})


export const { setIsSearching, setData } = searchSlice.actions;
export default searchSlice.reducer;