import React, { useState,useEffect } from "react";
import emailIcon from "../img/email.png";
import passwordIcon from "../img/password.png";
import styles from "./SignUp.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { validate } from "./validate";

let baseUrl = 'http://localhost:3001';

const Login = ({setAuthenticated}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({}); // State for errors
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    setErrors(validate(data, "login")); // Validate on data change
  }, [data, touched]);

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
        localStorage.setItem("email", response.data.data[0].user_email);
        localStorage.setItem("mobile", response?.data?.data[0]?.user_mobile);
        localStorage.setItem("name", response?.data?.data[0]?.user_name);
       
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
    if (!Object.keys(errors).length) { // Check for errors before submitting
      chaeckData(data);
    } else {
      notify("Please check fields again", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
    <form className={styles.formLogin} onSubmit={submitHandler} autoComplete="off">
      <h2>Sign In</h2>
      <div>
        <div className={errors.email && touched.email ? styles.unCompleted : !errors.email && touched.email ? styles.completed : undefined}>
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
        {errors.email && touched.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div>
        <div className={errors.password && touched.password ? styles.unCompleted : !errors.password && touched.password ? styles.completed : undefined}>
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
        {errors.password && touched.password && <span className={styles.error}>{errors.password}</span>}
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
          Don't have an account? <Link to="/signup">Create account</Link>
        </span>
      </div>
    </form>
    <ToastContainer />
  </div>
  );
};

export default Login;
