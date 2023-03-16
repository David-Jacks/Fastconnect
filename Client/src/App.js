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
import { AuthContext } from "./context/auth-context";
import Profile from "./components/Profile/profile";

function App() {
  const { currentUser } = useContext(AuthContext);

  function PrivateRoute({ children }) {
    if (!currentUser) {
      return <Navigate to="/" replace />;
    }

    return children;
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
