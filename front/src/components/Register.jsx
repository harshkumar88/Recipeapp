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
    const history=useHistory();
 
    const handleSubmit=async(e)=>{
         e.preventDefault();
         const {username,email,password,confirmpass,phone}=formData;
         const res=await fetch("/registerData",{
             method:"POST",
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify({
                    formData
                 })
         })
         const data=await res.json();
         console.log(data)
         if(data.status===422 || !data){
             alert("Invalid Registration")
         }
         else{
             alert("Successfull Registration")
             setData({username:"",email:"",password:"",confirmpass:"",phone:""})
             history.push("/Login")
         }
     
    
      return ;
    }

    const changevalue=(e)=>{
            const name=e.target.name;
            const value=e.target.value;
            setData({...formData,[name]:value})
    }

    return (
        <div className="container-fluid vh-100 w-100  justify-content-center align-items-center bgset">
             <h2 style={{textAlign:"center"}}>Happy Cooking Season</h2>
        <div className="container  w-50 h-75 borderRadius text-black ">
         <div className="mx-5 text-center">
          
        
</div>
        <form className="form mt-3 w-75 mx-auto" onSubmit={handleSubmit} method="POST" >
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
        <input type="password" placeholder="Type your password" className="form-control input" name="confirmpass" onChange={changevalue} value={formData.confirmpass} required/>
    </div>

    <div className="form-group mb-3">
    <label className='dark'>Phone No.</label>
    <input type="text" placeholder="Type your contact no." className="form-control input " name="phone" onChange={changevalue} value={formData.phone} required/>
</div>
<div className="text-center">
   <button className="btn btn-group text-dark"  type='submit' >Submit</button>
</div>
        </form>
         
        </div>

        </div>
    )
}

export default Register
