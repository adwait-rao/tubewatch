import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { DatabaseProvider } from "./context/DbContext.jsx";
import HomeLayout from "./pages/HomeLayout.jsx";
import About from "./pages/About.jsx";
import Room from "./pages/Room.jsx";
import { UserProvider } from "./context/UserContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/room/:roomId",
    element: <Room />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DatabaseProvider>
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserProvider>
    </DatabaseProvider>
  </StrictMode>
);
