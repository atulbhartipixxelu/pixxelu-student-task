import { useState } from "react";
import "./VideoTestimonials.css";

const VIDEOS = [
  {
    id: "lSLh7is4CME",
    name: "Samridhi",
    course: "Web Design & UI/UX",
  },
  {
    id: "M5RenOZTmm8",
    name: "Rakshit",
    course: "Advanced Web Development",
  },
];

function youtubeSrc(id) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: id,
    playsinline: "1",
    modestbranding: "1",
    rel: "0",
    iv_load_policy: "3",
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export default function VideoTestimonials() {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((current) => (current - 1 + VIDEOS.length) % VIDEOS.length);
  }

  function next() {
    setIndex((current) => (current + 1) % VIDEOS.length);
  }

  return (
    <section className="video-testimonials" id="video-stories">
      <div className="container">
        <div className="vt-head">
          <p className="about-kicker">Student Stories</p>
          <h2>Hear From Our Students</h2>
          <p>
            Real journeys from the classroom to career — watch how our students built{" "}
            <strong>job-ready skills</strong> at Pixxelu Academy.
          </p>
        </div>

        <div className="vt-slider">
          <button type="button" className="vt-nav" onClick={prev} aria-label="Previous video">
            ‹
          </button>

          <div className="vt-viewport">
            <div className="vt-track" style={{ "--vt-index": index }}>
              {VIDEOS.map((video) => (
                <article className="vt-slide" key={video.id}>
                  <div className="vt-card">
                    <div className="vt-frame">
                      <iframe
                        src={youtubeSrc(video.id)}
                        title={`${video.name} — ${video.course} at Pixxelu Academy`}
                        width="315"
                        height="560"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="vt-meta">
                      <b>{video.name}</b>
                      <span>{video.course}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button type="button" className="vt-nav" onClick={next} aria-label="Next video">
            ›
          </button>
        </div>

        <div className="vt-dots">
          {VIDEOS.map((video, i) => (
            <button
              key={video.id}
              type="button"
              className={`vt-dot${i === index ? " active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Show ${video.name} video`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
