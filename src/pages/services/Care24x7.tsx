const care24x7Image = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop';

export default function Care24x7() {
  return (
    <div className="care-24x7-page">
      {/* Hero Section */}
      <section
        className="hero-section-c247"
        style={{ backgroundImage: `url(${care24x7Image})` }}
      >
        <div className="hero-overlay-c247">
          <div className="hero-content-c247 container">
            <div className="hero-text-c247">
              <p className="breadcrumb-c247">Home &gt; Services &gt; 24x7 Care</p>
              <h1>24x7 Care for Continuous Support</h1>
              <p>
                Uninterrupted, round-the-clock care for your loved ones, ensuring their safety, comfort, and well-being at all times.
              </p>
            </div>
            <div className="hero-form-c247 card">
              <h3>Inquire About 24x7 Care</h3>
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

      {/* Comprehensive Support Section */}
      <section className="support-section container section">
        <h2 className="section-title center">Comprehensive Round-the-Clock Support</h2>
        <div className="support-grid-c247">
          <div className="support-item-c247 card">
            <h3>Continuous Monitoring</h3>
            <p>Constant supervision to ensure safety and immediate response to any needs or emergencies.</p>
          </div>
          <div className="support-item-c247 card">
            <h3>Personal Care</h3>
            <p>Assistance with all daily living activities, including hygiene, meals, and mobility, day and night.</p>
          </div>
          <div className="support-item-c247 card">
            <h3>Shift-Based Caregivers</h3>
            <p>A team of caregivers working in shifts to provide alert, attentive, and seamless care without interruption.</p>
          </div>
          <div className="support-item-c247 card">
            <h3>Emergency Coordination</h3>
            <p>Trained to handle emergencies and coordinate with medical professionals when necessary.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-c247 section full-bleed">
        <div className="container">
          <h2 className="section-title center">Benefits of Our 24x7 Care</h2>
          <div className="benefits-grid-c247">
            {[              'Complete peace of mind for families',              'Uninterrupted safety and supervision',              'Immediate response to all needs',              'Ideal for post-operative and critical care patients',
            ].map((benefit) => (
              <div key={benefit} className="benefit-item-c247 card">
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
