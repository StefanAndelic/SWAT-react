import React, { useContext, useEffect } from "react";
import AuthContext from "../../utilities/context/authContext";
import tokenStorage from "../../utilities/tokenStorage";

function LogOut(props) {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    handleLogOut();
  }, []);

  const handleLogOut = () => {
    setUser(null);
    tokenStorage.removeToken();
    window.location = "/login";
  };

  return null;
}

export default LogOut;
