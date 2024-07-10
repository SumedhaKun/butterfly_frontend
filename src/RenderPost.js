import React from 'react';
import axiosInstance from './axiosInstance';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const RenderPost = ({ item }) => {
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
        const res = await axiosInstance.patch("/likes/post/"+item.pk+"/")
        window.location.reload(false);
      }
    
    const goToComments=(e)=>{
        e.preventDefault();
        console.log("before"+item.pk)
        navigate('/Comments_page',{state:{"pk":item.pk}})
      }
       
    
    return (
      <div>
        <h3>{item.title}</h3>
        <p>User: {username}</p>
        <p>Date: {item.date}</p>
        <p>{item.data}</p>
        <p>Likes: {item.likes}</p>
        <button onClick={updateLikes}>Add Like</button>
        <button onClick={goToComments}>Comments</button>
      </div>
    );
  }
export default RenderPost;
