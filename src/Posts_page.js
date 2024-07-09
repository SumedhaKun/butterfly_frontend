import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';

const Posts_Page = () => {
    return (
        <div className="Page-Container">
            <Navbar/>
        <header className="App-header">
            <h1>Butterfly-- Posts</h1>
        </header>
      <main>
      </main>
    </div>
    )
}
export default Posts_Page