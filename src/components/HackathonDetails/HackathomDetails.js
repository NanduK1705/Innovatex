import React from 'react';
import { useParams } from 'react-router-dom';
import './HackathonDetails.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const hackathons = [
  {
    id: 'agentforce',
    title: 'Agentforce Virtual Hackathon',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/278/434/datas/medium_square.png',
    timeLeft: '20 days left',
    location: 'Online',
    prize: '₹1,40,000 in prizes',
    participants: '5922 participants',
    tags: ['Salesforce', 'Machine Learning', 'Beginner Friendly'],
    date: 'Mar 05 - Apr 30, 2025',
    description: 'A virtual hackathon aimed at building groundbreaking agents leveraging Salesforce and AI technologies.',
    prizes: [
  { title: 'Overall Grand Prize', amount: '₹50,000 in cash', winners: 1 },
  { title: 'Most Creative', amount: '₹20,000 in cash', winners: 1 },
  { title: 'Best Use of Salesforce APIs', amount: '₹15,000 in cash', winners: 1 },
  { title: 'Best AI Agent', amount: '₹15,000 in cash', winners: 1 },
  { title: 'People’s Choice Award', amount: '₹20,000 in cash', winners: 1 },
  { title: 'Rookie Award', amount: '₹20,000 in cash', winners: 1 }
],

    judges: [
      { name: 'Praneetha', title: 'SVP, Technical Audience Relations | Salesforce', image: 'judge1.jpg' },
      { name: 'Sowjanya', title: 'Director, Product Marketing | Salesforce', image: 'judge2.jpg' },
      { name: 'Prasana', title: 'Developer Advocate Director | Salesforce', image: 'judge3.jpg' }
    ]
  },
  {
    id: 'metahorizon',
    title: 'Meta Horizon Creator Competition',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/295/852/datas/medium_square.jpg',
    timeLeft: '15 days left',
    location: 'Online',
    prize: '₹50,000 in prizes',
    participants: '3500 participants',
    tags: ['Meta', 'AR/VR', 'Creative Tech'],
    date: 'Apr 01 - Apr 25, 2025',
    description: 'A creative competition for developing innovative XR experiences using Meta Horizon tools.',
    prizes: [
  { title: 'Best XR Experience', amount: '₹30,000 in cash', winners: 1 },
  { title: 'Creative Innovation', amount: '₹20,000 in cash', winners: 1 },
  { title: 'Most Immersive Design', amount: '₹10,000 in cash', winners: 1 },
  { title: 'Best Game Design', amount: '₹10,000 in cash', winners: 1 },
  { title: 'Audience Favorite', amount: '₹10,000 in cash', winners: 1 },
  { title: 'Best Use of Meta Tools', amount: '₹10,000 in cash', winners: 1 }
],

    judges: [
      { name: 'Praneetha', title: 'SVP, Technical Audience Relations | Salesforce', image: 'judge1.jpg' },
      { name: 'Sowjanya', title: 'Director, Product Marketing | Salesforce', image: 'judge2.jpg' },
      { name: 'Prasana', title: 'Developer Advocate Director | Salesforce', image: 'judge3.jpg' }
    ]
  },
  {
    id: 'metaxr',
    title: 'Meta Hack XR Challenge',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/319/065/datas/medium_square.png',
    timeLeft: '12 days left',
    location: 'Online',
    prize: '₹75,000 in prizes',
    participants: '4000 participants',
    tags: ['Meta', 'XR', 'Beginner'],
    date: 'Apr 01 - Apr 20, 2025',
    description: 'A beginner-friendly challenge focusing on extended reality (XR) innovations using Meta tools.',
    prizes: [
  { title: 'Best Innovation', amount: '₹40,000 in cash', winners: 1 },
  { title: 'Best Demo', amount: '₹35,000 in cash', winners: 1 },
  { title: 'Rising Star Award', amount: '₹10,000 in cash', winners: 1 },
  { title: 'Top Team Collaboration', amount: '₹10,000 in cash', winners: 1 },
  { title: 'XR Accessibility Award', amount: '₹15,000 in cash', winners: 1 },
  { title: 'Best Use of AR/VR', amount: '₹15,000 in cash', winners: 1 }
],

    judges: [
      { name: 'Praneetha', title: 'SVP, Technical Audience Relations | Salesforce', image: 'judge1.jpg' },
      { name: 'Sowjanya', title: 'Director, Product Marketing | Salesforce', image: 'judge2.jpg' },
      { name: 'Prasana', title: 'Developer Advocate Director | Salesforce', image: 'judge3.jpg' }
    ]
  },
  {
    id: 'cloudbuilder',
    title: 'Cloud Builder Sprint',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/219/991/datas/medium_square.png',
    timeLeft: '10 days left',
    location: 'Online',
    prize: '₹30,000 in prizes',
    participants: '2800 participants',
    tags: ['Cloud', 'DevOps', 'Infrastructure'],
    date: 'Apr 01 - Apr 15, 2025',
    description: 'A sprint to build cloud-native applications and infrastructure setups.',
    prizes: [
  { title: 'Best Cloud Project', amount: '₹20,000 in cash', winners: 1 },
  { title: 'Best DevOps Implementation', amount: '₹10,000 in cash', winners: 1 },
  { title: 'Best Infrastructure Design', amount: '₹10,000 in cash', winners: 1 },
  { title: 'Cloud Automation Award', amount: '₹5,000 in cash', winners: 1 },
  { title: 'Performance Optimizer Award', amount: '₹5,000 in cash', winners: 1 },
  { title: 'Security Champion', amount: '₹5,000 in cash', winners: 1 }
],

    judges: [
      { name: 'Praneetha', title: 'SVP, Technical Audience Relations | Salesforce', image: 'judge1.jpg' },
      { name: 'Sowjanya', title: 'Director, Product Marketing | Salesforce', image: 'judge2.jpg' },
      { name: 'Prasana', title: 'Developer Advocate Director | Salesforce', image: 'judge3.jpg' }
    ]
  }
];

