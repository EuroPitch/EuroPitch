import { Link } from "react-router-dom";
import { FaUsers, FaTrophy, FaHandshake, FaChartLine, FaGlobe } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import PdfEmbed from "../../components/PdfEmbed";

export default function Societies() {
  return (
    <div className="page container pitch-page">
      {/* Hero */}
      <section className="comp-hero">
        <h1>For Societies</h1>
        <p className="lead">
          Give your members an unparalleled competitive experience — from campus heats
          to a pan‑European trading finals and an in‑person conference in London.
        </p>
      </section>

      {/* Why Join */}
      <section className="comp-section">
        <h2>Why Register Your Society?</h2>
        <div className="features">
          <div className="card">
            <h3><FaTrophy className="card-icon" /> Real Competition</h3>
            <p>
              Your team trades against the best finance societies across Europe on a live
              simulated platform — building genuine portfolio management skills, not just theory.
            </p>
          </div>
          <div className="card">
            <h3><HiAcademicCap className="card-icon" /> Develop Both Sides</h3>
            <p>
              EuroPitch combines <strong>buy‑side</strong> stock pitching with <strong>sell‑side</strong>
              portfolio trading, giving members experience across the full spectrum of finance.
            </p>
          </div>
          <div className="card">
            <h3><FaGlobe className="card-icon" /> Pan‑European Network</h3>
            <p>
              Connect with societies from England, Ireland, France, Germany, Spain, Monaco
              and beyond — building relationships that last well after graduation.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works for Societies */}
      <section className="comp-section">
        <h2>How It Works for Your Society</h2>
        <div className="pitch-steps">
          <div className="pitch-step">
            <span className="step-number">1</span>
            <div>
              <h4>Register</h4>
              <p>Sign your society up via our registration form. It's free to enter.</p>
            </div>
          </div>
          <div className="pitch-step">
            <span className="step-number">2</span>
            <div>
              <h4>Run Campus Heats</h4>
              <p>
                Host an internal selection event (we recommend a stock pitch competition)
                to pick your strongest team of 3–5 members.
              </p>
            </div>
          </div>
          <div className="pitch-step">
            <span className="step-number">3</span>
            <div>
              <h4>Online Trading Finals</h4>
              <p>
                Your team receives simulated capital and trades over 6–8 weeks on our
                designated platform with transparent rules and live leaderboards.
              </p>
            </div>
          </div>
          <div className="pitch-step">
            <span className="step-number">4</span>
            <div>
              <h4>Conference in London</h4>
              <p>
                Top teams present their strategy to a panel of industry judges,
                network with sponsors, and attend the Society Executive Summit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="comp-section">
        <h2>What Your Society Gets</h2>
        <div className="pitch-highlights">
          <div className="pitch-highlight">
            <FaChartLine className="highlight-icon" />
            <div>
              <h4>Live Trading Experience</h4>
              <p>Hands‑on portfolio management on a professional‑grade simulated platform.</p>
            </div>
          </div>
          <div className="pitch-highlight">
            <FaHandshake className="highlight-icon" />
            <div>
              <h4>Executive Summit</h4>
              <p>
                Society leaders attend a dedicated summit to share best practices and
                build partnerships across European finance societies.
              </p>
            </div>
          </div>
          <div className="pitch-highlight">
            <FaUsers className="highlight-icon" />
            <div>
              <h4>Brand & Recruitment</h4>
              <p>
                Feature your society on our website, build prestige, and attract top
                talent to your committee by participating in a recognised European competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded PDF */}
      <section className="comp-section">
        <h2>Full Society Deck</h2>
        <p>Read or download our full information pack below.</p>
        <div className="pitch-pdf-wrapper">
          <PdfEmbed src="/docs/EuroPitch Societies.pdf" title="EuroPitch Societies Deck" />
        </div>
      </section>

      {/* CTA */}
      <section className="comp-section center comp-cta">
        <h2>Ready to Enter?</h2>
        <p className="lead">
          Registration is free. Secure your society's spot in this year's competition.
        </p>
        <div className="cta-row">
          <a
            href="https://forms.gle/DDvVPmCQdQvLEg6y6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Register Your Society
          </a>
          <Link to="/competition" className="btn ghost">Competition Details</Link>
        </div>
      </section>
    </div>
  );
}
