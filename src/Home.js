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
      <img src="/logo2.png" alt="Logo" className="logo" style={{marginBottom:"0"}}/>
      <img src="/title.png" alt="Logo" className="logo" style={{width:"500px", marginTop: "0"}}/>
        <div className="buttonContainer">
        <button className="btn-login" onClick={goToLogin}>Login</button>
        <button className="btn-register" onClick={goToRegister}>Register</button>
      </div>
      </header>
      
    </div>
  );
}

export default Home;