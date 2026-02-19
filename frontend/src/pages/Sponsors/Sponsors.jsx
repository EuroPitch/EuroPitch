import { Link } from "react-router-dom";
import { FaBullhorn, FaUserTie, FaAward, FaStar, FaRocket, FaCrown } from "react-icons/fa";
import { HiEye } from "react-icons/hi2";
import PdfEmbed from "../../components/PdfEmbed";

export default function Sponsors() {
  return (
    <div className="page container pitch-page">
      {/* Hero */}
      <section className="comp-hero">
        <h1>For Sponsors</h1>
        <p className="lead">
          Partner with EuroPitch to connect your brand with the next generation of
          European finance talent — from ambitious students at top universities across the continent.
        </p>
      </section>

      {/* Why Sponsor */}
      <section className="comp-section">
        <h2>Why Sponsor EuroPitch?</h2>
        <div className="features">
          <div className="card">
            <h3><HiEye className="card-icon" /> Direct Access to Talent</h3>
            <p>
              Reach driven finance students from 15+ universities across Europe — the
              exact pipeline you want for graduate and internship recruitment.
            </p>
          </div>
          <div className="card">
            <h3><FaBullhorn className="card-icon" /> Brand Visibility</h3>
            <p>
              Your logo on our website, socials, slide decks, and at the London conference —
              seen by hundreds of engaged students and society executives.
            </p>
          </div>
          <div className="card">
            <h3><FaUserTie className="card-icon" /> In‑Person Presence</h3>
            <p>
              Sponsor a judging panel, host a networking session, or deliver a keynote
              at the Grand Final conference in London.
            </p>
          </div>
        </div>
      </section>

      {/* What Sponsors Get */}
      <section className="comp-section">
        <h2>What You Get</h2>
        <div className="pitch-highlights">
          <div className="pitch-highlight">
            <FaAward className="highlight-icon" />
            <div>
              <h4>Conference Branding</h4>
              <p>Logo placement at the Grand Final, on name badges, banners, and event materials.</p>
            </div>
          </div>
          <div className="pitch-highlight">
            <FaBullhorn className="highlight-icon" />
            <div>
              <h4>Digital Exposure</h4>
              <p>Featured on europitch.eu, our LinkedIn, and in all communications to participating societies.</p>
            </div>
          </div>
          <div className="pitch-highlight">
            <FaUserTie className="highlight-icon" />
            <div>
              <h4>Talent Pipeline</h4>
              <p>Access to CVs and direct networking with the top-performing student teams across Europe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="comp-section">
        <h2>Partnership Tiers</h2>
        <p>We offer flexible sponsorship packages to match your objectives and budget.</p>
        <div className="tier-grid">
          <div className="tier-card tier-silver">
            <FaStar className="tier-icon" />
            <h3>Silver</h3>
            <p>Logo on website & socials. Mentioned in participant communications.</p>
          </div>
          <div className="tier-card tier-gold">
            <FaRocket className="tier-icon" />
            <h3>Gold</h3>
            <p>Everything in Silver, plus conference branding and a networking session at the Grand Final.</p>
          </div>
          <div className="tier-card tier-platinum">
            <FaCrown className="tier-icon" />
            <h3>Platinum</h3>
            <p>Everything in Gold, plus headline sponsorship, a keynote slot, and full access to the talent pipeline.</p>
          </div>
        </div>
      </section>

      {/* Embedded PDF */}
      <section className="comp-section">
        <h2>Full Sponsor Deck</h2>
        <p>Read or download our complete sponsorship pack below.</p>
        <div className="pitch-pdf-wrapper">
          <PdfEmbed src="/docs/EuroPitch Sponsors.pdf" title="EuroPitch Sponsors Deck" />
        </div>
      </section>

      {/* CTA */}
      <section className="comp-section center comp-cta">
        <h2>Become a Partner</h2>
        <p className="lead">
          Interested in sponsoring? Get in touch and we'll tailor a package for you.
        </p>
        <div className="cta-row">
          <a href="mailto:europitch.team@gmail.com" className="btn primary">
            Get in Touch
          </a>
          <Link to="/about" className="btn ghost">Learn More About Us</Link>
        </div>
      </section>
    </div>
  );
}
