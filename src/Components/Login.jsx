import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-header">
        <h1>Mario juicy</h1>
        <button>ADMIN</button>
      </div>
      {/* LOGIN BODY */}
      <div className="login-body">
        <form>
          <div className="login-body-header">
            <h1>LOG IN</h1>
          </div>
          <div className="login-inputs">
            <input placeholder="Enter UserName"></input><br/>
            <input placeholder="Enter Password" type="password"></input>
          </div>
          <button className="login-btn" type="submit"><b>SUBMIT</b></button>
        </form>
      </div>
    </>
  );
};

export default Login;
