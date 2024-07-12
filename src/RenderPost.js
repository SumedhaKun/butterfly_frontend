import React from 'react';
import axiosInstance from './axiosInstance';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
const RenderPost = ({ item }) => {
    const [username, setUsername] = useState('');

    const navigate=useNavigate()

    useEffect(() => {
      const fetchData = async () => {
        if(item.user){const res = await axiosInstance.get("/user/"+item.user+"/")
        setUsername(res.data.username)
          }
        }
        fetchData()
    }, []);

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
        <div className="post-container">
        <h3>{item.title}</h3>
        <Link to={"/Other_profile"} state={{"item":item}}>
          <p>User: {username}</p>
        </Link>
        <p>Date: {item.date}</p>
        <p>{item.data}</p>
        <img src={item.image} alt="No Image" />
        <p>{item.caption}</p>
        <button className="like-button" onClick={updateLikes}>
      <FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: '5px' }} />
      {item.likes}
    </button>
        <button onClick={goToComments}>Comments</button>
      </div>
    );
  }
export default RenderPost;
