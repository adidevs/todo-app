import * as React from 'react';
import { Link } from 'react-router-dom';
import '../pages/css/navbar.css';
export default function NavBar() {
  let account;
  (localStorage.getItem("user") === "") ? account = false : account = true;

  let logStatus = (account) ? "Log Out" : "Log In";

  const handleLog = () => {
    if (logStatus === "Log Out") {
      localStorage.setItem("user", "");
    }
  }

  return (
    <React.Fragment>
      <nav>
        <div className='navItem'><p>{new Date().toDateString()}</p></div>
        <div className='navItem'><h1 >Task Manager</h1></div>
        <div className='navItem'><Link to="/"><button onClick={handleLog} className='logout-btn'>{logStatus}</button> </Link></div>
      </nav>
    </React.Fragment>

  );
}