import { WhatsAppIcon } from "./Icons.jsx";
import "./IndustrialTraining.css";

const PROGRAMS = [
  {
    image: "/industrial/30-days.jpg",
    alt: "30 Days Industrial Training at Pixxelu Academy",
  },
  {
    image: "/industrial/45-days.jpg",
    alt: "45 Days Industrial Training at Pixxelu Academy",
  },
];

const TOOLS = [
  { name: "React", file: "react.svg" },
  { name: "Node.js", file: "nodejs.svg" },
  { name: "SQL", file: "sql.svg" },
  { name: "Figma", file: "figma.svg" },
  { name: "JavaScript", file: "javascript.svg" },
  { name: "Google", file: "google.svg" },
];

export default function IndustrialTraining({ onOpenDemo }) {
  return (
    <section className="industrial" id="industrial">
      <div className="container">
        <div className="industrial-head">
          <p className="about-kicker">College Training</p>
          <h2>Industrial Training Programs</h2>
          <p className="industrial-script">Learn Today, Build Tomorrow</p>
          <p className="industrial-audience">
            For BCA, MCA, CSC, Computer Science, B.Tech &amp; Other IT/CS Students
          </p>
        </div>

        <div className="industrial-grid">
          {PROGRAMS.map((program) => (
            <button
              type="button"
              className="industrial-card"
              key={program.image}
              onClick={onOpenDemo}
            >
              <img src={program.image} alt={program.alt} />
            </button>
          ))}
        </div>

        <div className="industrial-tools" aria-label="Tools you will use">
          {TOOLS.map((tool) => (
            <span key={tool.name}>
              <img src={`/trust-logos/${tool.file}`} alt="" />
              {tool.name}
            </span>
          ))}
          <em>and more…</em>
        </div>

        <div className="section-ctas">
          <a
            className="section-cta-wa"
            href="https://wa.me/919218000707"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={18} />
            WhatsApp
          </a>
          <a className="section-cta-call" href="tel:+919218000707">
            Call +91 92180 00707
          </a>
        </div>
      </div>
    </section>
  );
}