const HackathonDetails = () => {
  const { id } = useParams();
  const hackathon = hackathons.find(h => h.id === id);

  if (!hackathon) return <div>Hackathon not found</div>;

  return (
    <>
      <Nav />
      <div>
        <header className="header">
          <div className="logo">{hackathon.title}</div>
        </header>
        <main className="container">
          <section className="main-content">
            <h1>{hackathon.title}</h1>
            <p>{hackathon.description}</p>
            <button className="join-btn">Join Hackathon</button>
            <div className="rules">
              <h3>Who can participate</h3>
              <ul>
                <li>Above legal age of majority in country of residence</li>
                <li>Specific countries/territories included</li>
                <li>Quebec is excluded</li>
              </ul>
            </div>
          </section>
          <aside className="sidebar">
            <p className="deadline">⏳ {hackathon.timeLeft}</p>
            <p><strong>Deadline:</strong> {hackathon.date}</p>
            <p><strong>{hackathon.location}</strong></p>
            <p><strong>{hackathon.prize}</strong></p>
            <p><strong>{hackathon.participants}</strong></p>
            <div className="tags">
              {hackathon.tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
            </div>
          </aside>
        </main>
        <div className="prizes-section">
  <h2 className="prizes-title">
    🎁 <span>Prizes</span>
  </h2>
  <div className="prize-cards">
    <div className="prize-card">
      <h3>Overall Grand Prize</h3>
      <p className="amount">₹50,000 in cash</p>
      <p>1 winner</p>
    </div>
    <div className="prize-card">
      <h3>Most Creative</h3>
      <p className="amount">₹20,000 in cash</p>
      <p>1 winner</p>
    </div>
    <div className="prize-card">
      <h3>Best Design</h3>
      <p className="amount">₹10,000 in cash</p>
      <p>1 winner</p>
    </div>
    <div className="prize-card">
      <h3>Best Innovation</h3>
      <p className="amount">₹10,000 in cash</p>
      <p>1 winner</p>
    </div>
    <div className="prize-card">
      <h3>Tech Excellence</h3>
      <p className="amount">₹10,000 in cash</p>
      <p>1 winner</p>
    </div>
    <div className="prize-card">
      <h3>Rising Star Award</h3>
      <p className="amount">₹10,000 in cash</p>
      <p>1 winner</p>
    </div>
  </div>
</div>


        <div className="judges">
          <h2>Judges</h2>
          <div className="judges-c">
            <div className="judge">
              <img src="praneetha.jpg" alt="Praneetha" />
              <strong>Praneetha</strong>
              <p>SVP, Technical Audience Relations | Salesforce</p>
            </div>
            <div className="judge">
              <img src="sowjanya.jpg" alt="Sowjanya" />
              <strong>Sowjanya</strong>
              <p>Director, Product Marketing | Salesforce</p>
            </div>
            <div className="judge">
              <img src="prasana.jpg" alt="Prasana" />
              <strong>Prasana</strong>
              <p>Developer Advocate Director | Salesforce</p>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </>
  );
};

export default HackathonDetails;
