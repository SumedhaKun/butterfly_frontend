import axiosInstance from "./axiosInstance";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Post() {
    const [data, setData] = useState('');
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const handlePost = async(e) => {
        e.preventDefault();
        let date = new Date()
        date=date.toISOString().split('T')[0]
        const res=await axiosInstance.post("/posts/",{"title":title,"data":data,"date":date})
        navigate('/posts_page')      
      };
      const goBack = (e) => {
        e.preventDefault();
        navigate('/posts_page') 
      };
    
  return(
    <div>
        <form onSubmit={handlePost}>
        <label htmlFor="text">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="text">Content:</label>
        <input
          type="text"
          id="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>
      <button onClick={goBack}>back</button>
    </div>
  )
}

export default Post;