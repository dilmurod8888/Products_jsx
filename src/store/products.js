import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const productStore = create(
  devtools((set) => ({
    products: null, 
    order: '', 
    search: '', 
    setProducts: (data) => set({ products: data }),
    setOrder: (data) => set({ order: data }),
    setSearch: (data) => set({ search: data })
  }))
);
