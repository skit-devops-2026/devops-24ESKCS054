import React, { useState } from "react";
import API from "../api/userApi";
import "./userLogin.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ⚠️ MAINE YAHAN /user/login KO BADALKAR /auth/login KAR DIYA HAI
      const response = await API.post("/auth/login", {
        email,
        password,
      });

      // Token Save
      localStorage.setItem("token", response.data.token);

      // User Data Save (Optional)
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.data)
      );

      alert(response.data.message);
      navigate("/Main");
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <>
      <div className="loginform container-fluid min-vh-100 d-flex align-items-center">
        <div className="form-data col-lg-5 col-md-6 col-sm-8 shadow-lg rounded-5 my-2 p-2 container-fluid">
          <form className="p-2" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center">
              <img
                src="/health-serve-logo.png"
                className="img-fluid"
                height="60px"
                width="130px"
                alt=""
              />
            </div>

            <div className="text-center">
              <h3>Welcome Back!</h3>
              <h5>Login to Continue</h5>
            </div>

            <div className="mb-3">
              <label className="form-label">Enter Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Enter Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3 d-flex justify-content-between align-items-center flex-wrap">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">
                  Remember Me
                </label>
              </div>

              <a
                href="#"
                className="text-primary text-decoration-none"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Login
            </button>

            <div className="text-center mb-3">
              <h6>
                New to Elara?{" "}
                <Link
                  to="/Signup"
                  className="link-underline link-underline-opacity-0 text-primary"
                >
                  Create Account
                </Link>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
