import { Link } from "react-router-dom";
import "./Landing.css"
import PdfEmbed from "../../components/PdfEmbed";

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

            <div className="join container">
                <h2>Why Join EuroPitch?</h2>
                <p className="muted">
                    EuroPitch gives student teams hands-on investing experience across Europe in both Buy-Side and Sell-Side skills. <br />
                    From local campus heats to an online trading finals and an in-person conference in London. <br />
                    Below are two quick resources you can read or download:
                </p>

                <div className="pdf-row">
                    <div className="pdf-card">
                        <h4>For Societies</h4>
                        <p className="small muted">Why you should join your society into EuroPitch</p>
                        <PdfEmbed src="/docs/EuroPitch Societies.pdf" title="EuroPitch Guide" />
                    </div>

                    <div className="pdf-card">
                        <h4>For Sponsors</h4>
                        <p className="small muted">What you should know about us</p>
                        <PdfEmbed src="/docs/EuroPitch Sponsors.pdf" title="EuroPitch Sponsors" />
                    </div>
                </div>
            </div>

            {/* Registered teams section */}
            <div className="registered container">
                <h2>Registered teams</h2>
                <p className="muted">
                    Many teams from universities across Europe have already registered.
                </p>

                <div className="country-group">
                    <h3 className="country-header">
                        <span className="team-flag flag-england"></span>
                        England
                    </h3>
                    <ul className="team-list">
                        <li className="team-row">
                            <div className="team-item">
                                <img className="team-logo" src="/Societies/bifs.png" alt="University of Birmingham logo" />
                                <span className="team-name">University of Birmingham Investment & Finance Society</span>
                            </div>
                        </li>

                        <li className="team-row">
                            <div className="team-item">
                                <img className="team-logo" src="/Societies/mfg.png" alt="Marshall Finance Group logo" />
                                <span className="team-name">Marshall Finance Group</span>
                            </div>
                        </li>

                        <li className="team-row">
                            <div className="team-item">
                                <img className="team-logo" src="/Societies/logo-placeholder.png" alt="Coming soon logo" />
                                <span className="team-name">More Coming Soon...</span>
                            </div>
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
                            <div className="team-item">
                                <img className="team-logo" src="/Societies/essca.png" alt="ESSCA Finance Society logo" />
                                <span className="team-name">ESSCA Finance Society</span>
                            </div>
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
                            <div className="team-item">
                                <img className="team-logo" src="/Societies/logo-placeholder.png" alt="Coming soon logo" />
                                <span className="team-name">Coming Soon...</span>
                            </div>
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
                            <div className="team-item">
                                <img className="team-logo" src="/Societies/monaco.png" alt="University of Monaco logo" />
                                <span className="team-name">University of Monaco Finance Society</span>
                            </div>
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
                            <div className="team-item">
                                <img className="team-logo" src="/Societies/qsmf.png" alt="Coming soon logo" />
                                <span className="team-name">Queen's Student Managed Fund</span>
                            </div>
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
                            <div className="team-item">
                                <img className="team-logo" src="/Societies/galway.png" alt="University Of Galway logo" />
                                <span className="team-name">University Of Galway Student Managed Fund</span>
                            </div>
                        </li>

                        <li className="team-row">
                            <div className="team-item">
                                <img className="team-logo" src="/Societies/ismf.png" alt="Irish Student Managed Fund logo" />
                                <span className="team-name">Irish Student Managed Fund</span>
                            </div>
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
                            <div className="team-item">
                                <img className="team-logo" src="/Societies/logo-placeholder.png" alt="Coming soon logo" />
                                <span className="team-name">Coming Soon...</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Landing;
