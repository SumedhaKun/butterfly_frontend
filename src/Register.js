// src/Register.js

import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleRegister = async(e) => {
    e.preventDefault();
    const link="https://butterfly-backend.onrender.com/api"

        await axios.post(link+"/register/",formData).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
        await axios.post(link+"/login/",{"username":formData.username, "password":formData.password}).then(function (response) {
          navigate('/posts_page')
          localStorage.setItem('token', response.data.token);
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
