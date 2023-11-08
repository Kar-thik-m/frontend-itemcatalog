import { useState } from "react";

import { backendUrl } from "../../config";
import {  Navigate,useNavigate } from "react-router-dom";
import "./Login.module.css";


const Login = () => {
const navigate=useNavigate();
    const initialState = {
        email: "",
        password: "",
      }
    const [formdata, setFormData] = useState(initialState);
      const handleSubmit =async (e) => {
        e.preventDefault()
        
        const loginResponse=await fetch(`${backendUrl}/login`,{
            method: 'POST',
            body:JSON.stringify(formdata),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const data=await loginResponse.json();
        if(loginResponse.status===200)
        {
          alert('login successful')
          localStorage.setItem('user',JSON.stringify(data))
          setFormData(initialState)
        }
        else{
          alert('login failed')
        }
      } 
      if(localStorage.getItem('user')&&JSON.parse(localStorage.getItem('user'))){
        return <Navigate to={'/'} replace/>
}
const navigateToForgot=()=>{
  navigate('/forgot')
}
const navigateToRegister=()=>{
  navigate('/register')
}
  return (
  <section className="container-fluid" style={{marginTop:'11%' ,backgroundColor:"#4169E1",width:"50%",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"}}>
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-4">
      <form >
      <h3 style={{color:"white",fontSize:"bold"}}>Login form</h3>
      
      <div className="form-group">
        <label style={{color:"white",fontSize:"bold"}} htmlFor="email" className="m-1">Email</label>
        <input
        style={{color:"black",fontSize:"bold"}}
          className="form-control m-1"
          type="email"
          name="email"
          id="email"
          value={formdata.email}
          onChange={(e)=>setFormData({...formdata,email:e.target.value})}
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label style={{color:"white",fontSize:"bold"}} htmlFor="password" className="m-1">Password</label>
        <input
        style={{color:"black",fontSize:"bold"}}
        className="form-control m-1"
          type="password"
          name="password"
          id="password"
          value={formdata.password}
          onChange={(e)=>setFormData({...formdata,password:e.target.value})}
          placeholder="Enter your password"
        />
      </div>
      <button type="Submit" onClick={handleSubmit} className="btn btn-primary btn-block m-2">Submit</button>&nbsp;&nbsp;&nbsp;
  <button onClick={navigateToForgot} className="btn btn-danger btn-block ml-4">forgot password</button>
  <div className="form-footer m-1">
          <p style={{color:"white",fontSize:"bold"}}> sign in <button onClick={navigateToRegister} className="btn btn-warning m-4">Register</button></p>
          
        </div>
    </form >
      </section>
    </section>
  </section>

  
  )
}

export default Login