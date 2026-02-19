import React from 'react';

export default function Competition() {
  return (
    <div className="page container">
      {/* Hero Section */}
      <section className="comp-hero">
        <h1>The Competition</h1>
        <p className="lead">
          A pan-European finance competition bringing together the brightest minds 
          from universities across the continent to compete in portfolio management and stock analysis.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="comp-section">
        <h2>How It Works</h2>
        <div className="features">
          <div className="card">
            <h3>1. University Selection</h3>
            <p>
              Each participating university/society runs a qualifying exercise (we recommend 
              a stock pitch competition) to select one team. Use any standard format 
              (e.g. 10–12 minute pitch + Q&A).
            </p>
          </div>
          
          <div className="card">
            <h3>2. Portfolio Trading</h3>
            <p>
              Finalist teams are given simulated capital to construct a portfolio 
              and trade on our designated platform. Showcase your investment strategy 
              and market analysis skills.
            </p>
          </div>
          
          <div className="card">
            <h3>3. Grand Final</h3>
            <p>
              Top teams convene in England (TBD) for a one-day conference: present your approach, 
              defend decisions in Q&A sessions, and network with sponsors and industry judges.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="comp-section center">
        <h2>Where We Meet</h2>
        <div className="card comp-location-card">
          <h3>📍 England (2026)</h3>
          <p>
            The grand final takes place in England (Location TBD) this year. In future editions, 
            the winning team's country will host the competition—giving you the chance 
            to bring EuroPitch home!
          </p>
        </div>
      </section>

      {/* Leadership Summit Callout */}
      <section className="comp-section">
        <div className="comp-summit-callout">
          <h3>🎯 Society Executive Summit</h3>
          <p>
            <strong>Calling all Society Executives:</strong> We're hosting a leadership summit 
            alongside the main competition to facilitate discussions among societies across Europe. 
            Build partnerships, share best practices, and strengthen ties with fellow finance 
            societies for future collaborations.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="comp-section center comp-cta">
        <h2>Ready to Compete?</h2>
        <p className="lead">
          Societies and universities: get in touch to secure your spot in this year's competition.
        </p>
        <div className="cta-row">
          <a
            href="https://forms.gle/DDvVPmCQdQvLEg6y6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Register Your Society Here!
          </a>
          <a href="/about" className="btn ghost">Learn More About EuroPitch</a>
        </div>
      </section>
    </div>
  );
}