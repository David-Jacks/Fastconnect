import axios from "axios";
const { createContext, useState } = require("react");

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState({});

  const login = async (inputs) => {
    await axios
      .post("/api/auth/login", inputs)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(currentUser));
        setcurrentUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
