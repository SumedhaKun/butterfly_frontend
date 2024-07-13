// src/Login.js

import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
          axios.post("https://butterfly-backend.onrender.com/api/login/",{"username":username, "password":password}).then(function (response) {
            console.log(response);
            navigate('/posts_page')
            console.log(response.data.token)
            localStorage.setItem('token', response.data.token);
          })
          
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
