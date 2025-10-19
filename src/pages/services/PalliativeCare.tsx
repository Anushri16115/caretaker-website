import "../../styles/services/PalliativeCare.css";

const palliativeCareImage = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop';

export default function PalliativeCare() {
  return (
    <div className="palliative-care-page">
      {/* Hero Section */}
      <section
        className="hero-section-pc"
        style={{ backgroundImage: `url(${palliativeCareImage})` }}
      >
        <div className="hero-overlay-pc">
          <div className="hero-content-pc container">
            <div className="hero-text-pc">
              <p className="breadcrumb-pc">Home &gt; Services &gt; Palliative Care</p>
              <h1>Compassionate Palliative Care at Home</h1>
              <p>
                Focused on providing relief from the symptoms and stress of a serious illness, our goal is to improve quality of life for both the patient and the family.
              </p>
            </div>
            <div className="hero-form-pc card">
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

      {/* Our Supportive Services Section */}
      <section className="supportive-services-section container section">
        <h2 className="section-title center">Our Supportive Services</h2>
        <div className="services-grid-pc">
          <div className="service-item-pc card">
            <h3>Pain & Symptom Management</h3>
            <p>Expert medical care to manage pain, shortness of breath, fatigue, and other distressing symptoms.</p>
          </div>
          <div className="service-item-pc card">
            <h3>Emotional & Spiritual Support</h3>
            <p>Compassionate support for patients and families to cope with the emotional challenges of a serious illness.</p>
          </div>
          <div className="service-item-pc card">
            <h3>Coordination of Care</h3>
            <p>Working closely with your doctors to ensure a seamless and coordinated care experience.</p>
          </div>
          <div className="service-item-pc card">
            <h3>Family & Caregiver Support</h3>
            <p>Providing guidance and support to family members and caregivers, helping them navigate the complexities of care.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-pc section full-bleed">
        <div className="container">
          <h2 className="section-title center">Benefits of In-Home Palliative Care</h2>
          <div className="benefits-grid-pc">
            {[              'Improved quality of life',              'Enhanced comfort and dignity',              'Reduced stress for patients and families',              'Personalized and holistic care',
            ].map((benefit) => (
              <div key={benefit} className="benefit-item-pc card">
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
