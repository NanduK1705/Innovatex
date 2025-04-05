import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'

const Login = () => {
  return (
<>
<Nav/>
<div class='sid'>
        <div class='wel'>
            <h1>Welcome Back!</h1>
            <p style={{fontSize:'15px', lineHeight:'3'}}>Sign up now and be part of our community.</p>
            <Link to='/signup'><button>SIGN UP</button></Link>
        </div>
        <div class='sign'>
            <h1>Log in to InnovateX</h1>
            <input placeholder='Email'/><br/>
            <input placeholder='Password'/>
            <p style={{padding: '0', margin: '0', display: 'flex', justifyContent: 'center', marginRight: '160px', lineHeight: '1', textDecoration: 'underline', color: 'hotpink'}}>forgot password?</p>
            <button>LOG IN</button>
            {/* <div>
                <p style="padding: 0; margin: 0; display: flex; justify-content: center; line-height: 2;">other options</p>
                <button>login with google</button>
                <button>login with faceboook</button>
            </div> */}
        </div>
    </div>
</>
  )
}

export default Login