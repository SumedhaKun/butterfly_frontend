// src/Register.js

import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async(e) => {
    e.preventDefault();
        await axios.post("http://127.0.0.1:8000/api/register/",formData).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
  };

  return (
    <div className="register-container">
        <Navbar/>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
