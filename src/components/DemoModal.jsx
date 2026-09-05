import { useEffect } from "react";
import LeadForm from "./LeadForm.jsx";
import { DEMO_COURSES } from "../data.js";
import "./DemoModal.css";

export default function DemoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = "hidden";
    function onKey(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={`modal${open ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demoTitle"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-shell">
        <div className="modal-card">
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close">
            ×
          </button>
          <div className="modal-head">
            <img className="modal-mark" src="/favicon.png" alt="" />
            <div>
              <p className="modal-kicker">Pixxelu Academy</p>
              <h3 id="demoTitle">Let’s find your course</h3>
              <span>Personal guidance · WhatsApp confirm</span>
            </div>
          </div>
          <LeadForm
            className="demo-form"
            grid
            fields={["name", "phone", "email", "course"]}
            courseOptions={DEMO_COURSES}
            successMessage="Thanks. Our team will confirm on WhatsApp."
            submitLabel="Book Now"
            submitStyle={{ gridColumn: "1 / -1" }}
          />
        </div>
      </div>
    </div>
  );
}
