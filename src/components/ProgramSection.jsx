import { useState } from "react";
import Button from "./Button.jsx";

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
      <h3>Apply for the Program</h3>
      <p className="sub">Fill in your details, our team will call you shortly.</p>
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
      <p className="apply-note">Enrolments closing soon.</p>
    </form>
  );
}

export default function ProgramSection() {
  return (
    <section className="program-section" id="program">
      <div className="container program-layout">
        <div>
          <span className="program-kicker">12-Week Live Online Program</span>
          <h2>Learn Advanced Digital Marketing, 100% Practically (with AI)</h2>
          <p className="program-copy">
            Master in-demand marketing skills through{" "}
            <span className="program-hl">24+ live sessions</span>, real campaigns and dedicated{" "}
            <span className="program-hl">1-on-1 Support</span> from working mentors, plus{" "}
            <span className="program-hl">Placement Assistance</span> till you start interviewing.
          </p>
          <p className="program-copy">
            Learn SEO, ads, content and AI tools the way agencies work today — the same practical
            classroom approach trusted by <span className="program-hl">1000+ learners</span>.
          </p>
          <div className="program-facts">
            <div className="program-fact">
              <span>First live class on</span>
              <strong>5th Sept&apos;26</strong>
            </div>
            <div className="program-fact">
              <span>Program duration</span>
              <strong>12 Weeks</strong>
            </div>
            <div className="program-fact">
              <span>Live weekend classes</span>
              <strong>70+ Hours</strong>
            </div>
            <div className="program-fact">
              <span>Rating</span>
              <strong>
                <span className="star">★</span> 4.9/5
              </strong>
            </div>
          </div>
        </div>
        <ApplyForm />
      </div>
    </section>
  );
}
