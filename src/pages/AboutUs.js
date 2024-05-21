import React from "react";
import "./AboutUs.css";
import smart from "../assets/brain.jpg";
import heart from "../assets/heart.jpg";
import creative from "../assets/creative.jpg";
import wildcard from "../assets/wildcard.jpg";

const teamMembers = [
  {
    name: "Fikri Ekandra Khisyam (00000094268)",
    image: smart,
    description:
      "'The Brain'. When they're not solving complex problems, they're busy perfecting their evil laugh. Muahaha! Favorite quote: 'I don't need Google, my brain is the search engine.'",
  },
  {
    name: "Josh Marino Smidt (00000095987)",
    image: creative,
    description:
      "'The Creative'. They once turned a boring spreadsheet into a masterpiece. Favorite quote: 'Creativity is intelligence having fun.'",
  },
  {
    name: "Aryaka Alif (00000096731)",
    image: wildcard,
    description:
      "'The Wildcard'. You never know what they're going to do next, and neither do we. Keeps things exciting, though! Favorite quote: 'Normal is boring.'",
  },
  {
    name: "Muhammad Naufal Aulia (00000110833)",
    image: heart,
    description:
      "'The Heart'. Always there with a kind word and a plate of cookies. They believe in the power of hugs and positive vibes. Favorite quote: 'A hug a day keeps the grumpies away.'",
  },
];

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>Introducing Our Team!</h1>
      <h2>Pasukan BIBD</h2>
      <div className="cards-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="card">
            <div className="card-front">
              <img src={member.image} alt={member.name} />
              <h2>{member.name}</h2>
            </div>
            <div className="card-back">
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
