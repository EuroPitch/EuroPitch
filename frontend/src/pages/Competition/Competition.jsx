import React from 'react';

export default function Competition() {
  return (
    <div className="page container">
      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <h1>The Competition</h1>
        <p className="lead">
          A pan-European finance competition bringing together the brightest minds 
          from universities across the continent to compete in portfolio management and stock analysis.
        </p>
      </section>

      {/* How It Works Section */}
      <section style={{ marginTop: '3rem' }}>
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
              Top teams convene in London for a one-day conference: present your approach, 
              defend decisions in Q&A sessions, and network with sponsors and industry judges.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2>Where We Meet</h2>
        <div className="card" style={{ maxWidth: '700px', margin: '1.5rem auto', padding: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>📍 London (2026)</h3>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.7' }}>
            The grand final takes place in London this year. In future editions, 
            the winning team's country will host the competition—giving you the chance 
            to bring EuroPitch home!
          </p>
        </div>
      </section>

      {/* Leadership Summit Callout */}
      <section style={{ marginTop: '3rem' }}>
        <div className="card" style={{ 
          background: 'linear-gradient(135deg, rgba(46, 140, 255, 0.15), rgba(46, 140, 255, 0.05))',
          border: '1px solid rgba(46, 140, 255, 0.3)',
          padding: '2rem'
        }}>
          <h3 style={{ marginTop: 0 }}>🎯 Society Executive Summit</h3>
          <p style={{ color: 'var(--text)', marginBottom: '0' }}>
            <strong>Calling all Society Executives:</strong> We're hosting a leadership summit 
            alongside the main competition to facilitate discussions among societies across Europe. 
            Build partnerships, share best practices, and strengthen ties with fellow finance 
            societies for future collaborations.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ marginTop: '4rem', textAlign: 'center', paddingBottom: '2rem' }}>
        <h2>Ready to Compete?</h2>
        <p className="lead" style={{ marginBottom: '2rem' }}>
          Societies and universities: get in touch to secure your spot in this year's competition.
        </p>
        <div className="cta-row">
          <a href="/contact" className="btn primary">Contact Us to Register</a>
          <a href="/about" className="btn ghost">Learn More About EuroPitch</a>
        </div>
      </section>
    </div>
  );
}