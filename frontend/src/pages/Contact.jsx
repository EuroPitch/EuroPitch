import { useState } from "react";


const Contact = () => {
const [status, setStatus] = useState(null);


const handleSubmit = (e) => {
e.preventDefault();
// No backend hooked up; just show a confirmation for now.
setStatus("Thanks! We'll get back to you.");
e.target.reset();
};


return (
<section className="container page">
<h2>Contact</h2>
<p>Societies, sponsors, and mentors — we’d love to hear from you.</p>
<form className="form" onSubmit={handleSubmit}>
<label>
Name
<input name="name" required />
</label>
<label>
Email
<input type="email" name="email" required />
</label>
<label>
Message
<textarea name="message" rows="5" required />
</label>
<button className="btn primary" type="submit">Send</button>
</form>
{status && <p className="success" role="status">{status}</p>}
</section>
);
};


export default Contact;