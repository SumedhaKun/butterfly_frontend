import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


function Home()
{
    const navigate = useNavigate();
    function goToLogin(event) {

        navigate('/login');
    }
    function goToRegister(event) {

        navigate('/register');
    }
  return ( 
    <div className="home">
      <Navbar/>
      <header className="App-header">
        <h1>Butterfly</h1>
        <div className="home-buttons">
        <button className="btn-login" onClick={goToLogin}>Login</button>
        <button className="btn-register" onClick={goToRegister}>Register</button>
      </div>
      </header>
      <footer>
        <p>Footer content goes here.</p>
      </footer>
      
    </div>
  );
}

export default Home;