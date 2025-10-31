import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: [],
    isSearching: false,
    filterValue: {
      genres: [] as string[],
      season: "",
      seasonYear: null as number | null,
      format: [] as string[],
    },
    hasFilter: false,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },
    setFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },
    setHasFilter: (state, action) => {
      state.hasFilter = action.payload;
    },
  },
});

export const { setIsSearching, setData, setFilterValue, setHasFilter } =
  searchSlice.actions;
export default searchSlice.reducer;
