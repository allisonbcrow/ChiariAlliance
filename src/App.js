import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar.js';
import DailyIndex from './daily/DailyIndex';
import Auth from './auth/Auth';



function App() {
  const [sessionToken, setSessionToken] = useState("");

  const firstName = localStorage.getItem("firstName");

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

  const protectedView = () => {
    return sessionToken === localStorage.getItem("token")  ? (
        <Header clearToken={clearToken} token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} clearToken={clearToken} />
    );
  };

  return (
    <div>
        <Header clearToken={clearToken} token={sessionToken}/>
          <Sidebar token={sessionToken} clearToken={clearToken}/>
          {protectedView()}
        <Footer />
        </div>
        );
        }

export default App;
