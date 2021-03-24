import React, { useState } from "react";
import InputComponent from "../Input/inputComponent";
import register_endpoint from "../../api/register_endpoint";
import LogoImage from "../LogoImage/logoImage";
import logo from "../../assets/SWAT.jpg";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";

import "../RegisterForm/register.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(5).label("Name"),
  username: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function RegisterForm(props) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register_endpoint.register(
        name,
        username,
        password
      );
      if (response.ok) {
        // alert("Success! Welcome to the application");
        toast.error("Success! Welcome to the application");
      } else if (!response.ok) {
        //alert("Try again");
        toast.error("Try again");
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
            <LogoImage imageName={logo} width={450} height={300} />
          </div>
        </div>
      </div>
      <Formik
        initialValues={{ name: "", username: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <InputComponent
                label="Name"
                name="name"
                value={values.name}
                id="name"
                placeholder={"Name"}
                onChange={handleChange}
                error={errors.name}
              />
            </div>
            <div className="form-group">
              <InputComponent
                label="Email"
                name="username"
                value={values.username}
                id="username"
                placeholder={"Email"}
                onChange={handleChange}
                error={errors.username}
              />
            </div>
            <div className="form-group">
              <InputComponent
                label="Password"
                name="password"
                value={values.password}
                id="password"
                placeholder={"Password"}
                onChange={handleChange}
                error={errors.password}
              />
            </div>
            <div class="container">
              <div>
                <div class="row">
                  <div class="col text-center">
                    <button className="button" onClick={handleSubmit}>
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
