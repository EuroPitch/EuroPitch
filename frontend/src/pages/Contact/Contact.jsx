import { FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const Contact = () => (
  <section className="page container">
    <h2>Contact Us</h2>
    <p>
      Have questions about EuroPitch, want to register your society, or interested in
      sponsoring? We'd love to hear from you.
    </p>

    <div className="contact-grid">
      <div className="contact-card">
        <h3><FiMail className="contact-icon" /> Email</h3>
        <p>
          General enquiries:{" "}
          <a className="link" href="mailto:europitch.team@gmail.com">
            europitch.team@gmail.com
          </a>
        </p>
      </div>

      <div className="contact-card">
        <h3><FaLinkedinIn className="contact-icon" /> LinkedIn</h3>
        <p>
          Follow us for updates:{" "}
          <a
            className="link"
            href="https://www.linkedin.com/company/euro-pitch"
            target="_blank"
            rel="noopener noreferrer"
          >
            EuroPitch on LinkedIn
          </a>
        </p>
      </div>

      {/*
      <div className="contact-card">
        <h3><FaInstagram className="contact-icon" /> Instagram</h3>
        <p>
          Behind the scenes:{" "}
          <a
            className="link"
            href="https://www.instagram.com/euro.pitch"
            target="_blank"
            rel="noopener noreferrer"
          >
            @euro.pitch
          </a>
        </p>
      </div> */}

      <div className="contact-card">
        <h3><HiOutlineClipboardDocumentList className="contact-icon" /> Register</h3>
        <p>
          Ready to join?{" "}
          <a
            className="link"
            href="https://forms.gle/DDvVPmCQdQvLEg6y6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign up your society here
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
