import { motion } from 'framer-motion';
import HeroForm from '../components/HeroForm';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedLogo from '../components/AnimatedLogo';

// Define different images for each section
const whyChooseUsImage = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop';
const ctaImage = 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2070&auto=format&fit=crop';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-inner container full-bleed">
          <video autoPlay loop muted className="hero-video">
            <source src="/Patient Caretaker Video.mp4" type="video/mp4" />
          </video>
          <div className="hero-main-content">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1>Compassionate Home Care Services</h1>
              <p className="muted">
                Your trusted partner for professional, personalized, and heartfelt care at home.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <HeroForm />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <AnimatedSection className="section why-choose-us full-bleed">
        <div className="container">
          <h2 className="section-title center">Why Choose Abhiruchi Caretaker?</h2>
          <p className="section-subtitle center">
            Compassion, Trust, and Professionalism at Every Step of Care
          </p>
          <div className="heading-underline"></div>
          <div className="why-grid">
            <div className="why-col">
              <p>
                At Abhiruchi, we are dedicated to delivering personalized healthcare services with warmth and excellence. Our professional caregivers bring hospital-level expertise into the comfort of your home, ensuring every patient receives attention, safety, and respect. Whether it’s elderly care, post-surgery recovery, or long-term medical support — we focus on comfort, dignity, and peace of mind for both patients and their families.
              </p>
            </div>
            <div className="why-image">
              <img src={whyChooseUsImage} alt="A team of dedicated caretakers" />
            </div>
            <div className="why-col">
              <p>
                Our approach is built on compassion, integrity, and trust. We believe that care extends beyond treatment — it’s about human connection. Every caretaker is trained, verified, and supervised by healthcare experts to ensure you experience reliable, safe, and heartfelt care every single day.
              </p>
            </div>
          </div>

          <div className="core-values-grid">
            {[
              { icon: "🩺", title: "Qualified Professionals", desc: "Certified caretakers and nurses trained to handle medical and personal needs." },
              { icon: "🕒", title: "24/7 Availability", desc: "Round-the-clock assistance for peace of mind and immediate support." },
              { icon: "💬", title: "Personalized Care Plans", desc: "Every patient receives a care plan tailored to their condition and comfort." },
              { icon: "❤️", title: "Trusted by Families", desc: "Over 1,000+ families across India rely on us for compassionate, reliable care." },
            ].map((v) => (
              <div key={v.title} className="core-value-card card">
                <div className="core-value-icon">{v.icon}</div>
                <h3 className="core-value-title">{v.title}</h3>
                <p className="core-value-desc muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Real Stories / Testimonials */}
      <AnimatedSection className="section testimonials container">
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
                name: "Abhinav T.",
                city: "Delhi",
                text:
                  "Finding a reliable caretaker for my father was a stressful process until I found Abhiruchi. Their team was professional, compassionate, and incredibly supportive. The care has been exceptional.",
                avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2080&auto=format&fit=crop",
              },
              {
                name: "Rahul B.",
                city: "Mumbai",
                text:
                  "The caregiver assigned to my mother is not just a professional; she's a companion. I have complete peace of mind knowing my mother is in such gentle and capable hands.",
                avatar: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop",
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
      </AnimatedSection>

      {/* Cities We Serve - grid with image and quick service cards */}
      <AnimatedSection className="section cities container">
        <h2 className="section-title center">Cities We Serve</h2>
        <div className="cities-grid">
          <div className="cities-image-container">
            <div className="cities-image card">
              <AnimatedLogo />
            </div>
            <ul className="city-chips">
              {[
                "Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Bangalore",
                "Hyderabad", "Chennai", "Delhi NCR", "Ahmedabad", "Surat", "Indore"
              ].map((city, idx) => (
                <li key={city} className={`city-pill city-pill-${idx % 12}`}>
                  {city}
                </li>
              ))}
            </ul>
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
      </AnimatedSection>

      {/* Safety & Quality */}
      <AnimatedSection className="section safety-quality full-bleed">
        <div class="container">
          <h2 className="section-title center">Your Safety and Quality of Care — Our Topmost Priority</h2>
          <p class="section-subtitle center">Every caregiver at Abhiruchi Caretaker is trained, verified, and dedicated to providing care that you can trust — because your loved ones deserve nothing less than excellence.</p>
          <div className="safety-list">
            {[
              { title: "Thorough Background Verification", desc: "Each caregiver undergoes rigorous ID checks, address verification, and police clearance. We ensure only verified and trustworthy professionals enter your home.", icon: "🕵️" },
              { title: "Medical & Behavioral Training", desc: "Our caregivers receive continuous training in medical assistance, empathy, and patient handling. We emphasize both clinical skills and emotional intelligence for holistic care.", icon: "🎓" },
              { title: "Hygiene & Safety Standards", desc: "From proper hand hygiene to sterilized equipment and clean uniforms — we uphold the highest standards of cleanliness to ensure a safe and infection-free environment.", icon: "🧼" },
            ].map((i) => (
              <div key={i.title} className="safety-item card">
                <div className="safety-icon" aria-hidden>{i.icon}</div>
                <div className="safety-copy">
                  <div className="safety-title">{i.title}</div>
                  <div className="safety-desc muted">{i.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Services */}
      <AnimatedSection className="section services full-bleed">
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
      </AnimatedSection>

      {/* CTA Banner */}
      <AnimatedSection className="section cta-banner full-bleed" aria-label="Contact CTA" style={{
        backgroundImage: `linear-gradient(rgba(15,23,42,0.6), rgba(15,23,42,0.6)), url(${ctaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <div className="cta-box">
            <h2>Have Questions? We're Just a Call Away</h2>
            <p><strong>Office:</strong> No 2, Mayur Niwas, 172 Shrikant LodgeFlat, 169/A, Dr Babasaheb Ambedkar Rd, Dadar TT, Dadar East, Punewadi, Mumbai, Maharashtra 400014</p>
            <p><strong>Call Now:</strong> +91 7276526772</p>
            <p>WhatsApp us for instant chat</p>
            <p className="muted">Or just fill the form above, and our care manager will call you shortly.</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;