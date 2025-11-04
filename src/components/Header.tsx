// React import not required with React 17+ automatic JSX runtime
import { useState } from "react";

type MenuItem = string | { label: string; href: string };


const ServiceBased: MenuItem[] = [
  { label: "Post-Surgery Recovery Care", href: "/services/post-surgery-recovery-care" },
  { label: "Post-Delivery Care (Mother + Newborn)", href: "/services/post-delivery-care-mother-newborn" },
  { label: "Day Care (8–12 hours)", href: "/services/day-care" },
  { label: "Night Care (Overnight Supervision)", href: "/services/night-care" },
  { label: "24×7 Care (Round-the-clock support)", href: "/services/care-24x7" },
  { label: "Home ICU / Ventilator Support", href: "/services/home-icu-ventilator-support" },
  { label: "Physiotherapy Support", href: "/services/physiotherapy-support" },
  { label: "Injection / Drip Care", href: "/services/injection-drip-care" },
  { label: "Palliative Care (Pain Relief / Supportive Care)", href: "/services/palliative-care" },
  { label: "Hospice Care", href: "/services/hospice-care" },
];

function MenuGroup({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <details className="nav-item" role="list">
      <summary className="nav-summary">{title}</summary>
      <div className="dropdown">
        <ul>
          {items.map((it) => {
            const label = typeof it === "string" ? it : it.label;
            const href = typeof it === "string" ? "#" : it.href;
            return (
              <li key={label}>
                <a href={href} aria-label={label}>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </details>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <header className="app-header">
        {/* Top contact bar */}
        <div className="topbar">
          <div className="container topbar-inner">
            <div className="topbar-left">
              <a href="tel:+917276526772" className="topbar-link">+91 7276526772</a>
              <span className="topbar-sep">|</span>
              <a href="mailto:support@caretakernearme.in" className="topbar-link">support@caretakernearme.in</a>
            </div>
            <div className="topbar-right">
              <span className="follow-label">Follow Us :-</span>
              <div className="socials">
                <a aria-label="Facebook" href="#">f</a>
                <a aria-label="Instagram" href="#">ig</a>
                <a aria-label="YouTube" href="#">yt</a>
                <a aria-label="Twitter" href="#">x</a>
                <a aria-label="LinkedIn" href="#">in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation bar */}
        <div className="container header-inner">
          {/* Logo left */}
          <div className="logo-wrap">
            <a href="/" className="brand" aria-label="Abhiruchi Caretaker">
              <span className="logo-mark" aria-hidden="true">AC</span>
              <span className="brand-text">Abhiruchi Caretaker</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Centered nav */}
          <nav className="main-nav centered" aria-label="Primary">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <MenuGroup title="Services +" items={ServiceBased} />
            <a href="/blog">Blog</a>
            <a href="/physiotherapy">Physiotherapy</a>
            <a href="/caretaker">Caretaker</a>
            <a href="/login">Login</a>
          </nav>

          {/* CTA right */}
          <div className="header-cta">
            {/* CTA buttons can be added here if needed in the future */}
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <nav
        id="mobile-nav"
        className={`mobile-nav ${mobileOpen ? "open" : ""}`}
        aria-label="Mobile Primary"
      >
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <details className="nav-item">
          <summary className="nav-summary">Services +</summary>
          <div className="dropdown">
            <ul>
              {ServiceBased.map((it) => {
                const label = typeof it === "string" ? it : it.label;
                const href = typeof it === "string" ? "#" : it.href;
                return (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </details>
        <a href="/blog">Blog</a>
        <a href="/physiotherapy">Physiotherapy</a>
        <a href="/caretaker">Caretaker</a>
        <a href="/login">Login</a>
      </nav>
    </>
  );
}
