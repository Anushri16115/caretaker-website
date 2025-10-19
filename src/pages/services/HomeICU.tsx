import "../../styles/services/HomeICU.css";

const homeICUImage = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop';

export default function HomeICU() {
  return (
    <div className="home-icu-page">
      {/* Hero Section */}
      <section
        className="hero-section-hicu"
        style={{ backgroundImage: `url(${homeICUImage})` }}
      >
        <div className="hero-overlay-hicu">
          <div className="hero-content-hicu container">
            <div className="hero-text-hicu">
              <p className="breadcrumb-hicu">Home &gt; Services &gt; Home ICU</p>
              <h1>Advanced ICU Care in the Comfort of Your Home</h1>
              <p>
                Providing hospital-level intensive care with advanced equipment and skilled medical professionals, ensuring the best possible support for critical patients at home.
              </p>
            </div>
            <div className="hero-form-hicu card">
              <h3>Inquire About Home ICU Setup</h3>
              <form>
                <div className="form-field">
                  <label>NAME</label>
                  <input type="text" placeholder="Enter Full Name" />
                </div>
                <div className="form-field">
                  <label>MOBILE NUMBER</label>
                  <input type="text" placeholder="Enter Mobile Number" />
                </div>
                <div className="form-field">
                  <label>LOCATION</label>
                  <select>
                    <option>Select Location</option>
                  </select>
                </div>
                <button type="submit" className="btn-request-callback">
                  REQUEST A CALLBACK
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Care Services Section */}
      <section className="critical-care-section container section">
        <h2 className="section-title center">Critical Care Services at Home</h2>
        <div className="care-grid-hicu">
          <div className="care-item-hicu card">
            <h3>Ventilator & BiPAP/CPAP Support</h3>
            <p>Expert management of respiratory support equipment to ensure stable breathing.</p>
          </div>
          <div className="care-item-hicu card">
            <h3>Cardiac Monitoring</h3>
            <p>Continuous monitoring of heart rate, blood pressure, and other vital signs.</p>
          </div>
          <div className="care-item-hicu card">
            <h3>IV Fluid & Medication Management</h3>
            <p>Administering intravenous fluids and medications as prescribed by the physician.</p>
          </div>
          <div className="care-item-hicu card">
            <h3>Skilled Nursing Care</h3>
            <p>Round-the-clock care from ICU-trained nurses for all medical and personal needs.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-hicu section full-bleed">
        <div className="container">
          <h2 className="section-title center">Benefits of Our Home ICU Care</h2>
          <div className="benefits-grid-hicu">
            {[              'Reduced risk of hospital-acquired infections',              'Personalized, one-on-one medical attention',              'Comfort and emotional support of a home environment',              'Cost-effective alternative to long hospital stays',
            ].map((benefit) => (
              <div key={benefit} className="benefit-item-hicu card">
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
