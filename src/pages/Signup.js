import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      username: email,
      password: password,
    };
    fetch("https://inventory-billing-app-backend.onrender.com/users/sign-up", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.acknowledged === true) {
          window.alert("Account created successfully!! Login to continue");
          navigate("/sign-in");
        } else if (data.message === "Username already taken") {
          window.alert("Username taken Already!!");
        } else {
          window.alert("something went wrong!!");
        }
      });
  };

  return (
    <div className="App">
      <nav className="navbar bg-gradient-warning fixed-top">
        <div className="container">
          <button className="navbar-brand text-white app-name btn text-capitalize m-2">
            Inventory Billing App
          </button>
          <form className="d-flex" role="search">
            <button
              onClick={() => navigate("/sign-up")}
              className="btn navbar-btn btn-danger text-capitalize"
            >
              Signup
            </button>
            <button
              onClick={() => navigate("/sign-in")}
              className="btn navbar-btn btn-danger text-capitalize"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/sign-in-admin")}
              className="btn navbar-btn btn-danger text-capitalize"
            >
              {" "}
              Admin Login
            </button>
          </form>
        </div>
      </nav>
      <div className="auth-wrapper mt-5">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3 style={{ color: "blue" }}>Sign Up</h3>
            <div className="mb-3">
              <label style={{ color: "red", fontSize: "15px" }}>
                First name
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="First name"
                required
              />
            </div>
            <div className="mb-3">
              <label style={{ color: "red", fontSize: "15px" }}>
                Last name
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Last name"
                required
              />
            </div>
            <div className="mb-3">
              <label style={{ color: "red", fontSize: "15px" }}>
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-3">
              <label style={{ color: "red", fontSize: "15px" }}>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Enter password"
                autoComplete="off"
                required
              />
            </div>
            <div className="d-grid">
              <button className="btn bg-gradient-success text-white text-capitalize">
                Sign Up
              </button>
            </div>
            <div className="forgot-password text-danger">
              Registered Already ?{" "}
              <span onClick={() => navigate("/sign-in")} className="auth-span">
                sign in
              </span>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        toastStyle={{ backgroundColor: "#18CD30", color: "white" }}
      />
    </div>
  );
};

export default Signup;
