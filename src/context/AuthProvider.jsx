import { useState } from "react";
import AuthContext from "./AuthContext";
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState({
    id: "",
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  return (
    <AuthContext.Provider value={{ auth, user, setUser, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
