import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Posts_Page = () => {
    const navigate = useNavigate();
    const handleLogout=async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/logout/'); 
            if (response.status === 200) {
                navigate('/home')
            } else {
                console.error('Failed to logout');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    }
    return (
        <div className="Page-Container">
            <Navbar/>
        <header className="App-header">
            <h1>Butterfly-- Posts</h1>
        </header>
      <main>
      <button onClick={handleLogout}>Logout</button>
      </main>
    </div>
    )
}
export default Posts_Page