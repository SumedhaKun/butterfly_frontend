import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axiosInstance from './axiosInstance';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axiosInstance.get('/user'); 
      setUsername(response.data.username)
      setEmail(response.data.email)
    };
    fetchDetails();
}, []);

const handleLogout=async (e)=>{
  e.preventDefault();
   
          localStorage.removeItem('token');
          navigate('/home')
}

  return (
    <div>
    <Navbar/>
    <div className="profile-container">
      <h2>Username: {username}</h2>
      <p>Email: {email}</p>
    </div>
    <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
