import React from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Signup = () => {
  return (
    <>
    <Nav/>
<div class='sid'>
        <div class='wel'>
            <h1>Welcome To InnovateX!</h1>
            <p style={{fontSize:'15px', lineHeight:'3'}}>To keep connected with us please login with your personal info</p>
            <Link to='/login'><button>SIGN IN</button></Link>
        </div>
        <div class='sign'>
            <h1>Create Account</h1>
            <input placeholder='Name'/><br/>
            <input placeholder='Email'/><br/>
            <input placeholder='Password'/><br/>
            <button>SIGN UP</button>
        </div>
    </div>
    </>
    
  )
}

export default Signup