import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="column">
          <h4>Devpost</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
        <div className="column">
          <h4>Hackathons</h4>
          <ul>
            <li><a href="#">Browse hackathons</a></li>
            <li><a href="#">Explore projects</a></li>
            <li><a href="#">Host a hackathon</a></li>
            <li><a href="#">Hackathon guides</a></li>
          </ul>
        </div>
        <div className="column">
          <h4>Portfolio</h4>
          <ul>
            <li><a href="#">Your projects</a></li>
            <li><a href="#">Your hackathons</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </div>
        <div className="column">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Devpost, Inc. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Community guidelines</a>
          <a href="#">Security</a>
          <a href="#">CA notice</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
