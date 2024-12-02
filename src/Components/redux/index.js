import { configureStore } from "@reduxjs/toolkit";
import { productStore } from "./products";

export const store = configureStore({
  reducer: {
    products: productStore.reducer,
  },
});
