// src/components/HackathonList.js
import React from "react";
import "./HacksForYou.css";
import { Link } from "react-router-dom";


const hackathons = [
  {
    title: "Agentforce Virtual Hackathon",
    timeLeft: "20 days left",
    location: "Online",
    prize: "₹1,40,000 in prizes",
    participants: "5922 participants",
    tags: ["Salesforce", "Machine Learning", "Beginner Friendly"],
    date: "Mar 05 - Apr 30, 2025",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/278/434/datas/medium_square.png",
  },
  {
    title: "Meta Horizon Creator Competition",
    timeLeft: "15 days left",
    location: "Online",
    prize: "₹50,000 in prizes",
    participants: "3500 participants",
    tags: ["Meta", "AR/VR", "Creative Tech"],
    date: "Apr 01 - Apr 25, 2025",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/295/852/datas/medium_square.jpg",
  },
  {
    title: "Meta Hack XR Challenge",
    timeLeft: "12 days left",
    location: "Online",
    prize: "₹75,000 in prizes",
    participants: "4000 participants",
    tags: ["Meta", "XR", "Beginner"],
    date: "Apr 01 - Apr 20, 2025",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/319/065/datas/medium_square.png",
  },
  {
    title: "Cloud Builder Sprint",
    timeLeft: "10 days left",
    location: "Online",
    prize: "₹30,000 in prizes",
    participants: "2800 participants",
    tags: ["Cloud", "DevOps", "Infrastructure"],
    date: "Apr 01 - Apr 15, 2025",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/219/991/datas/medium_square.png",
  },
];


const HacksForYou = () => {
  return (
    <div className="page-wr">
      {/* <aside className="sidebar">
        <h3>Categories</h3>
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index} className="category-item">{category}</li>
          ))}
        </ul>
      </aside> */}

      <main className="main-ct">
        

       
        <div className="crds-wr">
          {hackathons.map((hackathon, index) => (
            <div className="crd" key={index}>
              <img src={hackathon.image} alt="Hackathon" />
              <div className="crd-content">
                <div className="crd-title">{hackathon.title}</div>
                <div className="grd">
                <div className="metaa">{hackathon.timeLeft}</div>
                <div className="infoo">{hackathon.location}</div>
                <div className="infoo">{hackathon.prize}</div>
                <div className="infoo">{hackathon.participants}</div>
                </div>
                 {/* <div className="tags">
                  {hackathon.tags.map((tag, idx) => (
                    <span className="tag" key={idx}>{tag}</span>
                  ))}
                </div> */}
                <div className="crd-date">{hackathon.date}</div>
              </div>
            </div>
          ))}
        </div>
        <Link to='/hacklist'><button className="view" >View More</button></Link>

      </main>

    </div>
  );
};

export default HacksForYou;
