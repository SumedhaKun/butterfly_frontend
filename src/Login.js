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
    /*axios.post("http://127.0.0.1:8000/api/login/",{"username":username, "password":password}).then(function (response) {
            console.log(response);
            navigate('/posts_page')
          }).catch(function (error) {
            console.log(error);
          });*/
          axios.post("https://71c6-2600-1700-78ee-290-54ac-a7a2-bd8d-4fd0.ngrok-free.app/api/login/",{"username":username, "password":password}).then(function (response) {
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
