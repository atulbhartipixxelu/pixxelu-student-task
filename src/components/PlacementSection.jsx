import { WhatsAppIcon } from "./Icons.jsx";
import "./PlacementSection.css";

const PLACEMENTS = [
  { file: "01.jpg", name: "Abish Choudhary", role: "Jr. Frontend Developer" },
  { file: "02.jpg", name: "Samriti Chaudhary", role: "Jr. UI/UX Designer" },
  { file: "03.jpg", name: "Daman Chaudhary", role: "Jr. PHP Developer" },
  { file: "04.jpg", name: "Gaurav", role: "Jr. UI/UX Designer" },
  { file: "06.jpg", name: "Rahul Chaudhary", role: "Jr. PHP Developer" },
  { file: "07.jpg", name: "Riya Chaudhary", role: "Jr. UI/UX Designer" },
];

export default function PlacementSection() {
  return (
    <section className="placement-section" id="placements" aria-label="Student placements">
      <div className="placement-top">
        <div className="container placement-head">
          <img
            className="placement-seal"
            src="/placements/job-placed-badge.jpg"
            alt="Job placed"
          />
          <div className="placement-copy">
            <p className="placement-kicker">After Course Training</p>
            <h2>Congratulations!</h2>
            <p className="placement-intro">
              <span>We are proud to announce that our talented students have successfully secured placements</span>
              <span>
                after completing classroom training at <strong>Pixxelu Academy</strong>.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="placement-marquee" aria-label="Placed students">
        <div className="placement-track">
          {[0, 1].map((copy) => (
            <div className="placement-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {PLACEMENTS.map((student) => (
                <article className="placement-card" key={`${copy}-${student.file}`}>
                  <img
                    src={`/placements/${student.file}`}
                    alt={`${student.name}, ${student.role}`}
                  />
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="placement-cta">
        <div className="container">
          <div className="placement-cta-board">
            <h3>
              <span>हमारे Students ने Skills को Jobs में बदला है</span>
              <span>अब आपकी बारी है! 🚀</span>
            </h3>
            <p>
              <strong>Industry-Relevant Skills</strong>, <strong>100% Practical Training</strong> और{" "}
              <strong>Real Projects</strong> के साथ खुद को <strong>Job-Ready</strong> बनाइए और अपने
              बेहतर <strong>Career</strong> की शुरुआत कीजिए।
            </p>
            <div className="placement-cta-actions">
              <a
                className="placement-cta-wa"
                href="https://wa.me/919218000707"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon size={18} />
                WhatsApp
              </a>
              <a className="placement-cta-call" href="tel:+919218000707">
                Call +91 92180 00707
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
