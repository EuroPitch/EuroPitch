export default function Contact() {
  return (
    <section className="container page">
      <h2>Contact</h2>
      <p>Societies, sponsors, and mentors — we’d love to hear from you.</p>

      <p style={{ marginTop: "20px" }}>
        You can reach us directly at{" "}
        <a href="mailto:europitch.team@gmail.com" className="link">
          europitch.team@gmail.com
        </a>
      </p>

      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <a
          href="https://www.linkedin.com/company/euro-pitch"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/euro.pitch/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}
