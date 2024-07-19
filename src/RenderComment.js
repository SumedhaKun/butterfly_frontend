import React from 'react';
import axiosInstance from './axiosInstance';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
const RenderComment = ({ item }) => {
    const [username, setUsername] = useState('');
    const [likes, setLikes]=useState(item.likes)
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
        setLikes(likes+1)

      }

       
    
    return (
      <div className="comment-container" style={{ 
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        width: 'calc(100vw - 40px)', // Adjust width to fit the screen minus padding
        marginLeft: '20px' // Left indent the text
      }}>
      <p className="comment-user"> <strong>{username}</strong> </p>
      <p className="comment-date"style={{ color: '#888' }}>{item.date}</p>
      <p className="comment-content">{item.content}</p>
      <button className="like-button" onClick={updateLikes}>
      <FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: '5px' }} />
      {likes}
      </button>
    </div>
    );
  }
export default RenderComment;
