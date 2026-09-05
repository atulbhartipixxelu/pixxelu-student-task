import { useEffect, useRef, useState } from "react";
import { MAIN_COURSES, PROGRAMMING_COURSES } from "../data.js";
import "./CourseSelect.css";

export default function CourseSelect({ name = "course", value = "", onChange, invalid = false }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);

  useEffect(() => {
    function onDoc(event) {
      if (wrap.current && !wrap.current.contains(event.target)) setOpen(false);
    }
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function pick(course) {
    onChange(course);
    setOpen(false);
  }

  return (
    <div className={`course-select${invalid ? " invalid" : ""}${open ? " open" : ""}`} ref={wrap}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        className="course-select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className={value ? "" : "is-placeholder"}>{value || "--Select Course--"}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open ? (
        <ul className="course-select-menu" role="listbox">
          {MAIN_COURSES.map((course) => (
            <li key={course}>
              <button
                type="button"
                className={value === course ? "active" : undefined}
                onClick={() => pick(course)}
              >
                {course}
              </button>
            </li>
          ))}
          <li className="course-select-heading" aria-hidden="true">
            Programming Courses
          </li>
          {PROGRAMMING_COURSES.map((course) => (
            <li key={course}>
              <button
                type="button"
                className={value === course ? "active" : undefined}
                onClick={() => pick(course)}
              >
                {course}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
