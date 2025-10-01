import "../../styles/PostSurgery.css";

// A more specific image for post-surgery recovery care
const postSurgeryImage = 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop';

export default function PostSurgeryRecoveryCare() {
  return (
    <div className="post-surgery-page">
      {/* Hero Section */}
      <section
        className="hero-section-surgery"
        style={{ backgroundImage: `url(${postSurgeryImage})` }}
      >
        <div className="hero-overlay-surgery">
          <div className="hero-content-surgery container">
            <div className="hero-text">
              <p className="breadcrumb-surgery">Home &gt; Post Operative Care</p>
              <h1>Nursing Care after surgery</h1>
              <p>
                Post-Operative Care is the specialized care provided to a
                patient who has recently undergone a surgery.
              </p>
              <div className="reviews-surgery">
                <span>4.9 ⭐⭐⭐⭐⭐ (7,500 Google Reviews)</span>
              </div>
              <div className="badges-surgery">
                <div className="badge-surgery">Multidisciplinary team</div>
                <div className="badge-surgery">25K+ Successful Recoveries</div>
                <div className="badge-surgery">NABH & QAI Accreditation</div>
              </div>
            </div>
            <div className="hero-form-surgery card">
              <h3>Book an online consult with our expert</h3>
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
                <p className="form-terms-surgery">
                  By submitting the form, you agree to Abhiruchi's T&C.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Key Components Section */}
      <section className="key-components-section container section">
        <div className="key-components-content">
            <h2>Key Components of Post-Operative Nursing Care</h2>
            <p>
            Dedicated nursing care is essential for individuals who have
            recently navigated surgical procedures. This specialized attention
            ensures they retain their health and strength, preparing them to
            seamlessly transition back to their daily routines.
            </p>
        </div>
        <div className="key-components-grid">
          {[            'Pain Management', 'Physiotherapy', 'Infection Control',            'Psychology and Emotional Wellbeing', 'Nutrition and Swallow Therapy',            'Wound/Incision Care', 'Balance and Mobility',            'Bed mobility and Transfers training', 'Wheelchair Mobility',          ].map((item) => (
            <div key={item} className="component-card-surgery card">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-surgery section">
          <div className="benefits-grid-surgery container">
            {[              { text: 'Early Mobility & Strength Training' },              { text: 'Continuous monitoring' },              { text: 'Family Support & Inclusion' },              { text: 'Prevent complications' },              { text: 'Improved overall quality of life' },              { text: 'Customer rating of 4.9/5' },            ].map((benefit) => (
                <div key={benefit.text} className="benefit-item-surgery">
                    <span>{benefit.text}</span>
                </div>
            ))}
          </div>
      </section>

      {/* Primary Steps Section */}
      <section className="primary-steps-section container section">
        <h2>Primary Steps of Recovery from Operative Surgery</h2>
        <p>
          Consistent, high-quality post-operative care is paramount to ensure a
          patient's complete recuperation from surgical interventions,
          minimizing potential complications and maximizing recovery speed.
        </p>
        <div className="steps-accordion-surgery">
          {[            'Base Assessment & Risk Profiling', 'Goal Setting',            'Multidisciplinary Coordination', 'Risk Factor Management',          ].map((step, index) => (
            <details key={step} className="step-item-surgery">
              <summary>
                <span>{index + 1}</span>
                {step}
              </summary>
              <div className="step-content-surgery">
                <p>
                  {step === 'Base Assessment & Risk Profiling' &&
                    "Our care begins with a thorough evaluation of the patient's post-surgical condition, medical history, and home environment. We identify potential risks such as infection, mobility challenges, or medication side-effects to create a proactive and safe recovery plan from day one."}
                  {step === 'Goal Setting' &&
                    'In collaboration with the patient, their family, and their surgeon, we establish clear, achievable recovery goals. This includes milestones for pain management, mobility, and returning to daily activities, ensuring everyone is aligned on the path to recovery.'}
                  {step === 'Multidisciplinary Coordination' &&
                    'We act as the central point of communication between your surgeon, physician, physical therapist, and other healthcare providers. This ensures a seamless, integrated care experience where all aspects of your recovery are managed cohesively.'}
                  {step === 'Risk Factor Management' &&
                    'Throughout the recovery process, we continuously monitor for and manage risk factors. This includes diligent wound care to prevent infection, medication management to avoid adverse effects, and guided mobility to reduce the risk of falls.'}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
