
import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content-wrapper">
        <div className="footer-top">
          <div className="footer-col footer-contact">
            <h3 className="footer-heading">Abhiruchi Caretaker</h3>
            <p>No 2, Mayur Niwas, 172 Shrikant LodgeFlat, 169/A, Dr Babasaheb Ambedkar Rd, Dadar TT, Dadar East, Punewadi, Mumbai, Maharashtra 400014</p>
            <p>
              <strong>Phone:</strong> <a href="tel:+917276526772">+91 7276526772</a><br />
              <strong>Email:</strong> <a href="mailto:support@caretakernearme.in">support@caretakernearme.in</a>
            </p>
          </div>
          <div className="footer-col footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col footer-social">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="Twitter">t</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p> {new Date().getFullYear()} Abhiruchi Caretaker. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
