import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div className="nav">
        <div><Link to='/'><h2>InnovateX</h2></Link></div>
        <div className="avail">
            <div>Join a hackathon</div>
            <div>Host a hackathon</div>
            <Link to='/helpdesk'><div>Resources</div></Link> 
        </div>
        <div className="reg">
            <Link to='/login'><div>Log in</div></Link>
            <div>
                <Link to='/signup'><button>Sign up</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Nav