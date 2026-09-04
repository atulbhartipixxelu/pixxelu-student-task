import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./Icons.jsx";
import Button from "./Button.jsx";

const LINKS = [
  { href: "#courses", label: "Course" },
  { href: "#stories", label: "Testimonial" },
  { href: "#success", label: "Success Story" },
  { href: "#contact", label: "Contact" },
];

function scrollToHash(hash) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header({ menuOpen, onToggleMenu, onOpenDemo, onCloseMenu }) {
  const [active, setActive] = useState("#courses");

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function onNavClick(event, href) {
    event.preventDefault();
    onCloseMenu();
    setActive(href);
    scrollToHash(href);
    window.history.replaceState(null, "", href);
  }

  return (
    <>
      <div className="topbar">
        <span>100% Practical Training. Real Projects. AI-Powered Skills. Job-Ready Career.</span>
        <span className="topbar-divider" aria-hidden="true" />
        <a
          href="#demo"
          onClick={(event) => {
            event.preventDefault();
            onOpenDemo();
          }}
        >
          Book Now Free Demo
        </a>
        <span className="topbar-divider" aria-hidden="true" />
        <a href="tel:+919218000707">Call Us +91 92180 00707</a>
      </div>

      <header className="header">
        <div className="container header-inner">
          <div className="header-brand">
            <a
              className="logo"
              href="#home"
              aria-label="Home"
              onClick={(event) => onNavClick(event, "#home")}
            >
              <img src="/header-logo.png" alt="pixxelu Digital Technology" />
            </a>
            <span className="header-divider" aria-hidden="true" />
            <p className="header-tagline">
              <span className="header-tagline-top">
                <span className="ai-letters">AI</span>
                <span className="ai-spark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      className="ai-spark-star"
                      d="M12 2.2 13.7 8.3 20 10 13.7 11.7 12 17.8 10.3 11.7 4 10 10.3 8.3 12 2.2Z"
                      fill="url(#aiSparkGrad)"
                    />
                    <circle className="ai-spark-dot ai-spark-dot-a" cx="19.2" cy="5.2" r="1.15" fill="#ffd36a" />
                    <circle className="ai-spark-dot ai-spark-dot-b" cx="5.1" cy="16.4" r="0.9" fill="#dc4a26" />
                    <defs>
                      <linearGradient id="aiSparkGrad" x1="4" y1="2" x2="20" y2="18" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ffd36a" />
                        <stop offset="0.5" stopColor="#dc4a26" />
                        <stop offset="1" stopColor="#ff8a3d" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                Powered Academy
              </span>
              <span className="header-tagline-city">Dharamshala</span>
            </p>
          </div>

          <ul className="nav">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? "active" : undefined}
                  onClick={(event) => onNavClick(event, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="header-cta">
            <a
              className="phone-link"
              href="https://wa.me/919218000707"
              target="_blank"
              rel="noreferrer"
            >
              <span className="wa" aria-hidden="true">
                <WhatsAppIcon />
              </span>
              <span className="phone-num">+91 92180 00707</span>
            </a>
            <Button type="button" onClick={onOpenDemo}>
              Free Demo
            </Button>
            <button
              className="menu-toggle"
              aria-label="Open menu"
              type="button"
              onClick={onToggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <nav className={`nav-mobile${menuOpen ? " open" : ""}`}>
          {LINKS.map((link) => (
            <a
              className={`top${active === link.href ? " active" : ""}`}
              href={link.href}
              key={link.href}
              onClick={(event) => onNavClick(event, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="top"
            href="#demo"
            onClick={(event) => {
              event.preventDefault();
              onCloseMenu();
              onOpenDemo();
            }}
          >
            Free Demo
          </a>
        </nav>
      </header>
    </>
  );
}
