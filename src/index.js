import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route,useRoutes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import Posts_Page from './Posts_page';
import Profile from './Profile';
import Post from './Post';
import Comments_page from './Comments';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts_page" element={<Posts_Page />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/Comments_page" element={<Comments_page />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
