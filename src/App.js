import './App.css';
import Login from './components/login/Login';
import Homepage from './components/homepage/homepage';
import Register from './components/register/Register';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useState } from 'react';



function App() {
  const[user,setLoginUser]=useState({});
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} ></Route>
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />}></Route>
        <Route path="/register" element={<Register/>} ></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
