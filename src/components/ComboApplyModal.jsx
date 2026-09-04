import { useEffect, useRef, useState } from "react";
import Button from "./Button.jsx";
import { COMBOS } from "../data.js";
import "./ComboApplyModal.css";

function isValidPhone(value) {
  return /^\d{10}$/.test(
    value.replace(/\s+/g, "").replace(/^(\+91)/, "").slice(-10),
  );
}

const EMPTY = { name: "", phone: "", email: "", course: "" };
const COURSE_OPTIONS = COMBOS.map((combo) => combo.title);

function CourseDropdown({ value, onChange, invalid }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);

  useEffect(() => {
    function onDoc(event) {
      if (wrap.current && !wrap.current.contains(event.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const label = value || "--Select Course--";

  return (
    <div className={`course-dd${invalid ? " invalid" : ""}${open ? " open" : ""}`} ref={wrap}>
      <button
        type="button"
        className="course-dd-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <svg className="course-dd-lines" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h16M4 12h11M4 17h7" />
        </svg>
        <span>{label}</span>
        <svg className="course-dd-caret" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open ? (
        <ul className="course-dd-menu" role="listbox">
          <li>
            <button
              type="button"
              className={!value ? "active" : undefined}
              onClick={() => {
                onChange("");
                setOpen(false);
              }}
            >
              --Select Course--
            </button>
          </li>
          {COURSE_OPTIONS.map((title) => (
            <li key={title}>
              <button
                type="button"
                className={value === title ? "active" : undefined}
                onClick={() => {
                  onChange(title);
                  setOpen(false);
                }}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function ComboApplyModal({ open, comboTitle = "", onClose }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!open) return undefined;
    setValues({ ...EMPTY, course: comboTitle });
    setErrors({});
    setSuccess("");
    document.body.style.overflow = "hidden";

    function onKey(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, comboTitle, onClose]);

  function update(name, value) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const name = values.name.trim();
    const phone = values.phone.trim();
    const email = values.email.trim();
    const course = values.course.trim();
    const next = {};
    if (name.length < 2) next.name = true;
    if (!isValidPhone(phone)) next.phone = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = true;
    if (!course) next.course = true;
    setErrors(next);
    if (Object.keys(next).length) return;
    setSuccess("Application received. We will contact you on WhatsApp and email.");
    setValues({ ...EMPTY, course: comboTitle });
  }

  return (
    <div
      className={`combo-modal${open ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="comboApplyTitle"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="combo-modal-shell">
        <button className="combo-modal-close" type="button" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="combo-modal-card">

        <aside className="combo-modal-side">
          <img className="combo-modal-logo" src="/brand-logo.png" alt="pixxelu Digital Technology" />
          <p>Combo pack</p>
          <h3 id="comboApplyTitle">Apply for this combo</h3>
          <strong>{comboTitle || "Choose a combo pack"}</strong>
          <ul>
            <li>Live mentor-led training</li>
            <li>Portfolio-ready projects</li>
            <li>Career guidance included</li>
          </ul>
        </aside>

        <form className="combo-modal-form" onSubmit={onSubmit} noValidate>
          <div className="combo-form-head">
            <h4>Your details</h4>
            <p>We’ll get back on WhatsApp and email.</p>
          </div>
          <p className={`combo-modal-ok${success ? " show" : ""}`} role="status">
            {success}
          </p>

          <div className="combo-form-grid">
            <label className={errors.name ? "invalid" : undefined}>
              <span>Name</span>
              <span className="combo-input">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0" />
                </svg>
                <input
                  name="name"
                  placeholder="Your full name"
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </span>
              {errors.name ? <small>Please enter your name.</small> : null}
            </label>

            <label className={errors.phone ? "invalid" : undefined}>
              <span>Phone No.</span>
              <span className="combo-input">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 3h4l1.2 3.2-2 1.2a12 12 0 0 0 6.4 6.4l1.2-2L21 13v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
                </svg>
                <input
                  name="phone"
                  inputMode="tel"
                  placeholder="10-digit mobile number"
                  value={values.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </span>
              {errors.phone ? <small>Enter a valid 10-digit number.</small> : null}
            </label>

            <label className={`full${errors.email ? " invalid" : ""}`}>
              <span>Email</span>
              <span className="combo-input">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 6h16v12H4V6Zm0 0 8 6 8-6" />
                </svg>
                <input
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </span>
              {errors.email ? <small>Enter a valid email.</small> : null}
            </label>

            <div className={`full${errors.course ? " invalid" : ""}`}>
              <span className="combo-field-label">Select Course</span>
              <CourseDropdown
                value={values.course}
                invalid={errors.course}
                onChange={(course) => update("course", course)}
              />
              {errors.course ? <small>Please select a course.</small> : null}
            </div>
          </div>

          <Button type="submit" className="full">
            Submit Now
          </Button>
        </form>
        </div>
      </div>
    </div>
  );
}
