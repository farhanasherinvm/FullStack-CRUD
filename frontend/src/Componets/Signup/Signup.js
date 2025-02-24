import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { registerUser } from "../../Services/AuthServices"; 
import {useNavigate} from "react-router-dom";
// import "./Signup.css"; 

function Signup() {
   const navigate=useNavigate()
    const [formData,SetFormData]=useState({username:'', email:'',password:'',password2:''});
    
    const handleChange=(e)=>{
      SetFormData({...formData,[e.target.name]:e.target.value})
    };

    const handleSubmit=async (e)=>{
      e.preventDefault()
      if (formData.password!==formData.password2){
          alert("password do not match")
        return;
      }
      try{
         await registerUser(formData)
         alert("User registered successfully")
         navigate('/login')
      }
      catch(error){
        // alert("signup failed" + error.response.data);
        if (error.response && error.response.data) {
          alert("Signup failed1: " + JSON.stringify(error.response.data));
      } else {
          alert("Signup failed2: " + error.message);
      }
      }
    }

  return (
  
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Sign Up</h3>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input value={formData.username} onChange={handleChange} type="text" className="form-control" id="username" name="username" placeholder="Enter your username" />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input value={formData.email} onChange={handleChange}type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input value={formData.password} onChange={handleChange} type="password" className="form-control" id="password" name="password" placeholder="Enter your password" />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="password2" className="form-label">
              Confirm Password
            </label>
            <input value={formData.password2} onChange={handleChange} type="password" className="form-control" id="password2" name="password2" placeholder="Confirm your password" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-3">
          <a href="/login" className="text-decoration-none">
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
