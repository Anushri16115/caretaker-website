const nightCareImage = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop';

export default function NightCare() {
  return (
    <div className="night-care-page">
      {/* Hero Section */}
      <section
        className="hero-section-nc"
        style={{ backgroundImage: `url(${nightCareImage})` }}
      >
        <div className="hero-overlay-nc">
          <div className="hero-content-nc container">
            <div className="hero-text-nc">
              <p className="breadcrumb-nc">Home &gt; Services &gt; Night Care</p>
              <h1>Overnight Care for Your Peace of Mind</h1>
              <p>
                Providing attentive and compassionate care through the night, ensuring your loved ones are safe and comfortable while you get the rest you need.
              </p>
            </div>
            <div className="hero-form-nc card">
              <h3>Arrange for a Consultation</h3>
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

      {/* Services Included Section */}
      <section className="services-included-section container section">
        <h2 className="section-title center">Our Night Care Services</h2>
        <div className="services-grid-nc">
          <div className="service-item-nc card">
            <h3>Monitoring & Safety</h3>
            <p>Continuous supervision to ensure safety, manage fall risk, and respond to any immediate needs.</p>
          </div>
          <div className="service-item-nc card">
            <h3>Toileting Assistance</h3>
            <p>Gentle and discreet assistance with nighttime bathroom visits to maintain comfort and hygiene.</p>
          </div>
          <div className="service-item-nc card">
            <h3>Medication Reminders</h3>
            <p>Ensuring that any prescribed nighttime medications are taken on schedule.</p>
          </div>
          <div className="service-item-nc card">
            <h3>Comfort & Repositioning</h3>
            <p>Helping with repositioning in bed to prevent bedsores and ensure a restful night's sleep.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-nc section full-bleed">
        <div className="container">
          <h2 className="section-title center">Benefits of Our Night Care</h2>
          <div className="benefits-grid-nc">
            {[              'Restful sleep for family caregivers',              'Reduced risk of nighttime accidents',              'Immediate assistance when needed',              'Continuity of care throughout the night',
            ].map((benefit) => (
              <div key={benefit} className="benefit-item-nc card">
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
