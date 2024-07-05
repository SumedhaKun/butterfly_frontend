import { useEffect } from 'react';
import React, { useState } from 'react';
import './App.css';
import Posts_page from './Posts_page'
import axios from 'axios';
import Home from './Home';


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  useEffect(() => {
    const fetchAuthenticationStatus = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/check_auth/').then(function (response) {
            setAuthenticated(response.data.authenticated);
            console.log(response)
            if (response.data.authenticated) {
                setUsername(response.data.username);
                console.log(username)
            }
            }).catch(function (error) {
              console.log(error);
            });
            
        } catch (error) {
            console.error('Error fetching authentication status:', error);
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