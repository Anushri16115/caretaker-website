export default function PostDeliveryCareMotherNewborn() {
  return (
    <div className="post-delivery-care-page">
      {/* Hero Section */}
      <section
        className="hero-section-pdc"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format=fit=crop')` }}
      >
        <div className="hero-overlay-pdc">
          <div className="hero-content-pdc container">
            <div className="hero-text-pdc">
              <p className="breadcrumb-pdc">Home &gt; Services &gt; Post-Delivery Care</p>
              <h1>Post-Delivery Care for Mother & Newborn</h1>
              <p>
                Compassionate and professional support during the beautiful journey of motherhood, ensuring the well-being of both mother and baby.
              </p>
            </div>
            <div className="hero-form-pdc card">
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

      {/* What We Offer Section */}
      <section className="we-offer-section container section">
        <h2 className="section-title center">What We Offer</h2>
        <div className="offer-grid-pdc">
          <div className="offer-card-pdc card">
            <h3>For the Mother</h3>
            <ul>
              <li>Post-operative wound care (if applicable)</li>
              <li>Personal hygiene and comfort</li>
              <li>Lactation and breastfeeding support</li>
              <li>Nutritional guidance and meal preparation</li>
              <li>Emotional support and companionship</li>
            </ul>
          </div>
          <div className="offer-card-pdc card">
            <h3>For the Newborn</h3>
            <ul>
              <li>Bathing, diapering, and skincare</li>
              <li>Feeding and burping assistance</li>
              <li>Sleep routine management</li>
              <li>Monitoring of vitals and growth milestones</li>
              <li>Gentle baby massage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-pdc section full-bleed">
        <div className="container">
          <h2 className="section-title center">Benefits of Our Care</h2>
          <div className="benefits-grid-pdc">
            {[              'Peace of mind for new parents',              'Faster recovery for the mother',              'Healthy development for the newborn',              'Reduced stress and anxiety',              'Professional guidance at every step',
            ].map((benefit) => (
              <div key={benefit} className="benefit-item-pdc card">
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
