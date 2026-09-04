import { useState } from "react";
import Button from "./Button.jsx";
import { WhatsAppIcon } from "./Icons.jsx";

function isValidPhone(value) {
  return /^\d{10}$/.test(
    value.replace(/\s+/g, "").replace(/^(\+91)/, "").slice(-10),
  );
}

function ApplyForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function update(name, value) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    const firstName = values.firstName.trim();
    const lastName = values.lastName.trim();
    const phone = values.phone.trim();
    const email = values.email.trim();

    if (firstName.length < 2) nextErrors.firstName = true;
    if (lastName.length < 2) nextErrors.lastName = true;
    if (!isValidPhone(phone)) nextErrors.phone = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = true;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setErrors({});
    setSuccess("Thanks. Our team will call you shortly.");
    setValues({ firstName: "", lastName: "", phone: "", email: "" });
  }

  return (
    <form className="apply-card" onSubmit={onSubmit} noValidate>
      <div className="apply-card-head">
        <h3>Apply for Digital Marketing</h3>
        <p className="sub">3-month AI-powered classroom program. Our team will call you shortly.</p>
      </div>
      <div className={`form-success${success ? " show" : ""}`} role="status">
        {success}
      </div>
      <div className="apply-grid">
        <label className={`field${errors.firstName ? " invalid" : ""}`}>
          <span>First Name</span>
          <input
            name="firstName"
            placeholder="First name"
            value={values.firstName}
            onChange={(e) => update("firstName", e.target.value)}
          />
          <small className="form-error">Please enter your first name.</small>
        </label>
        <label className={`field${errors.lastName ? " invalid" : ""}`}>
          <span>Last Name</span>
          <input
            name="lastName"
            placeholder="Last name"
            value={values.lastName}
            onChange={(e) => update("lastName", e.target.value)}
          />
          <small className="form-error">Please enter your last name.</small>
        </label>
        <label className={`field full${errors.phone ? " invalid" : ""}`}>
          <span>Phone No.</span>
          <input
            name="phone"
            inputMode="tel"
            placeholder="10-digit mobile number"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
          <small className="form-error">Enter a valid 10-digit number.</small>
        </label>
        <label className={`field full${errors.email ? " invalid" : ""}`}>
          <span>Email</span>
          <input
            name="email"
            type="email"
            placeholder="you@email.com"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
          />
          <small className="form-error">Enter a valid email.</small>
        </label>
        <Button type="submit" className="full">
          Apply Now
        </Button>
      </div>
      <p className="apply-note">Seats closing soon for the next 3-month batch.</p>
    </form>
  );
}

export default function ProgramSection() {
  return (
    <section className="program-section" id="program">
      <div className="container program-layout">
        <div className="program-info">
          <span className="program-kicker">
            <span className="program-ai">AI-Powered</span>
            3-Month Classroom Program
          </span>
          <h2>
            Learn Digital Marketing with <em>AI-powered skills</em>
          </h2>
          <p className="program-copy">
            A practical 3-month course in SEO, Google Ads, Meta Ads, content and analytics — built
            around <span className="program-hl">AI-powered workflows</span>, live campaigns and{" "}
            <span className="program-hl">placement support</span>.
          </p>
          <p className="program-copy">
            Train in the classroom with ChatGPT, Gemini and AI ad tools the way agencies work today.
            Finish with real projects, a job-ready portfolio and interview prep.
          </p>
          <div className="program-tools">
            <span>SEO</span>
            <span>Google Ads</span>
            <span>Meta Ads</span>
            <span>AI Content</span>
            <span>Analytics</span>
          </div>
          <div className="program-facts">
            <div>
              <span>Program duration</span>
              <strong>3 Months</strong>
            </div>
            <div>
              <span>Training style</span>
              <strong>AI-Powered</strong>
            </div>
            <div>
              <span>Live campaigns</span>
              <strong>Real Projects</strong>
            </div>
            <div>
              <span>Rating</span>
              <strong className="program-rating">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.8l2.47 6.28 6.73.42-5.2 4.22 1.7 6.52L12 16.9l-5.7 3.34 1.7-6.52-5.2-4.22 6.73-.42L12 2.8z" />
                </svg>
                4.9/5
              </strong>
            </div>
          </div>
          <div className="program-actions">
            <a
              className="program-wa"
              href="https://wa.me/919218000707"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={18} />
              WhatsApp
            </a>
            <a className="program-call" href="tel:+919218000707">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 2.9 3 2.4 3.4 2 4 2h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2.2 2.2z"
                />
              </svg>
              Call +91 92180 00707
            </a>
          </div>
        </div>
        <ApplyForm />
      </div>
    </section>
  );
}
