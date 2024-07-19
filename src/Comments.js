import React, { useEffect, useState } from 'react';
import RenderComment from './RenderComment';
import axiosInstance from './axiosInstance';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';


function CommentsPage() {
    const { state } = useLocation();
  const [components, setComponents] = useState([]);
  const [content, setContent] = useState([]);

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

  return (
    <div>
        <Navbar/>
      <div className='CommentContainer'>

      <ul>
        {components.map((component) => (
          <li key={component.pk} style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px' }}>
            <RenderComment item={component} /> {/* Render your component for each item */}
          </li>
        ))}
      </ul>
      <form onSubmit={createComment}>
        <input
          type="text"
          id="data"
          value={content}
          placeholder="Enter comment"
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Comment</button>
      </form>
      </div>
    </div>
  );
}

export default CommentsPage;
