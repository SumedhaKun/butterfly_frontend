import React from 'react';
import axiosInstance from './axiosInstance';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const RenderComment = ({ item }) => {
    const [username, setUsername] = useState('');
    const navigate=useNavigate()
    try{
        const fetchData = async () => {
        if(item.user){const res = await axiosInstance.get("/user/"+item.user+"/")
        setUsername(res.data.username)}
        }
        fetchData()
    }
    catch{}

    const updateLikes=async (e)=>{
        e.preventDefault();
        const res = await axiosInstance.patch("/likes/comment/"+item.pk+"/")
        window.location.reload(false);
      }

       
    
    return (
      <div>
        <p>User: {username}</p>
        <p>Date: {item.date}</p>
        <p>{item.content}</p>
        <p>Likes: {item.likes}</p>
        <button onClick={updateLikes}>Add Like</button>
      </div>
    );
  }
export default RenderComment;
