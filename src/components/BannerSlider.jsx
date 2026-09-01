import { useCallback, useEffect, useRef, useState } from "react";
import "./BannerSlider.css";

function Monitor({ title, className = "" }) {
  return (
    <div className={`slide-desk ${className}`}>
      <div className="slide-bezel">
        <div className="slide-screen">
          <strong>{title}</strong>
          <div className="slide-ui-grid">
            <b />
            <b />
            <b />
            <b />
          </div>
        </div>
      </div>
      <div className="slide-neck" />
      <div className="slide-base" />
      <div className="slide-desk-row">
        <span className="slide-cup" />
        <span className="slide-keyboard" />
        <span className="slide-mouse" />
        <span className="slide-plant" />
      </div>
    </div>
  );
}

function SlideUiux({ onApply }) {
  return (
    <article className="banner-slide slide-uiux">
      <span className="slide-deco deco-dots" aria-hidden="true" />
      <span className="slide-deco deco-wave" aria-hidden="true" />
      <div className="slide-inner">
        <div className="slide-copy">
          <p className="slide-kicker">Get job ready and become a</p>
          <h2>
            UI/UX <span>DESIGNER</span>
          </h2>
          <div className="uiux-badge">6-MONTH OFFLINE PROGRAM</div>
          <p className="slide-tag">Design experiences. Create impact.</p>
          <button type="button" className="slide-cta" onClick={onApply}>
            Start Designing →
          </button>
        </div>
        <div className="slide-visual">
          <span className="uiux-glow" aria-hidden="true" />
          <span className="float-chip uiux-aa">Aa</span>
          <span className="float-chip uiux-pen">✦</span>
          <Monitor title="UI / UX" />
        </div>
      </div>
    </article>
  );
}

function SlideGraphic({ onApply }) {
  return (
    <article className="banner-slide slide-graphic">
      <div className="slide-inner">
        <div className="slide-copy">
          <p className="slide-kicker">LEARN. CREATE. INSPIRE.</p>
          <h2>
            GRAPHIC <span>DESIGN</span>
          </h2>
          <div className="graphic-ribbon">COURSE FOR LOCAL STUDENTS</div>
          <button type="button" className="slide-cta" onClick={onApply}>
            Join Today
            <span className="graphic-arrow">→</span>
          </button>
        </div>
        <div className="slide-visual">
          <div className="graphic-badge">
            <span>DESIGN YOUR PASSION</span>
            <strong>SHAPE YOUR FUTURE</strong>
          </div>
          <div className="graphic-apps" aria-hidden="true">
            <b>Ps</b>
            <b>Ai</b>
            <b>Id</b>
          </div>
          <Monitor title="Create Your Vision" className="graphic-desk" />
        </div>
      </div>
    </article>
  );
}

function SlideWeb({ onApply }) {
  return (
    <article className="banner-slide slide-web">
      <span className="slide-deco deco-grid" aria-hidden="true" />
      <div className="slide-inner">
        <div className="slide-copy">
          <p className="slide-kicker">
            Turn Ideas Into <em>Powerful Websites</em>
          </p>
          <h2>WEB DEVELOPMENT</h2>
          <p className="slide-tag">Modern & responsive websites</p>
          <div className="web-tech" aria-hidden="true">
            <b>HTML</b>
            <b>CSS</b>
            <b>JS</b>
            <b>BOOT</b>
          </div>
          <button type="button" className="slide-cta" onClick={onApply}>
            Start Building →
          </button>
        </div>
        <div className="slide-visual">
          <Monitor title="Build Better Web Experiences" />
        </div>
      </div>
    </article>
  );
}

function SlideFullstack({ onApply }) {
  return (
    <article className="banner-slide slide-fullstack">
      <span className="slide-deco deco-glow-bl" aria-hidden="true" />
      <div className="slide-inner">
        <div className="slide-copy">
          <div className="fs-tag">Build Websites to Web Apps</div>
          <h2>
            FULL STACK
            <span>WEB DEVELOPMENT</span>
          </h2>
          <p className="fs-script">Learn · Build · Get Hired</p>
          <div className="fs-stack" aria-hidden="true">
            <b>Mongo</b>
            <b>Express</b>
            <b>React</b>
            <b>Node</b>
          </div>
          <button type="button" className="slide-cta" onClick={onApply}>
            Start Your IT Career →
          </button>
        </div>
        <div className="slide-visual">
          <div className="fs-float" aria-hidden="true">
            <b>React</b>
            <b>Node</b>
            <b>HTML</b>
            <b>CSS</b>
          </div>
          <Monitor title="Full Stack Apps" />
        </div>
      </div>
    </article>
  );
}

function SlideAi({ onApply }) {
  return (
    <article className="banner-slide slide-ai">
      <div className="ai-swoosh" aria-hidden="true" />
      <div className="slide-inner">
        <div className="slide-copy">
          <p className="ai-script">Design That Speaks!</p>
          <h2>
            <span>AI-POWERED</span>
            WEB DESIGN
          </h2>
          <p className="slide-tag">Stunning & user-friendly websites</p>
          <button type="button" className="slide-cta" onClick={onApply}>
            Start Your Design Journey →
          </button>
        </div>
        <div className="slide-visual">
          <div className="ai-tags" aria-hidden="true">
            <b>AI Layout</b>
            <b>AI Images</b>
            <b>AI Content</b>
          </div>
          <Monitor title="Design. Inspire. Grow." />
        </div>
      </div>
    </article>
  );
}

const SLIDES = [
  { id: "uiux", Slide: SlideUiux },
  { id: "graphic", Slide: SlideGraphic },
  { id: "web", Slide: SlideWeb },
  { id: "fullstack", Slide: SlideFullstack },
  { id: "ai", Slide: SlideAi },
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
    }, 6000);
    return () => clearInterval(id);
  }, []);

  function onPointerDown(event) {
    startX.current = event.clientX;
  }

  function onPointerUp(event) {
    const delta = event.clientX - startX.current;
    if (delta > 50) goTo(index - 1);
    else if (delta < -50) goTo(index + 1);
  }

  return (
    <section
      className="banner-slider"
      id="home"
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
        {SLIDES.map(({ id, Slide }) => (
          <Slide key={id} onApply={onApply} />
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
          />
        ))}
      </div>
    </section>
  );
}
