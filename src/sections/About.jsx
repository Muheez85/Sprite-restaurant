import { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutImage from "../assets/images/about-restaurant.jpg";


function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`about ${visible ? "about-visible" : ""}`}
      id="about"
      ref={sectionRef}
    >
      <div className="about-container">

        {/* Image */}
        <div className="about-image-wrapper">
          <div className="about-image-frame">
            <img
              src={aboutImage}
              alt="Elegant Sprite restaurant dining area"
            //   style={{
            //     width: "50px",
            //     heigth: "49px"
            //   }}
            />
          </div>
          <div className="about-image-detail">
            <span>EST.</span>
            <strong>2026</strong>
          </div>
        </div>


        {/* Content */}
        <div className="about-content">
          <span className="section-eyebrow">
            OUR STORY
          </span>
          <h2>
            A dining experience
            <br />
            <span>made with intention.</span>
          </h2>
         
          <p className="about-intro">
            At Sprite, we believe great food is more than
            what is placed on a plate. It is the atmosphere,
            the people, the conversation, and the memories
            created around the table.
          </p>

          <p>
            Every dish is thoughtfully prepared using carefully
            selected ingredients and a passion for honest,
            memorable cooking. From intimate dinners to
            celebrations, we create an experience worth
            returning to.
          </p>


          {/* Features */}
          <div className="about-features">
            <div className="about-feature">
              <span className="feature-number">01</span>
              <div>
                <h3>Fresh Ingredients</h3>
                <p>
                  Carefully selected ingredients in every dish.
                </p>
              </div>
            </div>
            <div className="about-feature">
              <span className="feature-number">02</span>

              <div>
                <h3>Crafted With Passion</h3>
                <p>
                  Thoughtful cooking with attention to every detail.
                </p>
              </div>
            </div>
          </div>
          <a href="#menu" className="about-link">
            Discover Our Menu
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;