import React from 'react'
import './HackathonDetails.css'
import Nav from '../Nav/Nav'

const HackathomDetails = () => {
  return (
    <>
<Nav/>

    <div>
  <header className="header">
    <div className="logo">Innvotex Hackathon</div>
  </header>
  <main className="container">
    <section className="main-content">
      <h1>Innvotex Virtual Hackathon</h1>
      <p>Build groundbreaking agents and win from a <strong>$140k prize pool</strong></p>
      <button className="join-btn">Join Hackathon</button>
      <div className="rules">
        <h3>Who can participate</h3>
        <ul>
          <li>Above legal age of majority in country of residence</li>
          <li>Only specific <a href="#">countries/territories included</a></li>
          <li>Quebec is excluded</li>
        </ul>
      </div>
    </section>

    <aside className="sidebar">
      <p className="deadline">⏳ 23 more days to deadline</p>
      <p><strong>Deadline:</strong> May 1, 2025 @ 4:30am GMT+5:30</p>
      <p><strong>Online</strong></p>
      <p><strong>Public</strong></p>
      <p><strong>$140,000 in prizes</strong></p>
      <p> <strong>5658 participants</strong></p>
      <p> Managed by Devpost</p>
      <div className="tags">
        <span>Machine Learning/AI</span>
        <span>Beginner Friendly</span>
        <span>Salesforce</span>
      </div>
    </aside>
  </main>
  <div className = "theory">
    <p>This part explains about the hackthon</p>
  </div>
  <section className="prizes">
    <h2>🎁 Prizes</h2>
    <div className="prize-total">$140,000 in prizes</div>
    
    <div className="prize-grid">
      <div className="prize-item">
        <strong>Overall Grand Prize</strong>
        <p>$50,000 in cash</p>
        <span>1 winner</span>
      </div>
      <div className="prize-item">
        <strong>Honorable Mention: Most Creative</strong>
        <p>$20,000 in cash</p>
        <span>1 winner</span>
      </div>
      <div className="prize-item">
        <strong>Honorable Mention: Most Impactful</strong>
        <p>$20,000 in cash</p>
        <span>1 winner</span>
      </div>
      <div className="prize-item">
        <strong>Honorable Mention: Best Demo Delivery</strong>
        <p>$20,000 in cash</p>
        <span>1 winner</span>
      </div>
      <div className="prize-item">
        <strong>Best Use of Slack Prize</strong>
        <p>$25,000 in cash</p>
        <span>1 winner</span>
      </div>
      <div className="prize-item">
        <strong>People's Choice (Public Voting)</strong>
        <p>$5,000 in cash</p>
        <span>1 winner</span>
      </div>
    </div>
  </section>  
  <section className="judges">
    <h2>Judges</h2>
    <div className="judges-c">
      
      <div className="judge">
        <img src="judge1.jpg" alt="Praneetha"/>
        <div>
          <strong>Praneetha</strong>
          <p>SVP, Technical Audience Relations | Salesforce</p>
        </div>
      </div>
  
      <div className="judge">
        <img src="judge2.jpg" alt="Sowjanya"/>
        <div>
          <strong>Sowjanya</strong>
          <p>Director, Product Marketing | Salesforce</p>
        </div>
      </div>
  
      <div className="judge">
        <img src="judge3.jpg" alt="Prasana"/>
        <div>
          <strong>Prasana</strong>
          <p>Developer Advocate Director | Salesforce</p>
        </div>
      </div>
      </div>
  </section>
  
    </div>
    </>
  )
}

export default HackathomDetails