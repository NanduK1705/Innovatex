import React from 'react';
import './HackathonDetails.css';

const HackathonDetails = () => {
  const prizes = [
    { title: 'Overall Grand Prize', amount: '$50,000 in cash', winners: '1 winner' },
    { title: 'Honorable Mention: Most Creative', amount: '$20,000 in cash', winners: '1 winner' },
    { title: 'Honorable Mention: Most Impactful', amount: '$20,000 in cash', winners: '1 winner' },
    { title: 'Honorable Mention: Best Demo Delivery', amount: '$20,000 in cash', winners: '1 winner' },
    { title: 'Best Use of Slack Prize', amount: '$25,000 in cash', winners: '1 winner' },
    { title: "People's Choice (Public Voting)", amount: '$5,000 in cash', winners: '1 winner' },
  ];

  const judges = [
    { name: 'Praneetha', title: 'SVP, Technical Audience Relations | Salesforce', img: 'judge1.jpg' },
    { name: 'Sowjanya', title: 'Director, Product Marketing | Salesforce', img: 'judge2.jpg' },
    { name: 'Prasana', title: 'Developer Advocate Director | Salesforce', img: 'judge3.jpg' },
  ];

  return (
    <div className="hackathon-page">
      <header className="header">
        Innvotex Hackathon
      </header>

      <main className="main-section">
        <section className="content">
          <h1>Innvotex Virtual Hackathon</h1>
          <p>
            Build groundbreaking agents and win from a <strong>$140k prize pool</strong>
          </p>
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
          <p><strong>5658 participants</strong></p>
          <p>Managed by Devpost</p>
          <div className="tags">
            <span>Machine Learning/AI</span>
            <span>Beginner Friendly</span>
            <span>Salesforce</span>
          </div>
        </aside>
      </main>

      <div className="theory">
        <p>This part explains about the hackathon</p>
      </div>

      <section className="prizes">
        <h2>🎁 Prizes</h2>
        <div className="prize-total">$140,000 in prizes</div>
        <div className="prize-grid">
          {prizes.map((prize, index) => (
            <div className="prize-item" key={index}>
              <strong>{prize.title}</strong>
              <p>{prize.amount}</p>
              <span>{prize.winners}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="judges">
        <h2>Judges</h2>
        <div className="judges-c">
          {judges.map((judge, index) => (
            <div className="judge" key={index}>
              <img src={judge.img} alt={judge.name} />
              <div>
                <strong>{judge.name}</strong>
                <p>{judge.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HackathonDetails;
