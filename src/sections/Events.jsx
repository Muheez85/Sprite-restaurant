
import { useEffect, useRef, useState } from "react";
import "./Events.css";

import eventImage from "../assets/images/events.jpg";

function Events() {
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
      className={`events-section ${visible ? "events-visible" : ""}`}
      id="events"
      ref={sectionRef}
    >
      <div className="events-container">

        {/* Image */}
        <div className="events-image">
          <img
            src={eventImage}
            alt="Private dining experience at Sprite"
          />

          <div className="events-image-label">
            <span>SPRITE</span>
            <strong>PRIVATE DINING</strong>
          </div>
        </div>

        {/* Content */}
        <div className="events-content">

          <span className="section-eyebrow">
            PRIVATE EXPERIENCES
          </span>

          <h2>
            Celebrate life's
            <br />
            <span>memorable moments.</span>
          </h2>

          <p className="events-intro">
            From intimate dinners to unforgettable celebrations,
            Sprite provides the perfect setting for moments worth
            remembering.
          </p>

          <p>
            Our private dining experience combines exceptional
            food, thoughtful service, and an atmosphere designed
            around your occasion.
          </p>

          <div className="events-list">

            <div className="event-item">
              <span>01</span>
              <div>
                <h3>Private Dinners</h3>
                <p>
                  An intimate dining experience for you and
                  your guests.
                </p>
              </div>
            </div>

            <div className="event-item">
              <span>02</span>
              <div>
                <h3>Celebrations</h3>
                <p>
                  Birthdays, anniversaries and special milestones.
                </p>
              </div>
            </div>

            <div className="event-item">
              <span>03</span>
              <div>
                <h3>Corporate Events</h3>
                <p>
                  Impress your guests with an exceptional setting.
                </p>
              </div>
            </div>

          </div>

          <a href="#contact" className="events-button">
            Plan Your Event
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Events;