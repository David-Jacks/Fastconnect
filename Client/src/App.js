import React from "react";
import "./App.css";
import Home from "./pages/home/home.jsx";
import Login from "./pages/login/login.jsx";
import Stulogin from "./components/studentlogin/stulogin.jsx";
import Basket from "./pages/basket/basket.jsx";
import Chat from "./pages/chat/chat.jsx";
import Profile from "./pages/Profile/profile";
import userData from "../src/userdata.json";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";


function App() {
  // const { currentUser } = useContext(AuthContext);
  const AuthenticatedUserId = "00466124";

  function getUserById(Id){
     return userData.find((user) => user.userId === Id)
  }
  const AuthenticatedUser = getUserById(AuthenticatedUserId);

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
          <Home userData={AuthenticatedUser}/>
        </PrivateRoute>
      ),
    },
    {
      path: "/stulogin",
      element: <Stulogin />,
    },
    {
      path: "/basket",
      element: <Basket userData={AuthenticatedUser}/>,
    },
    {
      path: "/chat",
      element: <Chat userData={AuthenticatedUser}/>,
    },
    {
      path: "/profile",
      element: (
        <PrivateRoute>
          <Profile userData={AuthenticatedUser}/>
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
