import React, { useEffect, useState } from 'react';
import RenderPost from './RenderPost';
import axiosInstance from './axiosInstance';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function PostsPage() {
  const [components, setComponents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get('/posts/');
      setComponents(response.data)
    };

    fetchData();
  }, []);
  const createPost= (e)=>{
    e.preventDefault();
    navigate('/Post')
  }

  return (
    <>
    <Navbar />
    <div className="container" style={{ backgroundColor: 'lightblue' }}>
      <h1>Butterfly</h1>
      <ul className="post-list">
        {components.map((component) => (
          <li key={component.pk}>
            <RenderPost item={component} /> {/* Render your component for each item */}
          </li>
        ))}
      </ul>
      <button onClick={createPost}>Create Post</button>
    </div>
  </>
  );
}

export default PostsPage;
