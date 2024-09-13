import axiosInstance from "./axiosInstance";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Navbar from "./Navbar";
function Post() {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    const handlePost = async(e) => {
        setLoading(true)
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
          const res2=await axios.post("https://butterflyai.netlify.app/caption/",{"image":image},{
            // headers:{
            //   "ngrok-skip-browser-warning":true
            // }
          });
          await axiosInstance.patch("/caption/"+res.data.pk+"/",{"caption":res2.data.caption})
        }
        setLoading(false)
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
    <>
    <Navbar/>
    <br></br>
    
    <div className="container" style={{backgroundColor: 'f7f3ee'}}>
      <h1>Make a Post!</h1>
        <form onSubmit={handlePost}>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          id="data"
          value={data}
          placeholder="Enter Content"
          onChange={(e) => setData(e.target.value)}
        />
         <input type="file" onChange={handleFileChange}/>
        <button type="submit">Post</button>
      </form>
      {loading && <p>Loading...</p>}
      <br></br>
      <button onClick={goBack}>back</button>
    </div>
    </>
    
  )
}

export default Post;