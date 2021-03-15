import React, { useState } from "react";
import InputComponent from "./inputComponent";
import LogoImage from "./logoImage";
import logo from "../assets/SWAT.jpg";
import login_endpoint from "../api/login_endpoint";
import tokenStorage from "../utilities/tokenStorage";

const initialValues = {
  username: "",
  password: "",
};

function LoginForm(props) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login_endpoint.login(
        values.username,
        values.password
      );
      if (response.ok) {
        tokenStorage.storeToken(response.data);
        window.location = "/home";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <LogoImage imageName={logo} />
          </div>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <InputComponent
            name="username"
            value={values.username}
            id="username"
            placeholder={"Email"}
            label="Email"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <InputComponent
            name="password"
            value={values.password}
            id="password"
            placeholder={"Password"}
            label="Password"
            onChange={handleInputChange}
          />
        </div>

        <div class="container">
          <div>
            <div class="row">
              <div class="col text-center">
                <button className="btn btn-primary" onClick={onSubmit}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
