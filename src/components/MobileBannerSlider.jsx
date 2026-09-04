import { useCallback, useEffect, useRef, useState } from "react";
import "./MobileBannerSlider.css";

const SLIDES = [
  {
    src: "/mobile-banners/banner-01.jpg",
    alt: "UI/UX Designer 6-month offline program at Pixxelu Academy",
  },
];

export default function MobileBannerSlider() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const startX = useRef(0);
  const many = SLIDES.length > 1;

  const goTo = useCallback((next) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!many) return undefined;
    const id = setInterval(() => {
      if (!paused.current) setIndex((current) => (current + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [many]);

  function onPointerDown(event) {
    startX.current = event.clientX;
  }

  function onPointerUp(event) {
    if (!many) return;
    const delta = event.clientX - startX.current;
    if (delta > 50) goTo(index - 1);
    else if (delta < -50) goTo(index + 1);
  }

  return (
    <section className="mobile-banner" aria-label="Course banners">
      <div
        className="mobile-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onTouchStart={() => {
          paused.current = true;
        }}
        onTouchEnd={() => {
          paused.current = false;
        }}
      >
        {SLIDES.map((slide) => (
          <article className="m-slide" key={slide.src}>
            <img src={slide.src} alt={slide.alt} draggable="false" />
          </article>
        ))}
      </div>
      {many ? (
        <div className="mobile-dots">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              className={i === index ? "active" : undefined}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
