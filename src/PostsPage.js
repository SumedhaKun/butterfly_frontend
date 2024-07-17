import React, { useEffect, useState } from 'react';
import RenderPost from './RenderPost';
import axiosInstance from './axiosInstance';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useLogout } from './utils';

function PostsPage() {
  const [components, setComponents] = useState([]);
  const navigate = useNavigate();
  const logout=useLogout();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get('/posts/').catch(error => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized access. Please log in.');
            logout()
        }
    });
      setComponents(response.data)
    };

    fetchData();
  });
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
