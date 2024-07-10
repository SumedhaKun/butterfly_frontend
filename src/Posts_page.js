import React, { useEffect, useState } from 'react';
import RenderPost from './RenderPost';
import axiosInstance from './axiosInstance';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Posts_page() {
  const [components, setComponents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get('/posts/');
      setComponents(response.data)
      console.log(components[0])
    };

    fetchData();
  }, []);
  const createPost= (e)=>{
    e.preventDefault();
    navigate('/Post')
  }

  return (
    <div>
        <Navbar/>
      <h1>Butterfly</h1>
      <ul>
        {components.map((component) => (
          <li key={component.pk}>
            <RenderPost item={component} /> {/* Render your component for each item */}
          </li>
        ))}
      </ul>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export default Posts_page;
