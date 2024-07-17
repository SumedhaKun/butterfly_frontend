import React, { useEffect, useState } from 'react';
import RenderComment from './RenderComment';
import axiosInstance from './axiosInstance';
import Navbar from './Navbar';
import { useNavigate, useLocation } from 'react-router-dom';


function CommentsPage() {
    const { state } = useLocation();
  const [components, setComponents] = useState([]);
  const [content, setContent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get('/comments/'+state.pk);
      setComponents(response.data)
    };

    fetchData();
  },[content,state.pk]);
  const createComment= async(e)=>{
    e.preventDefault();
    let date = new Date()
    date=date.toISOString().split('T')[0]
    await axiosInstance.post('/comment/',{"content":content, "date":date, "pk":state.pk})
    setContent("")
  }
  const goBack= async(e)=>{
    e.preventDefault();
    navigate('/Posts_page')
  }

  return (
    <div>
        <Navbar/>
      <h1>Butterfly</h1>
      <ul>
        {components.map((component) => (
          <li key={component.pk}>
            <RenderComment item={component} /> {/* Render your component for each item */}
          </li>
        ))}
      </ul>
      <form onSubmit={createComment}>
        <label htmlFor="text">Content:</label>
        <input
          type="text"
          id="data"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Comment</button>
      </form>
      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default CommentsPage;
