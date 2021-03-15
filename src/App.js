import "./App.css";
import React, { useState, useEffect } from "react";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import LogOut from "./components/logOut";
import ResourcesPage from "./pages/resourcesPage";
import HomePage from "./pages/homePage";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import AuthContext from "./utilities/context";
import jwtDecode from "jwt-decode";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    getToken();
  }, []);

  const getToken = () => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      console.log(user);
      setUser(user);
    } catch (error) {}
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={LogOut} />
          <Route path="/home" component={HomePage} />
          <Route path="/resources" component={ResourcesPage} />
          <Route path="/register" component={RegisterForm} />
        </Switch>
      </main>
    </AuthContext.Provider>
  );
}

export default App;
