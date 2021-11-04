import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar.js';
import Auth from './auth/Auth';
import DailyIndex from './daily/DailyIndex';

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

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <DailyIndex clearToken={clearToken} token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div>
        <Header clickLogout={clearToken}/>
          <Sidebar clearToken={clearToken}/>
        {protectedViews()}
      
        <Footer />
        </div>
        );
        }

export default App;
