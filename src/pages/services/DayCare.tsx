const dayCareImage = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop';

export default function DayCare() {
  return (
    <div className="day-care-page">
      {/* Hero Section */}
      <section
        className="hero-section-dc"
        style={{ backgroundImage: `url(${dayCareImage})` }}
      >
        <div className="hero-overlay-dc">
          <div className="hero-content-dc container">
            <div className="hero-text-dc">
              <p className="breadcrumb-dc">Home &gt; Services &gt; Day Care</p>
              <h1>Day Care (8–12 Hours)</h1>
              <p>
                Reliable and compassionate daytime support, ensuring your loved ones are safe, engaged, and comfortable while you manage your daily responsibilities.
              </p>
            </div>
            <div className="hero-form-dc card">
              <h3>Schedule a Consultation</h3>
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
        <h2 className="section-title center">Services Included in Day Care</h2>
        <div className="services-grid-dc">
          <div className="service-item-dc card">
            <h3>Personal Assistance</h3>
            <p>Help with daily activities such as mobility, personal hygiene, and getting dressed.</p>
          </div>
          <div className="service-item-dc card">
            <h3>Meal Preparation</h3>
            <p>Nutritious meal planning and preparation according to dietary needs and preferences.</p>
          </div>
          <div className="service-item-dc card">
            <h3>Medication Management</h3>
            <p>Timely reminders and assistance with medication to ensure adherence to prescriptions.</p>
          </div>
          <div className="service-item-dc card">
            <h3>Companionship</h3>
            <p>Engaging in conversations, hobbies, and activities to provide mental and emotional stimulation.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-dc section full-bleed">
        <div className="container">
          <h2 className="section-title center">Benefits of Our Day Care</h2>
          <div className="benefits-grid-dc">
            {[              'Peace of mind for family members',              'Safe and supervised environment',              'Enhanced quality of life for your loved one',              'Flexible and reliable scheduling',
            ].map((benefit) => (
              <div key={benefit} className="benefit-item-dc card">
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
