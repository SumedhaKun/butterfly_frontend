import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axiosInstance from './axiosInstance';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [following, setFollowing] = useState([]);
  const [followers, sestFollowers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axiosInstance.get('/user'); 
      setUsername(response.data.username)
      setEmail(response.data.email)
      const response3=await axiosInstance.get('/followers/'); 
      console.log(response3.data)
      sestFollowers(response3.data)
      const response4=await axiosInstance.get('/following/'); 
      setFollowing(response4.data)
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
    <p>Followers:</p>
      <ul>
        {followers.map((follower) => (
          <li>
            <p>{follower.username}</p> {/* Render your component for each item */}
          </li>
        ))}
      </ul>
      <p>Following:</p>
      <ul>
        {following.map((follow) => (
          <li>
            <p>{follow.username}</p> {/* Render your component for each item */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
