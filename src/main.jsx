import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/sass/main.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./Components/redux/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./pages/User.jsx";
import Home from "./pages/Home.jsx";
import Notfound from "./Components/Notfound.jsx";
import ProductID from "./pages/ProductID.jsx";
import Products from "./Components/Products/Products.jsx";
import Likes from "./pages/Likes/Likes.jsx";
import Basket from "./pages/Basket/Basket.jsx";

const client = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/likes",
        element: <Likes />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/product",
        element: <Products />,
      },
      {
        path: "/:id",
        element: <ProductID />,
      },
      {
        path: "*",
        element: <Notfound/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>
);
