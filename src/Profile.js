import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axiosInstance from './axiosInstance';
import { useLogout } from './utils';

const Profile = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [following, setFollowing] = useState([]);
  const [followers, sestFollowers] = useState([]);
  const logout = useLogout();
  useEffect(() => {
    const fetchDetails = async () => {
      if(!localStorage.getItem("token")){
        logout()
        return
      }
      const response = await axiosInstance.get('/user')
      setUsername(response.data.username)
      setEmail(response.data.email)
      const response3=await axiosInstance.get('/followers/'); 
      console.log(response3.data)
      sestFollowers(response3.data)
      const response4=await axiosInstance.get('/following/'); 
      setFollowing(response4.data)
    };
    fetchDetails();
});

const handleLogout=async (e)=>{
  e.preventDefault();
  logout()
}

  return (
    <div>
    <Navbar/>
    <div className="profile-container">
      <h2>Username: {username}</h2>
      <p>Email: {email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
    
    <div className="centered-container">
            <p><strong>Followers:</strong></p>
            <ul>
                {followers.map((follower) => (
                    <li key={follower.id}>
                        <p>{follower.username}</p>
                    </li>
                ))}
            </ul>
            <p><strong>Following:</strong></p>
            <ul>
                {following.map((follow) => (
                    <li key={follow.id}>
                        <p>{follow.username}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default Profile;
