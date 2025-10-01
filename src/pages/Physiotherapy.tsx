import "../styles/Physiotherapy.css";

const physiotherapyHeroImage = "https://images.unsplash.com/photo-1599447462855-c0194b353402?q=80&w=2070&auto=format&fit=crop";
const therapyImage1 = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop";
const therapyImage2 = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop";

export default function Physiotherapy() {
  return (
    <div className="physiotherapy-page">
      <section 
        className="physio-hero section"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${physiotherapyHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <h1 className="section-title center">Physiotherapy Support at Home</h1>
          <p className="hero-subtitle">Professional, personalized, and compassionate physiotherapy services in the comfort of your home.</p>
          <div className="hero-stats">
            <span className="pill">500+ Successful Recoveries</span>
            <span className="pill">Certified Physiotherapists</span>
          </div>
        </div>
      </section>

      <section className="intro-section section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2 className="section-title">Restore Mobility and Improve Quality of Life</h2>
              <p>Our certified physiotherapists are dedicated to helping you or your loved ones regain strength, mobility, and independence. We provide personalized care plans tailored to individual needs, ensuring the best possible outcomes.</p>
              <p>With years of experience in rehabilitation medicine, our team specializes in evidence-based treatment approaches that promote faster healing and long-term wellness.</p>
            </div>
            <div className="intro-image">
              <img src={therapyImage1} alt="Professional physiotherapist working with patient" />
            </div>
          </div>
        </div>
      </section>

      <section className="services-offered-section section">
        <div className="container">
          <h2 className="section-title center">Our Physiotherapy Services</h2>
          <div className="services-grid">
            <div className="service-card card">
              <div className="service-icon">🏥</div>
              <h3>Post-Surgical Rehab</h3>
              <p>Specialized care to help you recover quickly and safely after surgery, including joint replacements and orthopedic procedures.</p>
            </div>
            <div className="service-card card">
              <div className="service-icon">🧠</div>
              <h3>Neurological Physiotherapy</h3>
              <p>Expert support for conditions like stroke, Parkinson's, multiple sclerosis, and spinal cord injuries.</p>
            </div>
            <div className="service-card card">
              <div className="service-icon">🦴</div>
              <h3>Orthopedic Physiotherapy</h3>
              <p>Comprehensive treatment for joint pain, muscle injuries, arthritis, and sports-related injuries.</p>
            </div>
            <div className="service-card card">
              <div className="service-icon">👵</div>
              <h3>Geriatric Physiotherapy</h3>
              <p>Specialized care for elderly patients focusing on mobility, balance, and fall prevention.</p>
            </div>
            <div className="service-card card">
              <div className="service-icon">💪</div>
              <h3>Strength Training</h3>
              <p>Customized exercise programs to rebuild muscle strength and improve overall fitness.</p>
            </div>
            <div className="service-card card">
              <div className="service-icon">🎯</div>
              <h3>Pain Management</h3>
              <p>Non-invasive techniques to reduce chronic pain and improve quality of life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="treatment-approach section">
        <div className="container">
          <div className="approach-grid">
            <div className="approach-image">
              <img src={therapyImage2} alt="Modern physiotherapy equipment and techniques" />
            </div>
            <div className="approach-content">
              <h2 className="section-title">Our Treatment Approach</h2>
              <div className="approach-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Initial Assessment</h4>
                    <p>Comprehensive evaluation of your condition, medical history, and mobility goals.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Personalized Plan</h4>
                    <p>Development of a customized treatment plan tailored to your specific needs.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Regular Sessions</h4>
                    <p>Consistent therapy sessions with progress monitoring and plan adjustments.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Long-term Support</h4>
                    <p>Ongoing guidance and maintenance programs for sustained improvement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section section">
        <div className="container">
          <h2 className="section-title center">Benefits of In-Home Physiotherapy</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🏠</div>
              <h4>Convenience & Comfort</h4>
              <p>Receive treatment in your familiar environment</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">👨‍⚕️</div>
              <h4>Personalized One-on-One Care</h4>
              <p>Dedicated attention from certified professionals</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h4>Faster Recovery</h4>
              <p>Accelerated healing in a stress-free environment</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🛡️</div>
              <h4>Reduced Risk of Infection</h4>
              <p>Avoid hospital-acquired infections and complications</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Recovery Journey?</h2>
            <p>Contact us today to schedule your initial assessment and begin your path to better mobility and health.</p>
            <button className="btn btn-primary">Book Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
}