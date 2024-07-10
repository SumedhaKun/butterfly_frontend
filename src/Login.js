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
          axios.post("https://7dbd-2600-1700-78ee-290-fdc8-4c26-ae36-f4ba.ngrok-free.app/api/login/",{"username":username, "password":password}).then(function (response) {
            console.log(response);
            navigate('/posts_page')
            console.log(response.data.token)
            localStorage.setItem('token', response.data.token);
          })
          
  };

  return (
    <div className="login-container">
        <Navbar/>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="text">Username:</label>
        <input
          type="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
