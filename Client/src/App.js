import React, { useContext } from "react";
import "./App.css";
import Home from "./pages/home/home.jsx";
import Login from "./pages/login/login.jsx";
import Stulogin from "./components/studentlogin/stulogin.jsx";
import Stalogin from "./components/stafflogin/stalogin.jsx";
import Basket from "./pages/basket/basket.jsx";
import Chat from "./pages/chat/chat.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Profile from "./pages/Profile/profile";
// import { AuthContext } from "./context/auth-context";

function App() {
  // const { currentUser } = useContext(AuthContext);

  function PrivateRoute({ children }) {
    if (
      localStorage.getItem("user") === null ||
      localStorage.getItem("user") === " "
    ) {
      return <Navigate to="/" replace />;
    } else {
      return children;
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
    },
    {
      path: "/stulogin",
      element: <Stulogin />,
    },
    {
      path: "/stalogin",
      element: <Stalogin />,
    },
    {
      path: "/basket",
      element: <Basket />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/profile",
      element: (
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
