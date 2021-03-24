import React, { useState } from "react";
import InputComponent from "../../components/Input/inputComponent";
import LogoImage from "../../components/LogoImage/logoImage";
import logo from "../../assets/SWAT.jpg";
import login_endpoint from "../../api/login_endpoint";
import tokenStorage from "../../utilities/tokenStorage";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import "../../components/LoginForm/login.css";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login_endpoint.login(username, password);
      if (response.ok) {
        tokenStorage.storeToken(response.data);
        window.location = "/home";
      } else if (!response.ok) {
        toast.error("Check email or password");
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
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <form onSubmit={onSubmit}>
            <div className="username">
              <InputComponent
                name="username"
                value={values.username}
                id="username"
                placeholder={"Email"}
                label="Email"
                onChange={handleChange}
                error={errors.username}
              />
            </div>

            <div className="password">
              <InputComponent
                name="password"
                value={values.password}
                id="password"
                placeholder={"Password"}
                label="Password"
                onChange={handleChange}
                error={errors.password}
              />
            </div>

            <div class="container">
              <div>
                <div class="row">
                  <div class="col text-center">
                    <button className="button" onClick={handleSubmit}>
                      Submit
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

export default LoginForm;
