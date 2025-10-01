import caretakerImage from "../components/CaretakerImage.jpg";

// Define different images for each section
const whyChooseUsImage = 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop';
const citiesImage2 = 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?q=80&w=2070&auto=format&fit=crop';
const ctaImage = 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div
          className="hero-inner container full-bleed"
          style={{
            backgroundImage: `url(${caretakerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="hero-content">
            <h1>Compassionate Home Care Services</h1>
            <p className="muted">
              Your trusted partner for professional, personalized, and heartfelt care at home.
            </p>
          </div>
          <aside className="hero-card card hero-card-right" style={{ padding: 20 }}>
            <h2>Fill the Assessment</h2>
            <div className="form-field">
              <label>NAME</label>
              <input placeholder="Enter Full Name" />
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ flex: 1 }} className="form-field">
                <label>MOBILE NUMBER</label>
                <input placeholder="Mobile Number" />
              </div>
              <div style={{ flex: 1 }} className="form-field">
                <label>LOCATION</label>
                <select>
                  <option>Select Location</option>
                </select>
              </div>
            </div>
            <div className="form-field">
              <label>CAREGIVER PLAN</label>
              <select>
                <option>Select Caregiver Plan</option>
              </select>
            </div>
            <div className="form-field">
              <label>PATIENT CONDITION</label>
              <input type="text" placeholder="Enter condition" />
            </div>
            <div style={{ marginTop: 8 }}>
              <button className="btn btn-primary" style={{ width: "100%" }}>
                Get Assistance
              </button>
            </div>
          </aside>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="section why container">
        <h2 className="section-title center">Why Choose Us?</h2>
        <div className="why-grid">
          <div className="why-col">
            <p>
              At Abhiruchi, we are committed to providing exceptional healthcare services with the utmost professionalism and empathy. We bring convenience, comfort, and peace of mind to your home, ensuring your loved ones receive the best possible care.
            </p>
            <a className="btn btn-outline" href="#">Read more</a>
          </div>
          <div className="why-image">
            <img src={whyChooseUsImage} alt="A team of dedicated caretakers" />
          </div>
          <div className="why-col">
            <p>
              Our approach is rooted in compassion, respect, and integrity. We strive to build trusting relationships with our clients and their families, ensuring they feel supported, empowered, and valued every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Real Stories / Testimonials */}
      <section className="section testimonials container">
        <div className="testimonials-wrap">
          <div className="testimonials-heading">
            <h2>
              <span>REAL</span>
              <span>STORIES</span>
              <span>FROM REAL</span>
              <span>FAMILIES</span>
            </h2>
          </div>
          <div className="testimonials-cards">
            {[
              {
                name: "Poonam T.",
                city: "Delhi",
                text:
                  "Finding a reliable caretaker for my father was a stressful process until I found Abhiruchi. Their team was professional, compassionate, and incredibly supportive. The care has been exceptional.",
                avatar: "https://i.pravatar.cc/80?img=47",
              },
              {
                name: "Rahul B.",
                city: "Mumbai",
                text:
                  "The caregiver assigned to my mother is not just a professional; she's a companion. I have complete peace of mind knowing my mother is in such gentle and capable hands.",
                avatar: "https://i.pravatar.cc/80?img=12",
              },
            ].map((t) => (
              <article key={t.name} className="testimonial-card card">
                <div className="tc-avatar">
                  <img src={t.avatar} alt={t.name} />
                </div>
                <div className="tc-body">
                  <p className="tc-text">{t.text}</p>
                  <div className="tc-author">
                    <strong>{t.name}</strong>
                    <span className="tc-city">{t.city}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cities We Serve - grid with image and quick service cards */}
      <section className="section cities container">
        <h2 className="section-title center">Cities We Serve</h2>
        <div className="cities-grid">
          <div className="cities-image-container">
            <div className="cities-image card">
              <img src={citiesImage2} alt="Vibrant cityscape reflecting our reach" />
              <ul className="city-chips">
                {[
                  "Delhi NCR",
                  "Mumbai",
                  "Bangalore",
                  "Hyderabad",
                  "Chennai",
                ].map((c) => (
                  <li key={c} className="pill">{c}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="cities-cards">
            {[
              { title: "Day Shift", sub: "8 AM – 8 PM", desc: "Daily hygiene & companionship", icon: "🌅" },
              { title: "Night Shift", sub: "8 PM – 8 AM", desc: "Overnight monitoring", icon: "🌙" },
              { title: "24x7 Stay", sub: "Full‑time", desc: "Elderly with critical needs", icon: "⏰" },
              { title: "Weekend Only", sub: "Custom", desc: "Support for working families", icon: "🗓️" },
            ].map((c) => (
              <div key={c.title} className="city-card card">
                <div className="city-icon" aria-hidden>{c.icon}</div>
                <div>
                  <div className="city-title">{c.title}</div>
                  <div className="city-sub">{c.sub}</div>
                  <div className="city-desc muted">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Quality */}
      <section className="section safety container">
        <h2 className="section-title center">Your Safety and Quality of Care is Our Priority</h2>
        <div className="safety-list">
          {[
            { title: "Thorough Background Verification", desc: "All staff undergo strict ID checks, address verification, and police verification before joining.", icon: "🔍" },
            { title: "Medical & Behavioral Training", desc: "Regular skill enhancement programs to ensure professional, empathetic, and safe care for patients.", icon: "🎓" },
            { title: "Hygiene", desc: "Proper hand hygiene, clean uniforms, and sterilized equipment to maintain safety.", icon: "🧼" },
          ].map((i) => (
            <div key={i.title} className="safety-item">
              <div className="safety-icon" aria-hidden>{i.icon}</div>
              <div className="safety-copy">
                <div className="safety-title">{i.title}</div>
                <div className="safety-desc muted">{i.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="section services full-bleed">
        <div className="container">
          <h2 className="section-title center">Our Services</h2>
          <div className="services-grid">
            {[
              { title: "Hygiene Care", desc: "Bathing, dressing, grooming & personal cleanliness", icon: "🛁" },
              { title: "Meal Assistance", desc: "Feeding and ensuring dietary needs are met", icon: "🍽️" },
              { title: "Medication Support", desc: "Reminders and basic help with meds (non‑clinical)", icon: "💊" },
              { title: "Mobility Help", desc: "Walking, wheelchair transfers, and movement aid", icon: "🚶" },
              { title: "Companionship", desc: "Emotional support, conversations, reading, TV", icon: "👥" },
              { title: "Health Monitoring", desc: "Vitals check (for trained nursing staff only)", icon: "📈" },
            ].map((s) => (
              <div key={s.title} className="service-card card">
                <div className="service-icon" aria-hidden>{s.icon}</div>
                <div className="service-body">
                  <div className="service-title">{s.title}</div>
                  <div className="service-desc muted">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section cta-banner full-bleed" aria-label="Contact CTA" style={{
        backgroundImage: `linear-gradient(rgba(15,23,42,0.6), rgba(15,23,42,0.6)), url(${ctaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <div className="cta-box">
            <h2>Have Questions? We're Just a Call Away</h2>
            <p><strong>Office:</strong> 141, JMD Galleria, Sector 48, Sohna Road, Gurugram, Haryana 122001.</p>
            <p><strong>Call Now:</strong> +91-7666426664</p>
            <p>WhatsApp us for instant chat</p>
            <p className="muted">Or just fill the form above, and our care manager will call you shortly.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
