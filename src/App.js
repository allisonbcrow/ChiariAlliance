import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar.js';
import Auth from './auth/Auth';
import DailyIndex from './daily/DailyIndex';
import Home from './components/site/Home';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log("This is the session token ====>" + sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };


  return (
    <div>
        <Header clearToken={clearToken}/>
          <Sidebar updateToken={updateToken} token={sessionToken} clearToken={clearToken}/>
        <Footer />
        </div>
        );
        }

export default App;
