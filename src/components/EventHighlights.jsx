import { useState } from "react";
import "./EventHighlights.css";

function youtubeSrc(id) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    controls: "0",
    loop: "1",
    playlist: id,
    playsinline: "1",
    modestbranding: "1",
    rel: "0",
    disablekb: "1",
    fs: "0",
    iv_load_policy: "3",
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

const MISSING_PHOTOS = new Set([1, 2, 3, 4, 5]);

const PHOTOS = Array.from({ length: 59 }, (_, index) => index + 1)
  .filter((n) => !MISSING_PHOTOS.has(n))
  .map((n) => ({
    type: "image",
    src: `/events/event-${String(n).padStart(2, "0")}.jpg`,
    alt: `Pixxelu Academy campus ${n}`,
  }));

function withVideos(photos, videos) {
  const items = [...photos];
  const gap = Math.max(2, Math.floor(photos.length / (videos.length + 1)));
  videos.forEach((id, index) => {
    items.splice(gap * (index + 1) + index, 0, { type: "video", id });
  });
  return items;
}

const ROW_LEFT = withVideos(PHOTOS.slice(0, 30), ["TwXIA6Jiy5I", "V6PGuiPLkRs"]);
const ROW_RIGHT = withVideos(PHOTOS.slice(30), ["yqdUQg0fiCk"]);

function MediaCard({ item, copy }) {
  const [hidden, setHidden] = useState(false);

  if (item.type === "video") {
    return (
      <article className="event-card event-card-video">
        <iframe
          src={youtubeSrc(item.id)}
          title={copy === 0 ? "Pixxelu Academy event video" : ""}
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          tabIndex={-1}
        />
      </article>
    );
  }

  if (hidden) return null;

  return (
    <article className="event-card">
      <img
        src={item.src}
        alt={copy === 0 ? item.alt : ""}
        onError={() => setHidden(true)}
      />
    </article>
  );
}

function MarqueeRow({ items, direction }) {
  return (
    <div className={`event-marquee${direction === "right" ? " reverse" : ""}`}>
      <div className="event-track">
        {[0, 1].map((copy) => (
          <div className="event-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {items.map((item) => (
              <MediaCard item={item} copy={copy} key={`${copy}-${item.id || item.src}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EventHighlights() {
  return (
    <section className="event-highlights" id="events">
      <div className="container">
        <div className="event-head">
          <p className="about-kicker">Campus Life</p>
          <h2>Pixxelu Academy Event Highlights</h2>
          <p>
            At <strong>Pixxelu Academy</strong>, our events reflect <strong>hands-on learning</strong> and{" "}
            <strong>industry exposure</strong>. From <strong>technical workshops</strong> and{" "}
            <strong>seminars</strong> to <strong>placement drives</strong> and{" "}
            <strong>certification ceremonies</strong>, every event is designed to enhance skills and boost
            student confidence.
          </p>
        </div>
      </div>

      <div className="event-rows">
        <MarqueeRow items={ROW_LEFT} direction="left" />
        <MarqueeRow items={ROW_RIGHT} direction="right" />
      </div>
    </section>
  );
}
