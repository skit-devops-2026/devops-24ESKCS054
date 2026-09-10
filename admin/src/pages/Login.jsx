import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();

const [formData, setFormData] = useState({
  email: "",
  password: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // ⚠️ MAINE YAHAN 3000 PORT KO BADALKAR 5000 KAR DIYA HAI
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      formData
    );

    localStorage.setItem("token", res.data.token);

    alert("Login Successful");

    navigate("/Admin");

  } catch (error) {
    alert(error.response?.data?.message || "Login Failed");
  }
};

  return (
   
      <div className="login container-fluid min-vh-100 d-flex align-items-center ">
        <div className="container d-flex justify-content-center">
           <div className="row ">
            <div className="col">
              <div className='d-flex justify-content-center '>
               <img src="/health-serve-logo.png" className="img-fluid "  height="60px" width="130px" alt=""/>
              </div>
              <div className="shadow-lg p-3 rounded-3 bg-white">
              <form className='p-2'  onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                  <input type="email" className="form-control" id="email" placeholder="Enter Your Email"name="email" value={formData.email} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" id="pwd" placeholder="Enter Your Password" name="password" value={formData.password} onChange={handleChange}/>
                </div>
                <div className="form-check mb-3">
                 <a className="float-end link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Forget password?</a>
                </div>
                <div>
                  <button className="btn " type="submit" >Authenticate</button> 
                </div>
              </form>
              </div> 
                </div>
            </div>
           </div>
        </div>

      
  )
}

export default Login
