import React, { useState } from 'react';
import './OrganizeHack.css';
import Nav from '../Nav/Nav';

const OrganizeHack = () => {
  const [form, setForm] = useState({
    title: '',
    organizer: '',
    date: '',
    registrationDeadline: '',
    mode: '',
    location: '',
    techStack: [],
    description: '',
    eligibility: '',
    prizes: '',
    contact: '',
    teamSize: '',
    judgingCriteria: '',
    website: '',
  });

  const modes = ['Online', 'Offline', 'Hybrid'];
  const techOptions = ['React', 'Node.js', 'Python', 'Flutter', 'Java'];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTechToggle = (tech) => {
    setForm((prev) => ({
      ...prev,
      techStack: prev.techStack.includes(tech)
        ? prev.techStack.filter((t) => t !== tech)
        : [...prev.techStack, tech],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', form);
    alert('Hackathon submitted successfully!');
  };

  return (
    <>
    <Nav/>
    <form onSubmit={handleSubmit} className="hackathon-form">
      <h2>Post Your Hackathon</h2>

      <div className="form-group">
        <label>Hackathon Title *</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Organized By *</label>
        <input type="text" name="organizer" value={form.organizer} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Event Date *</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Registration Deadline *</label>
        <input type="date" name="registrationDeadline" value={form.registrationDeadline} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Mode *</label>
        <div className="radio-group">
          {modes.map((mode) => (
            <label key={mode}>
              <input type="radio" name="mode" value={mode} checked={form.mode === mode} onChange={handleChange} />
              {mode}
            </label>
          ))}
        </div>
      </div>

      {(form.mode === 'Offline' || form.mode === 'Hybrid') && (
        <div className="form-group">
          <label>Location *</label>
          <input type="text" name="location" value={form.location} onChange={handleChange} required />
        </div>
      )}

      <div className="form-group">
        <label>Tech Stack *</label>
        <div className="tech-stack">
          {techOptions.map((tech) => (
            <button
              type="button"
              key={tech}
              onClick={() => handleTechToggle(tech)}
              className={form.techStack.includes(tech) ? 'active' : ''}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Description *</label>
        <textarea name="description" value={form.description} onChange={handleChange} required></textarea>
      </div>

      <div className="form-group">
        <label>Eligibility Criteria *</label>
        <input type="text" name="eligibility" value={form.eligibility} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Prizes Summary *</label>
        <input type="text" name="prizes" value={form.prizes} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Contact Email or Phone *</label>
        <input type="text" name="contact" value={form.contact} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Team Size Limit *</label>
        <input type="number" name="teamSize" value={form.teamSize} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Judging Criteria *</label>
        <textarea name="judgingCriteria" value={form.judgingCriteria} onChange={handleChange} required></textarea>
      </div>

      <div className="form-group">
        <label>Website/Registration Link *</label>
        <input type="url" name="website" value={form.website} onChange={handleChange} required />
      </div>

      <button type="submit" className="submit-btn">Submit Hackathon</button>
    </form>
    </>
  );
};

export default OrganizeHack;
