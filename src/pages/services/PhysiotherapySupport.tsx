const physiotherapyImage = 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop';

export default function PhysiotherapySupport() {
  return (
    <div className="physiotherapy-support-page">
      {/* Hero Section */}
      <section
        className="hero-section-ps"
        style={{ backgroundImage: `url(${physiotherapyImage})` }}
      >
        <div className="hero-overlay-ps">
          <div className="hero-content-ps container">
            <div className="hero-text-ps">
              <p className="breadcrumb-ps">Home &gt; Services &gt; Physiotherapy Support</p>
              <h1>Professional Physiotherapy at Your Home</h1>
              <p>
                Personalized, one-on-one physiotherapy sessions designed to help you regain mobility, manage pain, and improve your quality of life in the comfort of your own home.
              </p>
            </div>
            <div className="hero-form-ps card">
              <h3>Book a Physiotherapy Session</h3>
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

      {/* Our Physiotherapy Services Section */}
      <section className="physio-services-section container section">
        <h2 className="section-title center">Our Physiotherapy Services</h2>
        <div className="services-grid-ps">
          <div className="service-item-ps card">
            <h3>Orthopedic Physiotherapy</h3>
            <p>Rehabilitation for fractures, joint replacements, and musculoskeletal injuries.</p>
          </div>
          <div className="service-item-ps card">
            <h3>Neurological Physiotherapy</h3>
            <p>Care for conditions like stroke, Parkinson's disease, and spinal cord injuries.</p>
          </div>
          <div className="service-item-ps card">
            <h3>Geriatric Physiotherapy</h3>
            <p>Improving mobility, balance, and strength for the elderly to prevent falls.</p>
          </div>
          <div className="service-item-ps card">
            <h3>Post-Operative Physiotherapy</h3>
            <p>Helping you recover and regain function after surgery.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-ps section full-bleed">
        <div className="container">
          <h2 className="section-title center">Benefits of In-Home Physiotherapy</h2>
          <div className="benefits-grid-ps">
            {[              'Personalized one-on-one care',              'Comfort and convenience of your home',              'Reduced travel and waiting time',              'Customized exercise programs',
            ].map((benefit) => (
              <div key={benefit} className="benefit-item-ps card">
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
