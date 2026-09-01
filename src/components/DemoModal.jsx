import { useEffect } from "react";
import LeadForm from "./LeadForm.jsx";
import { BRANCHES, DEMO_COURSES } from "../data.js";

export default function DemoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    function onKey(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
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
      <div className="modal-card">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h3 id="demoTitle">Request a demo</h3>
        <LeadForm
          className=""
          fields={["name", "phone", "course", "branch"]}
          courseOptions={DEMO_COURSES}
          branchOptions={BRANCHES}
          successMessage="Demo request sent. We will confirm your slot on WhatsApp."
          submitLabel="Book Free Demo"
          submitStyle={{ width: "100%", marginTop: 8 }}
        />
      </div>
    </div>
  );
}
