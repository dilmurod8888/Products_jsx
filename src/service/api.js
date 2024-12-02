import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com/",
});
api.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});

const getData = async ({ queryKey }) => {
  const page = queryKey[1];
  const res = await api.get(`products?skip=${page}&limit=9`);
  return res;
};

export const getProducts = (page) => {
  return useQuery({
    queryKey: ["/product", page],
    queryFn: getData,
  });
};

export const ap = [];

export const getProductsById = (id = 1) => {
  return useQuery({
    queryKey: ["productId"],
    queryFn: () => api.get(`/products/${id}`),
  });
};

export default api;
