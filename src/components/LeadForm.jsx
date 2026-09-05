import { useState } from "react";
import Button from "./Button.jsx";

function isValidPhone(value) {
  return /^\d{10}$/.test(
    value.replace(/\s+/g, "").replace(/^(\+91)/, "").slice(-10),
  );
}

export default function LeadForm({
  fields,
  courseOptions = [],
  branchOptions = [],
  successMessage,
  submitLabel,
  className = "form-card",
  submitStyle,
  note,
  title,
  subtitle,
  grid = false,
}) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function update(name, value) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    const name = String(values.name || "").trim();
    const phone = String(values.phone || "").trim();
    const email = String(values.email || "").trim();
    const course = String(values.course || "").trim();
    const branch = String(values.branch || "").trim();

    if (fields.includes("name") && name.length < 2) nextErrors.name = true;
    if (fields.includes("phone") && !isValidPhone(phone)) nextErrors.phone = true;
    if (fields.includes("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = true;
    }
    if (fields.includes("course") && !course) nextErrors.course = true;
    if (fields.includes("branch") && !branch) nextErrors.branch = true;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setErrors({});
    setSuccess(successMessage);
    setValues({});
  }

  const body = (
    <>
      {fields.includes("name") && (
        <label className={`field${errors.name ? " invalid" : ""}`}>
          <span>Name</span>
          <input
            name="name"
            placeholder={fields.includes("email") ? "Your full name" : "Your name"}
            value={values.name || ""}
            onChange={(e) => update("name", e.target.value)}
          />
          <small className="form-error">Please enter your name.</small>
        </label>
      )}
      {fields.includes("phone") && (
        <label className={`field${errors.phone ? " invalid" : ""}`}>
          <span>Phone</span>
          <input
            name="phone"
            inputMode="tel"
            placeholder={fields.includes("email") ? "10-digit mobile number" : "Mobile number"}
            value={values.phone || ""}
            onChange={(e) => update("phone", e.target.value)}
          />
          <small className="form-error">Enter a valid 10-digit number.</small>
        </label>
      )}
      {fields.includes("email") && (
        <label className={`field${errors.email ? " invalid" : ""}`}>
          <span>Email</span>
          <input
            name="email"
            type="email"
            placeholder="you@email.com"
            value={values.email || ""}
            onChange={(e) => update("email", e.target.value)}
          />
          <small className="form-error">Enter a valid email.</small>
        </label>
      )}
      {fields.includes("course") && (
        <label className={`field${errors.course ? " invalid" : ""}`}>
          <span>Course</span>
          <select
            name="course"
            value={values.course || ""}
            onChange={(e) => update("course", e.target.value)}
          >
            <option value="">--Select Course--</option>
            {courseOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <small className="form-error">Please select a course.</small>
        </label>
      )}
      {fields.includes("branch") && (
        <label className={`field${errors.branch ? " invalid" : ""}${className === "form-card" ? " full" : ""}`}>
          <span>Branch</span>
          <select
            name="branch"
            value={values.branch || ""}
            onChange={(e) => update("branch", e.target.value)}
          >
            <option value="">--Select Branch--</option>
            {branchOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <small className="form-error">Please select a branch.</small>
        </label>
      )}
      <Button type="submit" className="full" style={submitStyle}>
        {submitLabel}
      </Button>
    </>
  );

  return (
    <form className={className} onSubmit={onSubmit} noValidate>
      {title ? (
        <div className="form-card-head">
          <h3>{title}</h3>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      ) : null}
      <div className={`form-success${success ? " show" : ""}`} role="status">
        {success}
      </div>
      {className === "form-card" || grid ? <div className="form-grid">{body}</div> : body}
      {note ? <p className="form-note">{note}</p> : null}
    </form>
  );
}
