import { useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button.jsx";
import "./BannerSlider.css";

const SLIDES = [
  {
    id: "uiux",
    meta: "UI/UX",
    line1: "UI/UX",
    line2: "DESIGNER.",
    watermark: "DESIGN",
    copy: "Learn the right skills, build case studies, get job ready — and design experiences that create impact.",
    cta: "Start Designing",
  },
  {
    id: "graphic",
    meta: "GRAPHIC",
    line1: "GRAPHIC",
    line2: "DESIGN.",
    watermark: "CREATE",
    copy: "Learn. Create. Inspire. A hands-on course for local students who want to shape brands with craft.",
    cta: "Join Today",
  },
  {
    id: "web",
    meta: "WEB",
    line1: "WEB",
    line2: "DEVELOPMENT.",
    watermark: "BUILD",
    copy: "Turn ideas into powerful websites. Learn to build modern, responsive experiences from scratch.",
    cta: "Start Building",
  },
  {
    id: "fullstack",
    meta: "FULL STACK",
    line1: "FULL STACK",
    line2: "DEVELOPER.",
    watermark: "CODE",
    copy: "Build websites to web apps. Code your future and become a job-ready full stack developer.",
    cta: "Start Your Career",
  },
  {
    id: "ai",
    meta: "AI DESIGN",
    line1: "AI-POWERED",
    line2: "WEB DESIGN.",
    watermark: "VISION",
    copy: "Design that speaks. Create stunning, user-friendly websites with smarter AI-led workflows.",
    cta: "Start Your Journey",
  },
];

export default function BannerSlider({ onApply }) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const startX = useRef(0);

  const goTo = useCallback((next) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIndex((current) => (current + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  function onPointerDown(event) {
    startX.current = event.clientX;
  }

  function onPointerUp(event) {
    const delta = event.clientX - startX.current;
    if (delta > 60) goTo(index - 1);
    else if (delta < -60) goTo(index + 1);
  }

  return (
    <section
      className="banner-slider"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      <div
        className="banner-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {SLIDES.map((slide, i) => (
          <article className="banner-slide" key={slide.id}>
            <p className="slide-watermark" aria-hidden="true">
              {slide.watermark}
            </p>
            <div className="slide-grain" aria-hidden="true" />

            <div className="slide-meta">
              <span>
                {slide.meta} / {String(i + 1).padStart(2, "0")}
              </span>
              <button type="button" onClick={onApply}>
                Apply Now
              </button>
            </div>

            <div className="slide-stage">
              <h2>
                <span>{slide.line1}</span>
                <span className="outline">{slide.line2}</span>
              </h2>
              <p>{slide.copy}</p>
              <Button type="button" onClick={onApply}>
                {slide.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>

      <button
        className="banner-arrow prev"
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
      >
        ‹
      </button>
      <button
        className="banner-arrow next"
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
      >
        ›
      </button>

      <div className="banner-dots">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            className={i === index ? "active" : undefined}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </section>
  );
}
