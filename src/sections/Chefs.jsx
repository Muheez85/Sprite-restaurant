import { useEffect, useRef, useState } from "react";
import "./Chefs.css";

import chef1 from "../assets/images/chef-1.jpg";
import chef2 from "../assets/images/chef-2.jpg";
import chef3 from "../assets/images/chef-3.jpg";
import chef4 from "../assets/images/chef-4.jpg";
import chef5 from "../assets/images/chef-5.jpg";



function Chefs() {
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

  const chefs = [
    {
      name: "Daniel Laurent",
      role: "Executive Chef",
      image: chef1,
      description:
        "With a passion for refined flavors and honest ingredients, Daniel brings creativity and precision to every dish.",
    },
    {
      name: "Amelia Carter",
      role: "Head Chef",
      image: chef2,
      description:
        "Amelia combines classic culinary techniques with contemporary ideas to create memorable dining experiences.",
    },
    {
      name: "Marcus Bennett",
      role: "Sous Chef",
      image: chef3,
      description:
        "Marcus brings energy, discipline, and a deep respect for ingredients to the Sprite kitchen.",
    },
  ];

  return (
    <section
      className={`chefs-section ${visible ? "chefs-visible" : ""}`}
      id="chefs"
      ref={sectionRef}
    >
      <div className="container">
        {/* Heading */}
        <div className="chefs-heading">
          <span className="section-eyebrow">
            MEET OUR CHEFS
          </span>
          <h2>
            The people behind
            <br />
            <span>the plate.</span>
          </h2>
          <p>
            Behind every memorable dish is a team that cares
            deeply about the craft of cooking.
          </p>
        </div>
        {/* Bootstrap Carousel */}
        <div
          id="chefCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {chefs.map((chef, index) => (
              <div
                className={`carousel-item ${
                  index === 0 ? "active" : ""
                }`}
                key={chef.name}
              >

                <div className="chef-slide">
                  {/* Image */}
                  <div className="chef-image">
                    <img
                      src={chef.image}
                      alt={chef.name}
                    />
                  </div>
                  {/* Content */}
                  <div className="chef-content">
                    <span className="chef-role">
                      {chef.role}
                    </span>
                    <h3>{chef.name}</h3>
                    <p>
                      {chef.description}
                    </p>
                    <a href="#contact" className="chef-link">
                      Meet Our Team
                      {/* <span>→</span> */}
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>


          {/* Bootstrap Controls */}
          <button
            className="carousel-control-prev chef-control"
            type="button"
            data-bs-target="#chefCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>

            <span className="visually-hidden">
              Previous
            </span>
          </button>

          <button
            className="carousel-control-next chef-control"
            type="button"
            data-bs-target="#chefCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>

            <span className="visually-hidden">
              Next
            </span>
          </button>


          {/* Indicators */}
          <div className="carousel-indicators chef-indicators">

            {chefs.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#chefCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Chef ${index + 1}`}
              ></button>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Chefs;