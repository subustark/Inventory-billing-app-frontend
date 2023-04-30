import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: email,
      password: password,
    };
    fetch("https://inventory-billing-app-backend.onrender.com/users/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.message === "Successful login") {
          localStorage.setItem("userDetails", JSON.stringify(data));
          navigate("/home");
        } else if (data.message === "Invalid credentials") {
          window.alert("Invalid credentials");
        } else {
          window.alert("something went wrong");
        }
      });
  };

  return (
    <div className="App">
      <nav className="navbar bg-gradient-warning fixed-top">
        <div className="container">
          <button className="navbar-brand text-white app-name btn text-capitalize m-1">
            Inventory Billing App
          </button>
          <div className="d-flex" role="search">
            <button
              onClick={() => navigate("/sign-up")}
              className="btn navbar-btn btn-danger text-capitalize"
            >
              User Signup
            </button>
            <button
              onClick={() => navigate("/sign-in")}
              className="btn navbar-btn btn-danger text-capitalize"
            >
              User Login
            </button>
            <button
              onClick={() => navigate("/sign-in-admin")}
              className="btn navbar-btn btn-danger text-capitalize"
            >
              {" "}
              Admin Login
            </button>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3 style={{ color: "blue" }}>Sign In</h3>
            <div className="mb-3">
              <label style={{ color: "red", fontSize: "15px" }}>
                Email-address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-1">
              <label style={{ color: "red", fontSize: "15px" }}>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Enter password"
                autoComplete="off"
              />
            </div>
            <div className="forgot-password text-right text-red mb-3">
              <span
                className="auth-span"
                onClick={() => navigate("/forgot-password")}
              >
                {" "}
                Forgot password?
              </span>
            </div>
            <div className="d-grid">
              <button className="btn bg-gradient-success text-white text-capitalize">
                Login
              </button>
            </div>
            <div className="forgot-password text-red">
              Don't have an account ?
              <span onClick={() => navigate("/sign-up")} className="auth-span">
                sign up
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
