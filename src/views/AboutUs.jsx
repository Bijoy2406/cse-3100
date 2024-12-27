import React from 'react';
import './AboutUs.css';
import humanPhoto from '../assets/human.jpg';

export default function AboutUs() {
  return (
    <div className="about-us-container">
      {/* Our Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          We are a dedicated team of cat lovers committed to finding loving homes for our furry friends. 
          Our mission is to connect adoptable cats with caring individuals and families. We believe every cat deserves a purrfect home.
        </p>
      </section>

      {/* Our History Section */}
      <section className="history-section">
        <h2>Our History</h2>
        <p>
          We partner with local shelters and rescue organizations to provide a safe and nurturing environment for our cats until they find their forever families.
        </p>
        <p>
          Our organization was founded in 2010 with the goal of reducing the number of cats in shelters and finding them loving homes. Since then, we have helped hundreds of cats find their forever families.
        </p>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member-card">
            <img src={humanPhoto} alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder and CEO</p>
          </div>
          <div className="team-member-card">
            <img src={humanPhoto} alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Adoption Coordinator</p>
          </div>
          <div className="team-member-card">
            <img src={humanPhoto} alt="Team Member 3" />
            <h3>Bob Johnson</h3>
            <p>Volunteer Coordinator</p>
          </div>
        </div>
      </section>
    </div>
  );
}
