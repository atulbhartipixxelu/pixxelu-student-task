import { useEffect } from "react";
import LeadForm from "./LeadForm.jsx";
import { DEMO_COURSES } from "../data.js";

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
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal-card">
          <h3 id="demoTitle">Request a demo</h3>
          <LeadForm
            className=""
            fields={["name", "phone", "course", "email"]}
            courseOptions={DEMO_COURSES}
            successMessage="Demo request sent. We will confirm your slot on WhatsApp."
            submitLabel="Book Free Demo"
            submitStyle={{ width: "100%", marginTop: 8 }}
          />
        </div>
      </div>
    </div>
  );
}
