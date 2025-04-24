// src/components/HackathonList.js
import React from "react";
import "./HackathonList.css";
import Nav from "../Nav/Nav";


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
    isOrganizationHosted: true,
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
    isOrganizationHosted: true,
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
    isOrganizationHosted: false,
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
    isOrganizationHosted: true,
  },
];



const HackathonList = () => {
  return (
    <>
    <Nav/>
    <header className="header">
          Join the best online and in-person hackathons
        </header>
    <div className="page-wrapper">
    <aside className="sidebar">
  {/* Location */}
  <div className="filter-section">
    <h3>Location</h3>
    <div className="filter-item">
      <input type="checkbox" id="online" />
      <label htmlFor="online">Online</label>
    </div>
    <div className="filter-item">
      <input type="checkbox" id="inperson" />
      <label htmlFor="inperson">In-person</label>
    </div>
  </div>

  {/* Status */}
  <div className="filter-section">
    <h3>Status</h3>
    <div className="filter-item">
      <input type="checkbox" id="upcoming" />
      <label htmlFor="upcoming">
        Upcoming <span className="dot orange"></span>
      </label>
    </div>
    <div className="filter-item">
      <input type="checkbox" id="open" />
      <label htmlFor="open">
        Open <span className="dot green"></span>
      </label>
    </div>
    <div className="filter-item">
      <input type="checkbox" id="ended" />
      <label htmlFor="ended">
        Ended <span className="dot gray"></span>
      </label>
    </div>
  </div>

  {/* Length */}
  <div className="filter-section">
    <h3>Length</h3>
    <div className="filter-item">
      <input type="checkbox" id="short" />
      <label htmlFor="short">1-6 days</label>
    </div>
    <div className="filter-item">
      <input type="checkbox" id="medium" />
      <label htmlFor="medium">1-4 weeks</label>
    </div>
    <div className="filter-item">
      <input type="checkbox" id="long" />
      <label htmlFor="long">1+ month</label>
    </div>
  </div>

  {/* Interest Tags */}
  <div className="filter-section">
    <h3>Interest tags</h3>
    <div className="filter-item">
      <input type="checkbox" id="beginner" />
      <label htmlFor="beginner">Beginner Friendly</label>
    </div>
    <div className="filter-item">
      <input type="checkbox" id="socialgood" />
      <label htmlFor="socialgood">Social Good</label>
    </div>
    <div className="filter-item">
      <input type="checkbox" id="mlai" />
      <label htmlFor="mlai">Machine Learning/AI</label>
    </div>
    <div className="filter-item">
      <input type="checkbox" id="openended" />
      <label htmlFor="openended">Open Ended</label>
    </div>
    <div className="filter-item">
      <input type="checkbox" id="education" />
      <label htmlFor="education">Education</label>
    </div>
    <a href="#" className="show-more">Show more (23)</a>
  </div>

  {/* Host */}
  <div className="filter-section">
    <h3>Host</h3>
    <select>
      <option>Select host</option>
      {/* Add host options here */}
    </select>
  </div>

  {/* Open to */}
  <div className="filter-section">
    <h3>Open to</h3>
    <div className="filter-item">
      <input type="checkbox" id="public" />
      <label htmlFor="public">Public</label>
    </div>
    <div className="filter-item">
      <input type="checkbox" id="invite" />
      <label htmlFor="invite">Invite only</label>
    </div>
  </div>
</aside>


<main className="main-content">
          <div className="search-container">
            <input type="text" placeholder="Search by hackathon title or keyword" />
            <button>Search</button>
          </div>

          <div className="cards-wrapper">
            {hackathons.map((hackathon, index) => (
              <div className="card" key={index}>
                {hackathon.isOrganizationHosted && (
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/5610/5610944.png"
                    alt="Verified Organization"
                    className="tick-icon"
                  />
                )}
                <img src={hackathon.image} alt="Hackathon" />
                <div className="card-content">
                  <div className="card-title">{hackathon.title}</div>
                  <div className="meta">{hackathon.timeLeft}</div>
                  <div className="info">{hackathon.location}</div>
                  <div className="info">{hackathon.prize}</div>
                  <div className="info">{hackathon.participants}</div>
                  <div className="tags">
                    {hackathon.tags.map((tag, idx) => (
                      <span className="tag" key={idx}>{tag}</span>
                    ))}
                  </div>
                  <div className="card-date">{hackathon.date}</div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default HackathonList;