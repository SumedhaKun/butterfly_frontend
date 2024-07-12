import axiosInstance from "./axiosInstance";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Post() {
    const [data, setData] = useState('');
    const [title, setTitle] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    const handlePost = async(e) => {
        e.preventDefault();
        let date = new Date()
        date=date.toISOString().split('T')[0]
        console.log(selectedFile)
        const formData = new FormData();
        formData.append('title', title);
        formData.append('data', data);
        formData.append('date', date);
        formData.append('image', selectedFile);

        const res=await axiosInstance.post("/posts/",formData)
        if(selectedFile){
          const image=res.data.image
          const res2=await axios.post("http://localhost:9000/caption/",{"image":image});
          const res3=await axiosInstance.patch("/caption/"+res.data.pk+"/",{"caption":res2.data.caption})
        }
        navigate('/posts_page')      
      };
      const goBack = (e) => {
        e.preventDefault();
        navigate('/posts_page') 
      };
      const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
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
         <input type="file" onChange={handleFileChange}/>
        <button type="submit">Post</button>
      </form>
      <button onClick={goBack}>back</button>
    </div>
  )
}

export default Post;