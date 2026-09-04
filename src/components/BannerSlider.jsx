import { useCallback, useEffect, useRef, useState } from "react";
import "./BannerSlider.css";

export const BANNER_SLIDES = [
  { src: "/banners/slider01.jpg", alt: "UI/UX Designer course" },
  { src: "/banners/slider02.jpg", alt: "Full Stack Web Development course" },
  { src: "/banners/slider03.jpg", alt: "Graphic Design course" },
  { src: "/banners/slider04.jpg", alt: "AI-Powered Web Design course" },
  { src: "/banners/slider05.jpg", alt: "Web Development course" },
];

export default function BannerSlider({ onApply }) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const startX = useRef(0);
  const dragged = useRef(false);

  const goTo = useCallback((next) => {
    setIndex((next + BANNER_SLIDES.length) % BANNER_SLIDES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIndex((current) => (current + 1) % BANNER_SLIDES.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  function onPointerDown(event) {
    startX.current = event.clientX;
    dragged.current = false;
  }

  function onPointerUp(event) {
    const delta = event.clientX - startX.current;
    if (Math.abs(delta) > 60) {
      dragged.current = true;
      if (delta > 60) goTo(index - 1);
      else goTo(index + 1);
    }
  }

  function onSlideClick() {
    if (dragged.current) return;
    onApply();
  }

  return (
    <section
      className="banner-slider"
      aria-label="Course banners"
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
        {BANNER_SLIDES.map((slide) => (
          <article className="banner-slide" key={slide.src}>
            <button type="button" className="banner-hit" onClick={onSlideClick} aria-label={slide.alt}>
              <img src={slide.src} alt={slide.alt} draggable="false" />
            </button>
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
        {BANNER_SLIDES.map((slide, i) => (
          <button
            key={slide.src}
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
