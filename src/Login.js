// src/Login.js

import React, { useState } from 'react';
import Navbar from './Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
          try{
            const res=await axios.post("https://butterfly-backend.onrender.com/api/login/",{"username":username, "password":password})
            console.log(res.status)
            if(res.status==200)
                {console.log(res);
                  navigate('/posts_page')
                  console.log(res.data.token)
                  localStorage.setItem('token', res.data.token);}
            else{
              toast.error('incorrect password or username')
            }
      
          } catch (error){
              toast.error('incorrect password or username')
          }
          
  };

  return (
    <div>
      <Navbar />
 <div className="login-container">
 <img src="/logo.png" alt="Logo" className="logo" />
  <h2>Login</h2>
  <form onSubmit={handleLogin}>
    <label htmlFor="username">
    </label>
    <input
      type="text"
      id="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Enter username"
      required
    />
    
    <label htmlFor="password">
    </label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter password"
      required
    />
    
    <button type="submit" className='login' >Login</button>
  </form>
</div>
    </div>
   

  );
}

export default Login;
