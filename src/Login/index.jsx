import React from "react";
import LoginForm from "../components/LoginForm";
import BG from "../assets/loginbg.png";
import "./style.scss";

const Login = () => {
  return (
    <>
      <div className="loginPage">
        <div className="form-sec">
          <LoginForm />
        </div>
        <div className="bg">
          <img src={BG} alt="bg" />
        </div>
      </div>
    </>
  );
};

export default Login;
