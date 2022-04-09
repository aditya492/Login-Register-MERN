import React, { useState } from 'react'
import './register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function () {

const navigate=useNavigate();

    const[user,setUser]=useState({
        name:'',
        email:'',
        password:'',
        reEnterPassword:''
    })

const handleChange=(e)=>{
const{name,value}=e.target;
setUser({
    ...user,
    [name]:value
})
}



const register=async()=>{
    const{name,email,password,reEnterPassword}=user;
    if(name && email && password){
        await axios.post('http://localhost:9002/register',user).then(res=>{
        }).catch(err=>{
            alert(err)
        })
    }
   }


  return (
    <div className='register'>
        <h1>Register</h1>
        <input type="text" name='name' value={user.name} onChange={handleChange}  placeholder="Your Name"/>
        <input type="text" name='email' value={user.email} onChange={handleChange} placeholder='Your Email' />
        <input type="password" name='password' value={user.password} onChange={handleChange} placeholder='Your Password' />
        <input type="password" name='reEnterPassword' value={user.reEnterPassword} onChange={handleChange} placeholder='Re-enter Password' />
        <div className='button' onClick={register}>Register</div>
        <div>or</div>
        <div className='button' onClick={()=>navigate('/login')} >Login</div>

    </div>
  )
}
