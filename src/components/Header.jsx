import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./Icons.jsx";
import Button from "./Button.jsx";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#program", label: "Program" },
  { href: "#courses", label: "Courses" },
  { href: "#combos", label: "Combos" },
  { href: "#success", label: "Success" },
  { href: "#branches", label: "Branches" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

function scrollToHash(hash) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header({ menuOpen, onToggleMenu, onOpenDemo, onCloseMenu }) {
  const [active, setActive] = useState("#home");

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
        100% Practical, Personalized, Classroom Training and Assured Job
        <a
          href="#demo"
          onClick={(event) => {
            event.preventDefault();
            onOpenDemo();
          }}
        >
          Book Free Demo Now
        </a>
      </div>

      <header className="header">
        <div className="container header-inner">
          <a
            className="logo"
            href="#home"
            aria-label="Home"
            onClick={(event) => onNavClick(event, "#home")}
          >
            <img src="/brand-logo.png" alt="pixxelu Digital Technology" />
          </a>

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
              href="https://wa.me/919317788822"
              target="_blank"
              rel="noreferrer"
            >
              <span className="wa" aria-hidden="true">
                <WhatsAppIcon />
              </span>
              <span>+91 9317788822</span>
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
