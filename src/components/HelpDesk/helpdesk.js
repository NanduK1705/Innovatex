import React from 'react';
import './helpdesk.css';
import Nav from '../Nav/Nav';

const helpdeskData = [
  {
    title: 'Devpost Hackathon Managers',
    categories: [
      { name: 'Setting up your hackathon page', articles: 18 },
      { name: 'Managing your hackathon page', articles: 7 },
      { name: 'Online hackathon - best practices', articles: 10 },
      { name: 'In Person Hackathons', articles: 2 },
      { name: 'Judging & Announcing Winners', articles: 7 },
      { name: 'Metrics and Reports', articles: 6 },
    ],
  },
  {
    title: 'Devpost Hackathon Participants',
    categories: [
      { name: 'Devpost General', articles: 4 },
      { name: 'Managing your account', articles: 4 },
      { name: 'Your portfolio', articles: 4 },
      { name: 'Communication', articles: 5 },
      { name: 'Submitting to a hackathon', articles: 8 },
      { name: 'Submission Gallery', articles: 2 },
    ],
  },
];

const Helpdesk = () => {
  return (
    <>
    <Nav/>
    
    <div className="helpdesk-container">
      {helpdeskData.map((section, index) => (
        <div key={index} className="helpdesk-section">
          <h2>{section.title}</h2>
          <div className="helpdesk-grid">
            {section.categories.map((category, idx) => (
              <div className="helpdesk-card" key={idx}>
                <p className="helpdesk-title">{category.name}</p>
                <p className="helpdesk-articles">{category.articles} articles</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Helpdesk;
