import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedLogo from '../components/AnimatedLogo';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import healthMonitoring from '../assets/doctor-checkup/eldery_treatment_03.jpg';
import medicationSupport from '../assets/doctor-nurse/doctor_consultation_03.jpg';
import companionship from '../assets/flat-nurse-helping-patient/2325578.jpg';
import hygieneCare from '../assets/self-care-concept-with-man-activities/3794815.jpg';
import mobilityHelp from '../assets/flat-nurse-helping-patient/2325578.jpg'; // Using a duplicate for now

// Define different images for each section
const whyChooseUsImage = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop';
const ctaImage = 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2070&auto=format&fit=crop';

const Home = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 5,
      spacing: 15,
      origin: 'center',
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 4, spacing: 10 },
      },
      '(max-width: 768px)': {
        slides: { perView: 3, spacing: 10 },
      },
      '(max-width: 600px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(max-width: 480px)': {
        slides: { perView: 1.2, spacing: 16, origin: 'center' },
      },
    },
  });
  return (
    <div>
      <HeroSection />

      {/* Our Services */}
      <AnimatedSection className="section services">
        <div className="container">
          <h2 className="section-title center">Our Services</h2>
          <div ref={sliderRef} className="keen-slider">
            {[
              { title: "Health Monitoring", img: healthMonitoring },
              { title: "Medication Support", img: medicationSupport },
              { title: "Companionship", img: companionship },
              { title: "Hygiene Care", img: hygieneCare },
              
              { title: "Mobility Help", img: mobilityHelp },
            ].map((s) => (
              <div key={s.title} className="keen-slider__slide service-card-vertical card">
                <img src={s.img} alt={s.title} className="service-card-img" />
                <h3 className="service-card-title">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="section why-choose-us">
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
      <AnimatedSection className="section safety-quality">
          <div className="container">
          <h2 className="section-title center">Your Safety and Quality of Care — Our Topmost Priority</h2>
          <p className="section-subtitle center">Every caregiver at Abhiruchi Caretaker is trained, verified, and dedicated to providing care that you can trust — because your loved ones deserve nothing less than excellence.</p>
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

      {/* CTA Banner */}
      <AnimatedSection className="section cta-banner" aria-label="Contact CTA" style={{
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