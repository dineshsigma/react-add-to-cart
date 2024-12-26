import React, { useState } from "react";
import emailIcon from "../img/email.png";
import passwordIcon from "../img/password.png";
import styles from "./SignUp.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

let baseUrl = 'http://localhost:3001';

const Login = ({setAuthenticated}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({});
  const navigate = useNavigate(); // Use the useNavigate hook

  const chaeckData = async (obj) => {
    const { email, password } = obj;
    console.log("email", email, password);

    let loginPayload = {
      "email": email.toLowerCase(),
      "password": password,
    };

    const urlApi = `${baseUrl}/api/v1/users/login`;

    try {
      // Call the login API
      const response = await axios.post(urlApi, loginPayload);

      if (response?.data?.status) {
        // Notify success
        notify("You logged in to your account successfully", "success");

        // Store access token in localStorage
        localStorage.setItem("accessToken", response.data.token);
        setAuthenticated(true);
        // Navigate to the home
        navigate("/home");
      } else {
        // Notify error
        notify("Your password or your email is wrong", "error");
      }
    } catch (error) {
      console.error("Login error:", error);
      notify("Something went wrong!", "error");
    }
  };

  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    chaeckData(data);
  };

  return (
    <div className={styles.container}>
      <form className={styles.formLogin} onSubmit={submitHandler} autoComplete="off">
        <h2>Sign In</h2>
        <div>
          <div>
            <input
              type="text"
              name="email"
              value={data.email}
              placeholder="E-mail"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            <img src={emailIcon} alt="" />
          </div>
        </div>
        <div>
          <div>
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="Password"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            <img src={passwordIcon} alt="" />
          </div>
        </div>

        <div>
          <button type="submit">Login</button>
          <span
            style={{
              color: "#a29494",
              textAlign: "center",
              display: "inline-block",
              width: "100%",
            }}
          >
            Don't have a account? <Link to="/signup">Create account</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
