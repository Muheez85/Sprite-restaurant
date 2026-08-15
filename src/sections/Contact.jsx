import { useEffect, useRef, useState } from "react";
import "./Contact.css";

function Contact() {
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
      className={`contact-section ${
        visible ? "contact-visible" : ""
      }`}
      id="contact"
      ref={sectionRef}
    >
      <div className="container">

        <div className="row g-5">

          {/* Contact information */}
          <div className="col-lg-5">

            <div className="contact-content">

              <span className="section-eyebrow">
                GET IN TOUCH
              </span>

              <h2>
                We'd love to
                <br />
                <span>hear from you.</span>
              </h2>

              <p>
                Have a question, planning a private event, or simply
                want to say hello? Get in touch with the Sprite team.
              </p>

              <div className="contact-details">

                <div className="contact-item">
                  <i className="bi bi-geo-alt"></i>

                  <div>
                    <h3>Visit Us</h3>
                    <p>
                      24 Victoria Island Road
                      <br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="bi bi-telephone"></i>

                  <div>
                    <h3>Call Us</h3>
                    <p>+234 800 000 0000</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="bi bi-envelope"></i>

                  <div>
                    <h3>Email Us</h3>
                    <p>hello@sprite.com</p>
                  </div>
                </div>

              </div>

            </div>

          </div>


          {/* Contact form */}
          <div className="col-lg-7">

            <form className="contact-form">

              <div className="row g-4">

                <div className="col-md-6">
                  <label htmlFor="contactName">
                    Name
                  </label>

                  <input
                    type="text"
                    id="contactName"
                    className="form-control"
                    placeholder="Your name"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="contactEmail">
                    Email
                  </label>

                  <input
                    type="email"
                    id="contactEmail"
                    className="form-control"
                    placeholder="Your email"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="contactSubject">
                    Subject
                  </label>

                  <input
                    type="text"
                    id="contactSubject"
                    className="form-control"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="contactMessage">
                    Message
                  </label>

                  <textarea
                    id="contactMessage"
                    className="form-control"
                    rows="6"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="contact-btn"
                  >
                    Send Message
                  </button>
                </div>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;