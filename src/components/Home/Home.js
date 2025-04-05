import React from 'react'
import './Home.css';
import hack from '../../images/hack.jpg';
import Nav from '../Nav/Nav';


const Home = () => {
  return (
    <div>
    <Nav/>
    <div className="bg">
        <div className="txt">
<h1>Hello Coderzzzzzzzzzzz!</h1>
<p>hi i am so and so who is toffer of the cse srkr and amazon internship holder and a desperate coder</p>
<p>hi i am so and so who is toffer of the cse srkr and amazon internship holder and a desperate coder</p>
<p>hi i am so and so who is toffer of the cse srkr and amazon internship holder and a desperate coder</p>
<p>hi i am so and so who is toffer of the cse srkr and amazon internship holder and a desperate coder</p>
<p>hi i am so and so who is toffer of the cse srkr and amazon internship holder and a desperate coder</p>
        </div>
        <div>
            <img src={hack}/>
        </div>
    </div>
    <div className="explore">
        
    </div>
    </div>
  )
}

export default Home