import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axiosInstance from './axiosInstance';
import RenderPost from './RenderPost';

import {useLocation } from 'react-router-dom';
const OtherProfile = () => {
  const { state } = useLocation();
  const [components, setComponents] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followers, sestFollowers] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axiosInstance.get('/user/'+state.item.user); 
      console.log(response.data.username)
      setUsername(response.data.username)
      setEmail(response.data.email)
      const response2 = await axiosInstance.get('/posts/user/'+state.item.user); 
      setComponents(response2.data)
      console.log(response2.data)
      // setFollowing(response.data.following)
      // sestFollowers(response.data.followers)
    };
    fetchDetails();
});

const follow=async (e)=>{
    e.preventDefault();
    await axiosInstance.patch('/follow/'+state.item.user+"/")
    window.location.reload(false);
  }

  return (
    <div>
    <Navbar/>
    <div className="profile-container">
      <h2>Username: {username}</h2>
      <p>Email: {email}</p>
      <button onClick={follow}>Follow</button>
    </div>
    <h1>Posts</h1>
    <ul>
        {components.map((component) => (
          <li key={component.pk}>
            <RenderPost item={component} /> {/* Render your component for each item */}
          </li>
        ))}
      </ul>
      <p>Followers:</p>
      <ul>
        {followers.map((follower) => (
          <li>
            {/* <p>{follower}</p> Render your component for each item */}
          </li>
        ))}
      </ul>
      <p>Following:</p>
      <ul>
        {following.map((follow) => (
          <li>
            {/* <p>{follow.username}</p> Render your component for each item */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherProfile;
