import "../../styles/services/HospiceCare.css";

const hospiceCareImage = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop';

export default function HospiceCare() {
  return (
    <div className="hospice-care-page">
      {/* Hero Section */}
      <section
        className="hero-section-hc"
        style={{ backgroundImage: `url(${hospiceCareImage})` }}
      >
        <div className="hero-overlay-hc">
          <div className="hero-content-hc container">
            <div className="hero-text-hc">
              <p className="breadcrumb-hc">Home &gt; Services &gt; Hospice Care</p>
              <h1>Dignified Hospice Care at Home</h1>
              <p>
                Providing compassionate, comfort-focused care for individuals nearing the end of life, supporting both patients and their families with dignity and respect.
              </p>
            </div>
            <div className="hero-form-hc card">
              <h3>Request a Consultation</h3>
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

      {/* Our End-of-Life Care Services Section */}
      <section className="eol-services-section container section">
        <h2 className="section-title center">Our End-of-Life Care Services</h2>
        <div className="services-grid-hc">
          <div className="service-item-hc card">
            <h3>Pain & Symptom Control</h3>
            <p>Expert management of pain and other symptoms to ensure the highest level of comfort.</p>
          </div>
          <div className="service-item-hc card">
            <h3>Emotional & Spiritual Support</h3>
            <p>Compassionate support for patients and their families to navigate the emotional and spiritual challenges of this time.</p>
          </div>
          <div className="service-item-hc card">
            <h3>Personal Care</h3>
            <p>Assistance with all personal care needs to ensure comfort and dignity.</p>
          </div>
          <div className="service-item-hc card">
            <h3>Family & Bereavement Support</h3>
            <p>Providing guidance and support to families throughout the process and during the bereavement period.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-hc section full-bleed">
        <div className="container">
          <h2 className="section-title center">Benefits of In-Home Hospice Care</h2>
          <div className="benefits-grid-hc">
            {[              'Comfort and familiarity of home',              'Enables quality time with loved ones',              'Respect for patient wishes and dignity',              'Comprehensive support for the entire family',
            ].map((benefit) => (
              <div key={benefit} className="benefit-item-hc card">
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
