import { Link } from "react-router-dom";
import "./Landing.css"

const Landing = () => {
    return (
        <section className="hero">
            {/* Hero section */}
            <div className="container">
                <h1>EuroPitch</h1>
                <p className="lead">
                    A Pan‑European investment competition: pitch locally, trade online in the finals,
                    then present your strategy in London to industry judges.
                </p>
                <div className="cta-row">
                    <Link className="btn primary" to="/competition">How it works</Link>
                    <Link className="btn ghost" to="/about">About</Link>
                </div>
            </div>

            {/* Features section */}
            <div className="features container">
                <div className="card">
                    <h3>Campus Heats</h3>
                    <p>Run an internal selection exercise at your society to select your team.</p>
                </div>
                <div className="card">
                    <h3>Online Finals</h3>
                    <p>Trade on a live platform over 6–8 weeks with transparent rules.</p>
                </div>
                <div className="card">
                    <h3>Conference</h3>
                    <p>Present in person to a panel in London and network across Europe.</p>
                </div>
            </div>

            {/* Registered teams section */}
            <div className="registered container">
                <h2>Registered teams</h2>
                <p className="muted">
                    Teams from universities across Europe have already registered.
                </p>

                <div className="country-group">
                    <h3 className="country-header">
                        <span className="team-flag flag-england"></span>
                        England
                    </h3>
                    <ul className="team-list">
                        <li className="team-row">
                            <span className="team-name">University of Birmingham Finance Society</span>
                        </li>

                        <li className="team-row">
                            <span className="team-name">Marshall Finance Group</span>
                        </li>

                        <li className="team-row">
                            <span className="team-name">Coming Soon...</span>
                        </li>
                    </ul>
                </div>

                <div className="country-group">
                    <h3 className="country-header">
                        <span className="team-flag flag-france"></span>
                        France
                    </h3>
                    <ul className="team-list">
                        <li className="team-row">
                            <span className="team-name">ESSCA Finance Society</span>
                        </li>
                        <li className="team-row">
                            <span className="team-name">Coming Soon...</span>
                        </li>
                    </ul>
                </div>

                <div className="country-group">
                    <h3 className="country-header">
                        <span className="team-flag flag-germany"></span>
                        Germany
                    </h3>
                    <ul className="team-list">
                        <li className="team-row">
                            <span className="team-name">Coming Soon...</span>
                        </li>
                    </ul>
                </div>

                <div className="country-group">
                    <h3 className="country-header">
                        <span className="team-flag flag-monaco"></span>
                        Monaco
                    </h3>
                    <ul className="team-list">
                        <li className="team-row">
                            <span className="team-name">University of Monaco Finance Society</span>
                        </li>
                    </ul>
                </div>

                <div className="country-group">
                    <h3 className="country-header">
                        <span className="team-flag flag-ni"></span>
                        Northern Ireland
                    </h3>
                    <ul className="team-list">
                        <li className="team-row">
                            <span className="team-name">Coming Soon...</span>
                        </li>
                    </ul>
                </div>

                <div className="country-group">
                    <h3 className="country-header">
                        <span className="team-flag flag-ireland"></span>
                        Republic of Ireland
                    </h3>
                    <ul className="team-list">
                        <li className="team-row">
                            <span className="team-name">University Of Galway Student Managed Fund</span>
                        </li>

                        <li className="team-row">
                            <span className="team-name">Irish Student Managed Fund</span>
                        </li>
                        <li className="team-row">
                            <span className="team-name">Coming Soon...</span>
                        </li>
                    </ul>
                </div>

                <div className="country-group">
                    <h3 className="country-header">
                        <span className="team-flag flag-scotland"></span>
                        Scotland
                    </h3>
                    <ul className="team-list">
                        <li className="team-row">
                            <span className="team-name">Coming Soon...</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Landing;
