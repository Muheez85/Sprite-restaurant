import { useEffect, useRef, useState } from "react";
import "./SpecialEvents.css";

import specialEventsImage from "../assets/images/special-events.jpg";

function SpecialEvents() {
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

  return (
    <section
      className={`special-events ${visible ? "special-events-visible" : ""}`}
      id="special-events"
      ref={sectionRef}
    >
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Image */}
          <div className="col-lg-6">
            <div className="special-events-image">
              <img
                src={specialEventsImage}
                alt="Guests enjoying a private event at Sprite"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-6">
            <div className="special-events-content">

              <span className="section-eyebrow">
                SPECIAL EVENTS
              </span>

              <h2>
                Celebrate something
                <br />
                <span>worth remembering.</span>
              </h2>

              <p>
                From intimate celebrations to elegant private dinners,
                Sprite provides the setting, food, and hospitality to
                make your occasion truly special.
              </p>

              <div className="row g-4 special-event-types">

                <div className="col-sm-6">
                  <div className="special-event-item">
                    <i className="bi bi-balloon-heart"></i>
                    <h3>Private Celebrations</h3>
                    <p>
                      Birthdays, anniversaries, and intimate gatherings.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="special-event-item">
                    <i className="bi bi-briefcase"></i>
                    <h3>Corporate Dining</h3>
                    <p>
                      Professional dinners and memorable team occasions.
                    </p>
                  </div>
                </div>

              </div>

              <a href="#contact" className="special-events-link">
                Plan Your Event
                {/* <span>→</span> */}
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SpecialEvents;