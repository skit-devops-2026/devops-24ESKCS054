import React, { useState } from "react";
import API from "../api/userApi";
import "./userLogin.css"
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignUp = () => {

const [name, setName] = useState("");

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await API.post(
            "/user/register",
            {
                name,
                email,
                password
            }
        );
        alert(response.data.message);
        navigate("/Login");
    }
    catch (error) {
        console.log(error);
        alert(error.response?.data?.message || "Registration Failed");
    }
};

  return (
    <>
    <div className='loginform container-fluid min-vh-100 d-flex align-items-center'>
       <div className="form-data col-lg-5 col-md-6 col-sm-8 shadow-lg rounded-5 my-2 p-2  container-fluid">
                  
                    <form className="p-1" onSubmit={handleSubmit}>
                       <div className='d-flex justify-content-center '>
                        <img src="/health-serve-logo.png" className="img-fluid "  height="60px" width="130px" alt=""/>
                       </div>
                       <div className=" text-center">
                        <h3>Welcome Back!</h3>
                        <h5> Signup to Continue</h5>
                    </div>
                        <div className="mb-2">
                            <label  className="form-label">
                             Enter Name 
                            </label>
                            <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}
                               />
                        </div>
                        <div className="mb-2">
                            <label  className="form-label">
                             Enter Email 
                            </label>
                            <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}
                              />
                        </div>
                        <div className="mb-2">
                           <label className="form-label">Enter Password</label>
                           <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3 d-flex justify-content-between align-items-center flex-wrap">
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                              <label className="form-check-label" >Remember Me</label>
                            </div> 
                            <a href="#" className="text-primary text-decoration-none">
                             Forgot Password?
                            </a>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Signup</button>
                        
                        <div className="text-center mb-3"> or</div>
                        <button type="submit" className="btn border border-black w-100 mb-3 d-flex justify-content-center align-items-center gap-2" >
                              <FcGoogle size={24} />
                             <span>Continue with Google</span>
                        </button>
                        <button type="submit" className="btn border border-black w-100 mb-3 d-flex justify-content-center align-items-center gap-2" >
                            <FaFacebook size={24} color="#1877F2" /> <span>Continue with Facebook</span>
                        </button>
                        <div className="text-center mb-2"><h6>Already have an accound? <Link to="/Login" className=' link-underline link-underline-opacity-0 text-primary'>Login</Link></h6></div>
                    </form>

                </div>
              </div>  
    </>
  )
}

export default SignUp
