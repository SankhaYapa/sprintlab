import React, { useState } from "react";
import "./ourTeam.scss";

const teamMembers = [
  {
    id: 0,
    name: "Sarah Farine",
    position: "Founder of LogoFolio",
    image: "images/team1.jpeg", // Replace with the correct image URL
  },
  {
    id: 1,
    name: "Person 2",
    position: "Some Position",
    image: "images/team2.jpeg",
  },
  {
    id: 2,
    name: "Person 3",
    position: "Some Position",
    image: "images/team3.jpeg",
  },
  {
    id: 3,
    name: "Person 4",
    position: "Some Position",
    image: "images/team4.jpeg",
  },
];

const OurTeam = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id); // Toggle expanded state
  };

  return (
    <div className="our-team-container">
      {/* Section Heading */}
      <div className="our-team-wrapper">
      <div className="section-header">
        <h2>
          <span className="section-number">04 |</span> OUR TEAM
        </h2>
        <div className="gradient-line"></div>
      </div>

      {/* Card Container */}
      <div className="card-container">
      <h2>Our Team</h2>
      <span>Hear what our clients have to say about out team and our services.</span>
      <div>
      {teamMembers.map((member) => (
          <div
            key={member.id}
            className={`card ${expandedCard === member.id ? "expanded" : ""}`}
            onClick={() => handleCardClick(member.id)}
          >
            <img src={member.image} alt={member.name} />
            <div className="card-info">
              <img src="/images/Frame 2.png" alt="" className="iconprofile" />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
        
      </div>
      </div>
     
    </div>
  );
};

export default OurTeam;
