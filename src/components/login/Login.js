import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function ({setLoginUser}) {

    const navigate=useNavigate();


    const[user,setUser]=useState({
        email:'',
        password:'',
    })

const handleChange=(e)=>{
const{name,value}=e.target;
setUser({
    ...user,
    [name]:value
})
}

const login=async()=>{
    const{name,email,password,reEnterPassword}=user;
    if(email && password){
        await axios.post('http://localhost:9002/login',user).then(res=>{
            setLoginUser(res.data.user)
            navigate('/')
        }).catch(err=>{
            alert(err)
        })
    }
   }

  return (
    <div className='login'>
        <h1>Login</h1>
        <input type="text" name='email' value={user.email} onChange={handleChange} placeholder="Enter Your Email"/>
        <input type="password" name='password' value={user.password} onChange={handleChange} placeholder='Enter Your Password' />
        <div className='button' onClick={login} >Login</div>
        <div>or</div>
        <div className='button' onClick={()=>navigate('/register')}>Register</div>
    </div>
  )
}
