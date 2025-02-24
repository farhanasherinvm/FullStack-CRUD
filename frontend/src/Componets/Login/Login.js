import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../Redux/authSlice'
import { loginUser } from '../../Services/AuthServices'
import { Navigate } from 'react-router-dom'
function Login() {
    const [formData,SetFormData]=useState({username:"",password:""})
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        SetFormData({...formData, [e.target.name]:e.target.value})
    }
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
           const response=await loginUser(formData);
           dispatch(loginSuccess({user:formData.username, token:response.data.access}));
           alert("login successful")
           Navigate("/task")
        }
        catch(error){
            alert("login failed.." + error.response.data.detail)
        }
    }
  return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        {/* {error && <div className="alert alert-danger">{error}</div>} */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>

  )
}

export default Login
