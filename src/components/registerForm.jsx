import React, { useState } from "react";
import InputComponent from "./inputComponent";
import register_endpoint from "../api/register_endpoint";
import LogoImage from "./logoImage";
import logo from "../assets/SWAT.jpg";
const initialValues = {
  name: "",
  username: "",
  password: "",
};

function RegisterForm(props) {
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
      const response = await register_endpoint.register(
        values.name,
        values.username,
        values.password
      );
      if (response.ok) {
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
            label="Name"
            name="name"
            value={values.name}
            id="name"
            placeholder={"Name"}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <InputComponent
            label="Email"
            name="username"
            value={values.username}
            id="username"
            placeholder={"Email"}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <InputComponent
            label="Password"
            name="password"
            value={values.password}
            id="password"
            placeholder={"Password"}
            onChange={handleInputChange}
          />
        </div>
        <div class="container">
          <div>
            <div class="row">
              <div class="col text-center">
                <button className="btn btn-primary" onClick={onSubmit}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
