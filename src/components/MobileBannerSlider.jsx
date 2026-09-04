import { useCallback, useEffect, useRef, useState } from "react";
import "./MobileBannerSlider.css";

const SLIDES = [
  {
    src: "/mobile-banners/banner-01.jpg",
    alt: "UI/UX Designer 6-month offline program",
  },
  {
    src: "/mobile-banners/banner-02.jpg",
    alt: "Full Stack Web Development course",
  },
  {
    src: "/mobile-banners/banner-03.jpg",
    alt: "Web Development course",
  },
  {
    src: "/mobile-banners/banner-04.jpg",
    alt: "Graphic Design course",
  },
  {
    src: "/mobile-banners/banner-05.jpg",
    alt: "AI-Powered Web Design course",
  },
];

export default function MobileBannerSlider() {
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const paused = useRef(false);
  const startX = useRef(0);
  const dragXRef = useRef(0);
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
    if (!many) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    startX.current = event.clientX;
    dragXRef.current = 0;
    paused.current = true;
    setDragging(true);
  }

  function onPointerMove(event) {
    if (!dragging) return;
    const next = event.clientX - startX.current;
    dragXRef.current = next;
    setDragX(next);
  }

  function endDrag() {
    if (!dragging) return;
    const delta = dragXRef.current;
    if (delta > 50) goTo(index - 1);
    else if (delta < -50) goTo(index + 1);
    dragXRef.current = 0;
    setDragX(0);
    setDragging(false);
    paused.current = false;
  }

  return (
    <section
      className={`mobile-banner${dragging ? " is-dragging" : ""}`}
      aria-label="Course banners"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div
        className="mobile-track"
        style={{
          transform: `translateX(calc(-${index * 100}% + ${dragX}px))`,
          transition: dragging ? "none" : "transform 0.45s ease",
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
