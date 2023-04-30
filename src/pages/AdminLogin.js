import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("123456");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const admin = {
      username: email,
      password: password,
    };
    fetch("https://inventory-billing-app-backend.onrender.com/admin/login", {
      method: "POST",
      body: JSON.stringify(admin),
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
          <button className="navbar-brand text-white app-name btn text-capitalize m-2">
            Inventory Billing App
          </button>
          <div className="d-flex" role="search">
            <button
              onClick={() => navigate("/sign-in-admin")}
              className="btn navbar-btn btn-danger text-capitalize"
            >
              {" "}
              Admin Login
            </button>
            <button
              onClick={() => navigate("/sign-in")}
              className="btn navbar-btn btn-danger text-capitalize"
            >
              User Login
            </button>
            <button
              onClick={() => navigate("/sign-up")}
              className="btn navbar-btn btn-danger text-capitalize"
            >
              User Signup
            </button>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3 style={{ color: "blue", fontSize: "30px" }}>Sign In</h3>
            <div className="mb-3">
              <label style={{ color: "red", fontSize: "15px" }}>
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-4">
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
            <div className="d-grid">
              <button className="btn bg-gradient-success text-white text-capitalize">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
