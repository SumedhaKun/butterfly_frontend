import React from 'react';
import axiosInstance from './axiosInstance';
import { useState } from 'react';
const RenderComment = ({ item }) => {
    const [username, setUsername] = useState('');
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
        await axiosInstance.patch("/likes/comment/"+item.pk+"/")
        window.location.reload(false);
      }

       
    
    return (
      <div className="comment-container">
      <p className="comment-user">User: {username}</p>
      <p className="comment-date">Date: {item.date}</p>
      <p className="comment-content">{item.content}</p>
      <p className="comment-likes">Likes: {item.likes}</p>
      <button className="like-button" onClick={updateLikes}>
        Add Like
      </button>
    </div>
    );
  }
export default RenderComment;
