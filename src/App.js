import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/LoginForm/loginForm";
import RegisterForm from "./components/RegisterForm/registerForm";
import LogOut from "./components/LogOut/logOut";
import ResourcesPage from "./pages/ResourcesPage/resourcesPage";
import HomePage from "./pages/HomePage/homePage";
import NavBar from "./components/NavBar/navBar";
import AuthContext from "./utilities/context/authContext";
import jwtDecode from "jwt-decode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    getToken();
  }, []);

  const getToken = () => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavBar />
      <ToastContainer />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={LogOut} />
          <Route exact path="/resources" component={ResourcesPage} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </main>
    </AuthContext.Provider>
  );
}

export default App;
