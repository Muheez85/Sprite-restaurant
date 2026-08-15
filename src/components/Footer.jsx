import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row gy-5">

          {/* Brand */}
          <div className="col-lg-4">
            <div className="footer-brand">
              <a href="#" className="footer-logo">
                Sprite
              </a>

              <p>
                Thoughtful food, warm hospitality, and memorable
                moments around the table.
              </p>

              <div className="footer-socials">
                <a href="#" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#" aria-label="Twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </div>
            </div>
          </div>


          {/* Navigation */}
          <div className="col-6 col-lg-2">
            <h3>Explore</h3>

            <ul className="list-unstyled">
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#chefs">Chefs</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>


          {/* Information */}
          <div className="col-6 col-lg-2">
            <h3>Visit</h3>

            <ul className="list-unstyled">
              <li><a href="#events">Events</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>


          {/* Contact */}
          <div className="col-lg-4">
            <h3>Find Us</h3>

            <div className="footer-contact">

              <p>
                <i className="bi bi-geo-alt"></i>
                24 Victoria Island Road
                <br />
                Lagos, Nigeria
              </p>

              <p>
                <i className="bi bi-telephone"></i>
                +234 800 000 0000
              </p>

              <p>
                <i className="bi bi-envelope"></i>
                hello@sprite.com
              </p>

            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © 2026 Sprite. All rights reserved.
          </p>

          <a href="#">
            Back to top
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;