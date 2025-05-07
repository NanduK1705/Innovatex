import React from 'react';
import './AboutHackathon.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const AboutHackathon = () => {
  return (
    <>
      <Nav />
      <div className="hackathon-info-container">
        <h1 className="page-title">What is a Hackathon?</h1>
        <p className="intro">
          A hackathon is an event where individuals or teams build innovative solutions to real-world problems—usually in a limited timeframe like 24–72 hours. It’s fast-paced, creative, and collaborative!
        </p>

        <section className="info-section">
          <h2>🔄 Common Rounds</h2>
          <div className="info-cards">
            <div className="info-card">
              <h3>1. Idea Submission</h3>
              <p>Teams pitch their initial idea based on the hackathon theme or problem statement.</p>
            </div>
            <div className="info-card">
              <h3>2. Prototyping</h3>
              <p>Participants start coding, designing, and building a working solution (MVP).</p>
            </div>
            <div className="info-card">
              <h3>3. Evaluation</h3>
              <p>Judges assess each project on creativity, usability, and execution.</p>
            </div>
            <div className="info-card">
              <h3>4. Final Presentation</h3>
              <p>Teams demo their work to a panel and answer questions in a pitch session.</p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>🎯 Benefits of Joining</h2>
          <ul className="benefits-list">
            <li>🔥 Improve coding, teamwork, and time management skills</li>
            <li>🧠 Learn to build real-world projects under pressure</li>
            <li>🌐 Network with mentors, tech leaders, and peers</li>
            <li>🏆 Win prizes, certificates, and job/internship opportunities</li>
            <li>🚀 Boost your resume and confidence</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>🧑‍💻 Who Can Participate?</h2>
          <p>
            Anyone! Students, beginners, professionals—hackathons welcome everyone with ideas and passion. You can join solo or team up with others.
          </p>
        </section>

        <section className="info-section">
          <h2>🧰 What Do You Need?</h2>
          <ul className="gear-list">
            <li>💻 Laptop with required tools (VS Code, Git, etc.)</li>
            <li>📶 Stable internet connection</li>
            <li>🧠 Creative thinking and enthusiasm</li>
            <li>🤝 A good team or willingness to join one</li>
          </ul>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default AboutHackathon;
