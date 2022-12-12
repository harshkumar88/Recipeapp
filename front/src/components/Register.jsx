import React, { useState } from 'react'
import { NavLink, Redirect, useHistory } from 'react-router-dom'

import './Register.css'
const Register = () => {

    const [formData, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpass: "",
        phone: ""
    })
    const history=useHistory();

    const handleSubmit=(e)=>{
         e.preventDefault();
        setTimeout(()=>{
          setData({username:"",email:"",password:"",confirmpass:"",phone:""})
          history.push("/Login")
        },1000)
        
       alert("User Register Successfully")
        
    }

    const changevalue = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...formData, [name]: value })
    }

    return (
        <div className="container-fluid vh-100 w-100  justify-content-center align-items-center bgset">
             <h2 style={{textAlign:"center"}}>Happy Cooking Season</h2>
        <div className="container  w-50 h-75 borderRadius text-black ">
         <div className="mx-5 text-center">
          
        
</div>
        <form className="form mt-3 w-75 mx-auto" onSubmit={handleSubmit} >
        <div className="form-group mb-3">
            <label className='dark'>Username</label>
            <input type="text" placeholder="Type your username" className="form-control input" name="username" onChange={changevalue} value={formData.username} required/>
        </div>
        <div className="form-group mb-3">
            <label className='dark '>Email</label>
            <input type="email" placeholder="Type your username" className="form-control input " name="email" onChange={changevalue} value={formData.email} required/>
        </div>
        <div className="form-group mb-3">
            <label className='dark'>Password</label>
            <input type="password" placeholder="Type your password" className="form-control input " name="password" onChange={changevalue} value={formData.password} required/>
        </div>

                    <div className="form-group mb-3">
                        <label className='dark'>Confirm Password</label>
                        <input type="password" placeholder="Type your password" className="form-control input" name="confirmpass" onChange={changevalue} value={formData.confirmpass} required />
                    </div>

    <div className="form-group mb-3">
    <label className='dark'>Phone No.</label>
    <input type="text" placeholder="Type your contact no." className="form-control input " name="phone" onChange={changevalue} value={formData.phone} required/>
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
