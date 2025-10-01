import "../styles/About.css";

const aboutUsImage = 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=2070&auto=format&fit=crop';

export default function About() {
  return (
    <div className="about-us-page section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h1 className="section-title">About Us</h1>
            <p>
              Welcome to Abhiruchi Home HealthCare, your reliable partner in providing
              top-quality healthcare services right at your doorstep. At Abhiruchi, we
              believe that healthcare should be accessible, personalized, and
              delivered with compassion. This philosophy fuels our dedication to
              offering comprehensive care in the comfort and security of your home.
            </p>
            <p>
              We put your needs at the heart of everything we do, taking the time to
              understand your individual circumstances, preferences, and goals. With
              this insight, we create customized care plans tailored to your specific
              healthcare needs. At Abhiruchi, your well-being is our priority, and we
              are committed to surpassing your expectations.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutUsImage} alt="Compassionate healthcare provider with a patient" />
          </div>
        </div>

        <div className="mission-vision-grid">
          <div className="card">
            <h2>Abhiruchi Vision</h2>
            <p>
              <i>"Our vision is to become the premier provider of home-based
              healthcare services, renowned for our unwavering commitment to
              personalized care, innovation, and excellence."</i>
            </p>
          </div>
          <div className="card">
            <h2>Abhiruchi Mission</h2>
            <p>
              <i>"Our mission is to redefine the standards of healthcare delivery by
              providing compassionate, convenient, and comprehensive services
              directly to our clients' homes."</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
