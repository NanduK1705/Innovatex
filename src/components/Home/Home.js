import React from 'react'
import './Home.css';
import hack from '../../images/hack.jpg';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import HacksForYou from '../HacksForYou/HacksForYou';
import Footer from '../Footer/Footer';


const Home = () => {
  return (
    <div>
    <Nav/>
    <div className="bg">
        <div className="txt">
<h1>Unleash Your Inner Innovator!</h1>
<p>
Join the most exciting hackathons happening across campuses, departments, and colleges.
Build. Collaborate. Compete. Win.
Discover challenges, form teams, and turn your ideas into reality.
Your next big breakthrough starts here!</p>
        </div>
        <div>
            <img src={hack}/>
        </div>
    </div>
    <div className="explore">
        
    </div>
    <HacksForYou/>
    {/* <Link to='/hlo'><button>click</button></Link>
    <Link to='/hoi'><button>click</button></Link> */}
    <Footer/>
    </div>
  )
}

export default Home