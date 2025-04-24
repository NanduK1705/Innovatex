import React from 'react';
import './Home.css';
import hack from '../../images/hack.jpg';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import HacksForYou from '../HacksForYou/HacksForYou';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="bg">
        <div className="txt">
          <h1>Unleash Your Inner Innovator!</h1>
          <p>
            Join the most exciting hackathons happening across campuses,
            departments, and colleges. Build. Collaborate. Compete. Win. <br />
            Discover challenges, form teams, and turn your ideas into reality.
            <br />
            Your next big breakthrough starts here!
          </p>
          <Link to="/hacklist">
            <button className="explore-btn">Explore Hackathons</button>
          </Link>
        </div>
        <div className="image-container">
          <img src={hack} alt="Hackathon" />
        </div>
      </div>
<div style={{marginTop:'50px'}}></div>
      <HacksForYou />
      <Link to='/hi'><button>click</button></Link>
      <Footer />
    </div>
  );
};

export default Home;
