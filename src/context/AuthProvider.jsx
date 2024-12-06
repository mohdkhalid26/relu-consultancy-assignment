import { useState } from "react";
import AuthContext from "./AuthContext";
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState({
    id: null,
    fullname: null,
    username: null,
    profileImage: null,
    tagline: null,
  });
  return (
    <AuthContext.Provider value={{ auth, user, setUser, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
