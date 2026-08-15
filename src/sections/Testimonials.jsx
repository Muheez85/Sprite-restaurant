import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

function Testimonials() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote:
        "Everything about Sprite felt intentional. The food was excellent, the atmosphere was beautiful, and the service made the evening special.",
      name: "Amara Johnson",
      role: "Guest",
    },
    {
      quote:
        "One of the best dining experiences I've had. The attention to detail and quality of the food really stood out.",
      name: "David Williams",
      role: "Guest",
    },
    {
      quote:
        "Sprite has the perfect balance between a relaxed atmosphere and exceptional dining. I would absolutely come back.",
      name: "Sarah Adeyemi",
      role: "Guest",
    },
  ];

  return (
    <section
      className={`testimonials-section ${
        visible ? "testimonials-visible" : ""
      }`}
      id="testimonials"
      ref={sectionRef}
    >
      <div className="container">

        <div className="testimonials-heading text-center mx-auto">
          <span className="section-eyebrow">
            GUEST EXPERIENCES
          </span>

          <h2>
            Words from
            <br />
            <span>our guests.</span>
          </h2>
        </div>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">

            {testimonials.map((testimonial, index) => (
              <div
                className={`carousel-item ${
                  index === 0 ? "active" : ""
                }`}
                key={testimonial.name}
              >
                <div className="testimonial-content text-center mx-auto">

                  <div className="testimonial-stars mb-4">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>

                  <blockquote>
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="testimonial-author">
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.role}</span>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Bootstrap controls */}
          <button
            className="carousel-control-prev testimonial-control"
            type="button"
            data-bs-target="#testimonialCarousel"
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
            className="carousel-control-next testimonial-control"
            type="button"
            data-bs-target="#testimonialCarousel"
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
          <div className="carousel-indicators testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;