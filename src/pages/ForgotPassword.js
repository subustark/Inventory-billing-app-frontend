import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = {
      username: email,
    };
    fetch(
      "https://inventory-billing-app-backend.onrender.com/users/forgot-password",
      {
        method: "POST",
        body: JSON.stringify(userEmail),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        if (data.message === "success") {
          window.alert(
            "Password reset link has been sent to your mail. Please check your mail"
          );
          navigate("/sign-in");
        } else if (data.message === "Enter a valid and registered email Id") {
          window.alert("Enter a valid and registered email Id");
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
              Login
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
            <h3 style={{ color: "blue" }}>Forgot Password</h3>
            <div className="mb-3">
              <label style={{ color: "red", fontSize: "15px" }}>
                Email address
              </label>
              <input
                type="email"
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </div>
            <div className="d-grid mt-2">
              <button className="btn bg-gradient-success text-black text-capitalize">
                Password Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
