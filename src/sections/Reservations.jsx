import { useEffect, useRef, useState } from "react";
import "./Reservations.css";

function Reservations() {
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
      className={`reservations-section ${
        visible ? "reservations-visible" : ""
      }`}
      id="reservations"
      ref={sectionRef}
    >
      <div className="container">

        <div className="row align-items-center g-5">

          {/* Left Content */}
          <div className="col-lg-5">

            <div className="reservation-content">

              <span className="section-eyebrow">
                RESERVATIONS
              </span>

              <h2>
                Your table
                <br />
                <span>is waiting.</span>
              </h2>

              <p>
                Whether it is an intimate dinner, a special
                celebration, or simply an evening to enjoy good
                food, we would love to have you at Sprite.
              </p>

              <div className="reservation-info">

                <div className="reservation-info-item">
                  <i className="bi bi-clock"></i>

                  <div>
                    <h4>Opening Hours</h4>
                    <p>
                      Monday – Sunday
                      <br />
                      12:00 PM – 11:00 PM
                    </p>
                  </div>
                </div>

                <div className="reservation-info-item">
                  <i className="bi bi-telephone"></i>

                  <div>
                    <h4>Reservations</h4>
                    <p>
                      +234 800 000 0000
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>


          {/* Reservation Form */}
          <div className="col-lg-7">

            <div className="reservation-form-wrapper">

              <form className="reservation-form">

                <div className="row g-4">

                  {/* Name */}
                  <div className="col-md-6">

                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Your name"
                    />

                  </div>


                  {/* Email */}
                  <div className="col-md-6">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Your email"
                    />

                  </div>


                  {/* Phone */}
                  <div className="col-md-6">

                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      className="form-control"
                      placeholder="Your phone"
                    />

                  </div>


                  {/* Guests */}
                  <div className="col-md-6">

                    <label htmlFor="guests">
                      Number of Guests
                    </label>

                    <select
                      id="guests"
                      className="form-select"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select guests
                      </option>

                      <option value="1">
                        1 Guest
                      </option>

                      <option value="2">
                        2 Guests
                      </option>

                      <option value="3">
                        3 Guests
                      </option>

                      <option value="4">
                        4 Guests
                      </option>

                      <option value="5">
                        5 Guests
                      </option>

                      <option value="6">
                        6 Guests
                      </option>

                      <option value="7+">
                        7+ Guests
                      </option>
                    </select>

                  </div>


                  {/* Date */}
                  <div className="col-md-6">

                    <label htmlFor="date">
                      Date
                    </label>

                    <input
                      type="date"
                      id="date"
                      className="form-control"
                    />

                  </div>


                  {/* Time */}
                  <div className="col-md-6">

                    <label htmlFor="time">
                      Preferred Time
                    </label>

                    <input
                      type="time"
                      id="time"
                      className="form-control"
                    />

                  </div>


                  {/* Message */}
                  <div className="col-12">

                    <label htmlFor="message">
                      Special Request
                    </label>

                    <textarea
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Anything we should know?"
                    ></textarea> 
                  </div>
                  {/* Button */}
                  <div className="col-12">
                    <button
                      type="submit"
                      className="reservation-btn"
                    >
                      Reserve A Table
                      {/* <span>→</span> */}
                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Reservations;