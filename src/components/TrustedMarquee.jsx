import "./TrustedMarquee.css";

const ROW_ONE = [
  { name: "Figma", file: "figma.svg", border: "linear-gradient(135deg, #f24e1e, #a259ff, #1abcfe)" },
  { name: "React", file: "react.svg", border: "linear-gradient(135deg, #61dafb, #087ea4)" },
  { name: "Shopify", file: "shopify.svg", border: "linear-gradient(135deg, #95bf47, #5e8e3e)" },
  { name: "WordPress", file: "wordpress.svg", border: "linear-gradient(135deg, #21759b, #464646)" },
  { name: "Adobe", file: "adobe.svg", border: "linear-gradient(135deg, #eb1000, #ff6a00)" },
  { name: "Google", file: "google.svg", border: "linear-gradient(90deg, #4285f4, #ea4335, #fbbc05, #34a853)" },
  { name: "Amazon", file: "amazon.svg", border: "linear-gradient(135deg, #ff9900, #232f3e)" },
  { name: "Microsoft", file: "microsoft.svg", border: "linear-gradient(135deg, #f25022, #7fba00, #00a4ef, #ffb900)" },
];

const ROW_TWO = [
  { name: "Laravel", file: "laravel.svg", border: "linear-gradient(135deg, #ff2d20, #f55247)" },
  { name: "Node.js", file: "nodejs.svg", border: "linear-gradient(135deg, #339933, #303030)" },
  { name: "Tailwind", file: "tailwind.svg", border: "linear-gradient(135deg, #38bdf8, #0ea5e9)" },
  { name: "Vue", file: "vue.svg", border: "linear-gradient(135deg, #42b883, #35495e)" },
  { name: "Wix", file: "wix.svg", border: "linear-gradient(135deg, #0c6efc, #faad4d)" },
  { name: "Squarespace", file: "squarespace.svg", border: "linear-gradient(135deg, #000, #999)" },
  { name: "Photoshop", file: "photoshop.svg", border: "linear-gradient(135deg, #31a8ff, #001e36)" },
  { name: "SQL", file: "sql.svg", border: "linear-gradient(135deg, #00758f, #f29111)" },
];

function LogoRow({ items, direction }) {
  const loop = [...items, ...items];
  return (
    <div className={`trust-marquee${direction === "right" ? " reverse" : ""}`}>
      <div className="trust-track">
        {loop.map((item, index) => (
          <div
            className="trust-card"
            key={`${item.name}-${index}`}
            style={{ "--trust-border": item.border }}
            aria-hidden={index >= items.length ? true : undefined}
          >
            <span className="trust-brand">
              <span className="trust-icon">
                <img src={`/trust-logos/${item.file}`} alt="" />
              </span>
              <span>{item.name}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TrustedMarquee() {
  return (
    <section className="trust-section" aria-label="AI-powered technologies">
      <div className="container">
        <div className="trust-head">
          <p className="trust-badge">
            <span className="trust-dot" />
            AI-Powered Academy
          </p>
          <h2>Master industry technologies with AI-powered, job-ready skills</h2>
          <div className="trust-stats">
            <div>
              <strong>16+</strong>
              <span>Technologies</span>
            </div>
            <div>
              <strong>AI</strong>
              <span>Powered Workflows</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>Live Projects</span>
            </div>
          </div>
        </div>

        <div className="trust-rows">
          <LogoRow items={ROW_ONE} direction="left" />
          <LogoRow items={ROW_TWO} direction="right" />
        </div>

        <p className="trust-foot">
          <span>16+ technologies</span> · AI-powered workflows · 50+ live projects — built for
          job-ready skills
        </p>
      </div>
    </section>
  );
}
