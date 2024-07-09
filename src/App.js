import { useEffect } from 'react';
import React, { useState } from 'react';
import './App.css';
import Posts_page from './Posts_page'
import Home from './Home';
import axiosInstance from './axiosInstance';
import axios from 'axios';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  useEffect(() => {
    const fetchAuthenticationStatus = async () => {
            if (localStorage.getItem("token")!=null){
              setAuthenticated(true);
            }
    };
    fetchAuthenticationStatus();
}, []);
  if(authenticated){
    return(<Posts_page/>)
  }
  else{
    return(<Home/>)
  }
}

export default App;