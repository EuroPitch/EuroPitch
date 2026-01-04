import Raj from "../../assets/Raj.png";
import Arya from "../../assets/Arya.png";
import David from "../../assets/David.png";
import Nicolas from "../../assets/Nicolas.png";
import Anshuman from "../../assets/Anshuman.png";
import Ivanna from "../../assets/Ivanna.png";

const About = () => (
    <section className="container page">
        <h2>About EuroPitch</h2>
        <p>
        EuroPitch exists to bridge the gap between academic stock pitching and real‑world markets.
        Societies host their own selection rounds, finalists trade during an online phase, and
        teams finally present their approach at our annual conference.
        </p>
        <ul className="bullets">
        <li>Educational focus — workshops and resources for each stage.</li>
        <li>Pan‑European reach — rotating host country based on the champions.</li>
        <li>Career‑ready skills — research, risk management, and communication.</li>
        </ul>

        <h2>Our Committee</h2>
        <p>Our Committee is made up of many passionate students, eager to help shape the future of European Finance Societies</p>

        <div className="committee-members">
        <div className="member-card">
            <img src={Raj} alt="Raj Upadhyaya" className="member-photo" />
            <div className="member-info">
            <h4>Raj Aryan Upadhyaya, <br/> Trinity College Dublin</h4>
            <p>EuroPitch Founder & President, <br/> ISMF Founder & Co-CEO</p>
            </div>
        </div>
        <div className="member-card">
            <img src={David} alt="David Marshall" className="member-photo" />
            <div className="member-info">
            <h4>David Marshall, <br/> University College London</h4>
            <p>EuroPitch Co-Head of Outreach,<br/>MFG President</p>
            </div>
        </div>
        <div className="member-card">
            <img src={Anshuman} alt="Anshuman Sowmyanarayan" className="member-photo" />
            <div className="member-info">
            <h4>Anshuman Sowmyanarayan, <br/> EM Lyon</h4>
            <p>EuroPitch Co-Head of Outreach</p>
            </div>
        </div>
        <div className="member-card">
            <img src={Arya} alt="Arya Wadivkar" className="member-photo" />
            <div className="member-info">
            <h4>Arya Wadivkar, <br/> University of Warwick</h4>
            <p>EuroPitch Head of Finance, <br/> WTS President</p>
            </div>
        </div>
        </div>

        <br />
        
        <h2>Our History</h2>
        <p>
        EuroPitch was founded in April 2025, pioneered by Raj Aryan Upadhyaya of the Irish Student Managed Fund, and pushed by many other Student Finance Societies,
        with the aim, championed by students, to create a Pan‑European investment competition
        that combines student learning with mutual growth between societies across Europe.

        The inaugural EuroPitch competition will take place during the 2025–26 academic year,
        with the final conference scheduled for March 2026 in London.
        </p>
    </section>
);

export default About;