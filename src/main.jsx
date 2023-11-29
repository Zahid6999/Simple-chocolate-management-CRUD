import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import AllChocolate from "./components/AllChocolate";
import NewChocolate from "./components/NewChocolate";
import UpdatePage from "./components/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AllChocolate />,
        loader: () => fetch("http://localhost:5000/chocolates"),
      },
      {
        path: "/new-chocolate",
        element: <NewChocolate />,
      },
      {
        path: "/updatePage/:id",
        element: <UpdatePage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chocolate/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
