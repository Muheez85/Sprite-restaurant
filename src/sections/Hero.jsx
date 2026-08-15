import "./Hero.css";
import { useEffect, useState } from "react";
import heroImage from "../assets/images/sprite-hero.png";



function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background Image */}
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      {/* Dark Overlay */}
      <div className="hero-overlay"></div>
      {/* Hero Content */}
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            WELCOME TO SPRITE
          </span>
          <h1>
            Exceptional Food,
            <br />
            <span>Unforgettable Moments</span>
          </h1>
          <div className="hero-divider">
            <span></span>
        
            <span></span>
          </div>
          <p>
            Experience exquisite flavors, exceptional service,
            and unforgettable moments in an atmosphere designed
            for memorable dining.
          </p>
          <div className="hero-buttons">
            <a href="#menu" className="btn btn-primary">
              Explore Menu
            </a>
            <a href="#reservations" className="btn btn-outline">
              Book a Table
            </a>
          </div>
        </div>
      </div>
     
    </section>
  );
}

export default Hero;