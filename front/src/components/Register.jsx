import React, { useState } from 'react'
import { NavLink, Redirect,useHistory } from 'react-router-dom'

import './Register.css'
const Register = () => {

    const [formData,setData]=useState({
        username:"",
        email:"",
        password:"",
        confirmpass:"",
        phone:""
    })

    const handleSubmit=(e)=>{
         e.preventDefault();
        setTimeout(()=>{
          setData({username:"",email:"",password:"",confirmpass:"",phone:""})
        },1000)
        
        return <Redirect to="/Login"/>
    }

    const changevalue=(e)=>{
            const name=e.target.name;
            const value=e.target.value;
            setData({...formData,[name]:value})
    }

    return (
        <div className="container-fluid vh-100 w-100 d-flex justify-content-center align-items-center bgset">
             
        <div className="container bg-light w-50 h-75 borderRadius bg-dark text-white">
         <div className="mx-5 text-center">
          
        <h2>Register</h2>
</div>
        <form className="form mt-3 w-75 mx-auto" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
            <label>Username</label>
            <input type="text" placeholder="Type your username" className="form-control input no-outline" name="username" onChange={changevalue} value={formData.username}/>
        </div>
        <div className="form-group mb-3">
            <label>Email</label>
            <input type="email" placeholder="Type your username" className="form-control input no-outline" name="email" onChange={changevalue} value={formData.email}/>
        </div>
        <div className="form-group mb-3">
            <label>Password</label>
            <input type="password" placeholder="Type your password" className="form-control input no-outline" name="password" onChange={changevalue} value={formData.password}/>
        </div>

        <div className="form-group mb-3">
        <label>Confirm Password</label>
        <input type="password" placeholder="Type your password" className="form-control input no-outline" name="confirmpass" onChange={changevalue} value={formData.confirmpass}/>
    </div>

    <div className="form-group mb-3">
    <label>Phone No.</label>
    <input type="text" placeholder="Type your contact no." className="form-control input no-outline" name="phone" onChange={changevalue} value={formData.phone}/>
</div>
<div className="text-center">
   <button className="btn btn-group text-light"  type='submit' >Submit</button>
</div>
        </form>
         
        </div>

        </div>
    )
}

export default Register
