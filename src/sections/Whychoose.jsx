import { useEffect, useRef, useState } from "react";
import "./WhyChoose.css";

function WhyChoose() {
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

  const features = [
    {
      number: "01",
      icon: "✦",
      title: "Fresh Ingredients",
      text: "We carefully select quality ingredients to bring freshness and character to every plate.",
    },
    {
      number: "02",
      icon: "♨",
      title: "Crafted With Passion",
      text: "Every dish is thoughtfully prepared with attention to flavor, balance, and presentation.",
    },
    {
      number: "03",
      icon: "◇",
      title: "Exceptional Service",
      text: "From the moment you arrive, our team is committed to making your experience memorable.",
    },
    {
      number: "04",
      icon: "⌂",
      title: "The Perfect Atmosphere",
      text: "An elegant and welcoming setting designed for conversations, celebrations, and connection.",
    },
  ];

  return (
    <section
      className={`why-choose ${visible ? "why-visible" : ""}`}
      ref={sectionRef}
    >
        {/* this particular type of code */}



      <div className="why-container">
        {/* Heading */}
        <div className="why-heading">
          <span className="section-eyebrow">
            THE SPRITE EXPERIENCE
          </span>
          <h2>
            More than a meal.
            <br />
            <span>An experience.</span>
          </h2>
          <p>
            We bring together thoughtful cooking, quality ingredients,
            genuine hospitality, and an atmosphere where every visit
            feels worth remembering.
          </p>
        </div>
        {/* Features */}
        <div className="why-grid">
          {features.map((feature) => (
            <article className="why-card" key={feature.number}>
              <div className="why-card-top">
                <span className="why-number">
                  {feature.number}
                </span>
                <span className="why-icon">
                  {feature.icon}
                </span>
              </div>
              <div className="why-card-content">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
              <span className="why-arrow">↗</span>
            </article>
          ))}
        </div>
        {/* Stats */}
        <div className="why-stats">
          <div className="why-stat">
            <strong>15+</strong>
            <span>Signature Dishes</span>
          </div>
          <div className="why-stat">
            <strong>10+</strong>
            <span>Years of Craft</span>
          </div>
          <div className="why-stat">
            <strong>4.9</strong>
            <span>Guest Rating</span>
          </div>
          <div className="why-stat">
            <strong>100%</strong>
            <span>Made With Care</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;