import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <section className="hero">
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


            <div className="features container">
                <div className="card">
                <h3>Campus Heats</h3>
                <p>Run an internal stock‑pitch at your society to select your team.</p>
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
        </section>
    );
};


export default Landing;