import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

export const productStore = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = productStore.actions;

export default productStore.reducer;

