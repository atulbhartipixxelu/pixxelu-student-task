import { useMemo, useState } from "react";
import "./GoogleReviews.css";

const GOOGLE_MAPS =
  "https://www.google.com/maps/search/?api=1&query=Pixxelu+Digital+Technology+Dharamshala";

const REVIEWS = [
  {
    name: "Vanit",
    when: "4 months ago",
    text: "Proud to be part of Pixxelu Digital Technology. It’s a place where creativity is encouraged and skills are constantly improved. The leadership is supportive and the projects are exciting and diverse. Perfect company for anyone looking for modern digital solutions and a positive working culture.",
  },
  {
    name: "Nishant",
    when: "8 months ago",
    text: "I attended a few demo classes at Pixxelu Digital Technology and was really happy with the teaching style. The trainers focus more on practical projects, which I was looking for. I am planning to enroll soon for web development training.",
  },
  {
    name: "Varun Barwal",
    when: "8 months ago",
    text: "Pixxelu Digital Technology has a very positive learning atmosphere. Though I haven’t started classes yet, I am impressed with the staff and the way they guide students. I will definitely join their upcoming batch.",
  },
  {
    name: "Kunal Dharwal",
    when: "8 months ago",
    text: "One of my seniors suggested Pixxelu Digital Technology for web development. After visiting, I found the teaching staff very helpful and cooperative. I have decided to join their 6-month internship program soon.",
  },
  {
    name: "Tarun Barwal",
    when: "8 months ago",
    text: "As a fresh MCA student, I wanted a reliable institute for training. After visiting Pixxelu Academy, I am sure this is the right place. The demo session was very interactive, and I am looking forward to starting my internship here.",
  },
  {
    name: "Rana Pradyush",
    when: "8 months ago",
    text: "As a B.Tech (CSE) student, I was searching for a place to do project-based training. After interacting with the mentors at Pixxelu Digital Technology, I am confident this is the right institute. I will be joining their internship program shortly.",
  },
  {
    name: "Priyanshu Thakur",
    when: "8 months ago",
    text: "I went to Pixxelu Digital Technology for inquiry regarding SEO and Digital Marketing training. The environment was motivating, and the staff explained how they give real project exposure. I am planning to start my training here soon.",
  },
];

const AVATAR_COLORS = ["#4285f4", "#ea4335", "#fbbc05", "#34a853", "#9c27b0", "#ff6d00", "#7b1fa2"];

function GoogleMark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function Stars() {
  return (
    <span className="gr-stars" aria-label="5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.6l2.7 6.6 7.1.5-5.4 4.4 1.7 6.8L12 17.3 5.9 20.9l1.7-6.8-5.4-4.4 7.1-.5L12 2.6z" />
        </svg>
      ))}
    </span>
  );
}

function Verified() {
  return (
    <span className="gr-verified" title="Verified">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9.2 16.2 5.8 12.8l1.4-1.4 2 2 7-7 1.4 1.4-8.4 8.4z" />
      </svg>
    </span>
  );
}

export default function GoogleReviews() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState({});
  const visible = 3;

  const cards = useMemo(
    () => Array.from({ length: visible }, (_, offset) => REVIEWS[(index + offset) % REVIEWS.length]),
    [index],
  );

  function prev() {
    setIndex((current) => (current - 1 + REVIEWS.length) % REVIEWS.length);
  }

  function next() {
    setIndex((current) => (current + 1) % REVIEWS.length);
  }

  return (
    <section className="google-reviews" id="stories">
      <div className="container">
        <div className="gr-head">
          <p className="about-kicker">Pixxelu Digital Technology</p>
          <h2>What our students say!</h2>
        </div>

        <div className="gr-layout">
          <div className="gr-summary">
            <strong>EXCELLENT</strong>
            <Stars />
            <p>
              Based on <b>244</b> reviews
            </p>
            <a href={GOOGLE_MAPS} target="_blank" rel="noreferrer" aria-label="Google reviews">
              <GoogleMark size={36} />
              <span>Google</span>
            </a>
          </div>

          <div className="gr-slider">
            <button type="button" className="gr-nav" onClick={prev} aria-label="Previous reviews">
              ‹
            </button>
            <div className="gr-cards">
              {cards.map((review, i) => {
                const fullIndex = (index + i) % REVIEWS.length;
                const expanded = Boolean(open[fullIndex]);
                const long = review.text.length > 150;
                const body = expanded || !long ? review.text : `${review.text.slice(0, 150).trim()}…`;

                return (
                  <article className="gr-card" key={`${review.name}-${fullIndex}`}>
                    <header>
                      <span
                        className="gr-avatar"
                        style={{ background: AVATAR_COLORS[fullIndex % AVATAR_COLORS.length] }}
                      >
                        {review.name.charAt(0)}
                      </span>
                      <div>
                        <b>{review.name}</b>
                        <small>{review.when}</small>
                      </div>
                      <GoogleMark size={18} />
                    </header>
                    <div className="gr-rating">
                      <Stars />
                      <Verified />
                    </div>
                    <p>{body}</p>
                    {long ? (
                      <button
                        type="button"
                        className="gr-more"
                        onClick={() => setOpen((prevOpen) => ({ ...prevOpen, [fullIndex]: !expanded }))}
                      >
                        {expanded ? "Read less" : "Read more"}
                      </button>
                    ) : null}
                    <span className="gr-quote" aria-hidden="true">
                      ”
                    </span>
                  </article>
                );
              })}
            </div>
            <button type="button" className="gr-nav" onClick={next} aria-label="Next reviews">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
