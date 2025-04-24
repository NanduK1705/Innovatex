import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/"><h2>InnovateX</h2></Link>
      </div>

      <div className="avail">
        <Link to="/hacklist"><div>Join a hackathon</div></Link>
        <Link to="/helo"><div>Host a hackathon</div></Link>
        <Link to="/helpdesk"><div>Help Desk</div></Link>
      </div>

      <div className="reg">
        <Link to="/login"><div className="login">Log in</div></Link>
        <Link to="/signup">
          <button className="signup-btn">Sign up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
