import { useEffect } from 'react';
import React, { useState } from 'react';
import './App.css';
import PostsPage from './PostsPage'
import Home from './Home';
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const fetchAuthenticationStatus = async () => {
            if (localStorage.getItem("token")!=null){
              setAuthenticated(true);
            }
    };
    fetchAuthenticationStatus();
}, []);
  if(authenticated){
    return(<PostsPage/>)
  }
  else{
    return(<Home/>)
  }
}

export default App;