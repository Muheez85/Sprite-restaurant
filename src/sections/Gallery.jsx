import { useEffect, useRef, useState } from "react";
import "./Gallery.css";

import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-signature.jpg";
import gallery3 from "../assets/images/gallery-fresh.jpg";
import gallery4 from "../assets/images/gallery-evening.jpg";
import gallery5 from "../assets/images/gallery-kitchen.jpg";
import gallery6 from "../assets/images/gallery-experience.jpg";

function Gallery() {
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
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      image: gallery1,
      title: "The Dining Room",
    },
    {
      image: gallery2,
      title: "Signature Dish",
    },
    {
      image: gallery3,
      title: "Fresh Ingredients",
    },
    {
      image: gallery4,
      title: "Evening at Sprite",
    },
    {
      image: gallery5,
      title: "From Our Kitchen",
    },
    {
      image: gallery6,
      title: "The Sprite Experience",
    },
  ];

  return (
    <section
      className={`gallery-section ${
        visible ? "gallery-visible" : ""
      }`}
      id="gallery"
      ref={sectionRef}
    >
      <div className="container">

        {/* Heading */}
        <div className="gallery-heading text-center mx-auto">

          <span className="section-eyebrow">
            OUR GALLERY
          </span>

          <h2>
            A glimpse into
            <br />
            <span>the Sprite experience.</span>
          </h2>

          <p>
            Take a look inside our kitchen, our dining room,
            and the moments that make Sprite what it is.
          </p>

        </div>


        {/* Gallery */}
        <div className="row g-3 gallery-grid">

          {images.map((item, index) => (
            <div
              className={`col-6 col-lg-4 gallery-item gallery-item-${index + 1}`}
              key={item.image}
            >
              <div className="gallery-image">

                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid"
                />

                <div className="gallery-overlay">
                  <span>{item.title}</span>

                  <i className="bi bi-plus-lg"></i>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;