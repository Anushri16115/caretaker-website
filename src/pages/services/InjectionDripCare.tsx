import "../../styles/services/InjectionDripCare.css";

const injectionDripCareImageUrl = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop';

export default function InjectionDripCare() {
  return (
    <div className="injection-drip-care-page">
      {/* Hero Section */}
      <section
        className="hero-section-idc"
        style={{ backgroundImage: `url(${injectionDripCareImageUrl})` }}
      >
        <div className="hero-overlay-idc">
          <div className="hero-content-idc container">
            <div className="hero-text-idc">
              <p className="breadcrumb-idc">Home &gt; Services &gt; Injection / Drip Care</p>
              <h1>Professional Injection and IV Drip Care at Home</h1>
              <p>
                Safe, sterile, and convenient administration of injections and IV infusions by certified nursing professionals in the comfort of your home.
              </p>
            </div>
            <div className="hero-form-idc card">
              <h3>Schedule an Appointment</h3>
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

      {/* Our Services Section */}
      <section className="our-services-section container section">
        <h2 className="section-title center">Our Services</h2>
        <div className="services-grid-idc">
          <div className="service-item-idc card">
            <h3>Intramuscular (IM) Injections</h3>
            <p>Administering medications deep into the muscles for rapid absorption.</p>
          </div>
          <div className="service-item-idc card">
            <h3>Subcutaneous (SC) Injections</h3>
            <p>Administering medications into the fatty tissue just under the skin.</p>
          </div>
          <div className="service-item-idc card">
            <h3>IV Drip Infusions</h3>
            <p>Administering fluids, medications, or nutrients directly into a vein.</p>
          </div>
          <div className="service-item-idc card">
            <h3>IV Cannulation</h3>
            <p>Expert insertion and management of intravenous cannulas for ongoing treatment.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-idc section full-bleed">
        <div className="container">
          <h2 className="section-title center">Benefits of In-Home Injection & Drip Care</h2>
          <div className="benefits-grid-idc">
            {[              'Avoids travel to a hospital or clinic',              'Reduces risk of exposure to infections',              'Comfort and privacy of your own home',              'Flexible scheduling to suit your needs',
            ].map((benefit) => (
              <div key={benefit} className="benefit-item-idc card">
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
