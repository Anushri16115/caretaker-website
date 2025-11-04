
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
        <div
          className="footer-map-section"
          role="link"
          aria-label="Open location in Google Maps"
          title="Open in Google Maps"
          onClick={() => window.open('https://maps.app.goo.gl/gabg4A9h11SbSJyc7?g_st=awb', '_blank', 'noopener,noreferrer')}
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open('https://maps.app.goo.gl/gabg4A9h11SbSJyc7?g_st=awb', '_blank', 'noopener,noreferrer'); } }}
          style={{ cursor: 'pointer' }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.559742488328!2d73.91441407425935!3d18.5037206694906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11843049189%3A0x24c1e0df52c4a35a!2sSiddhivinayak%20Care%20Takers%20bureau%20Hadapsar!5e0!3m2!1sen!2sin!4v1678886458972!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p> {new Date().getFullYear()} Abhiruchi Caretaker. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
