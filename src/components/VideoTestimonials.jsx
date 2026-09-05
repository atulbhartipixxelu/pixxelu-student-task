import { useEffect, useRef, useState } from "react";
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

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!window.__ytApiPromise) {
    window.__ytApiPromise = new Promise((resolve) => {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        resolve(window.YT);
      };
      if (!document.querySelector("script[src='https://www.youtube.com/iframe_api']")) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(script);
      }
    });
  }
  return window.__ytApiPromise;
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M8 5.2v13.6L19 12 8 5.2Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M7 5h4v14H7V5Zm6 0h4v14h-4V5Z" />
    </svg>
  );
}

function startAutoplay(player) {
  if (!player?.playVideo) return;
  player.unMute?.();
  player.setVolume?.(100);
  player.playVideo();
}

function TestimonialPlayer({ id, title, active, onPlay }) {
  const wrapRef = useRef(null);
  const playerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return undefined;

    let cancelled = false;
    const host = document.createElement("div");
    wrap.appendChild(host);

    loadYouTubeApi().then((YT) => {
      if (cancelled) return;

      playerRef.current = new YT.Player(host, {
        videoId: id,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 0,
          mute: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          cc_load_policy: 0,
          playsinline: 1,
          loop: 1,
          playlist: id,
          origin: window.location.origin,
        },
        events: {
          onReady() {
            setReady(true);
          },
          onStateChange(event) {
            setPlaying(event.data === YT.PlayerState.PLAYING);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      const player = playerRef.current;
      playerRef.current = null;
      player?.destroy?.();
      host.remove();
    };
  }, [id]);

  useEffect(() => {
    if (!ready) return undefined;
    const player = playerRef.current;
    if (!player?.playVideo) return undefined;

    if (active) {
      startAutoplay(player);
      const retry = window.setTimeout(() => startAutoplay(player), 400);
      return () => window.clearTimeout(retry);
    }

    player.pauseVideo();
    return undefined;
  }, [active, ready]);

  function togglePlay() {
    const player = playerRef.current;
    if (!player?.getPlayerState) return;
    if (player.getPlayerState() === window.YT.PlayerState.PLAYING) {
      player.pauseVideo();
      return;
    }
    onPlay();
    startAutoplay(player);
  }

  return (
    <div className="vt-frame">
      <div className="vt-player" ref={wrapRef} title={title} />
      {!playing && !active ? (
        <img className="vt-poster" src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" />
      ) : null}
      <div className="vt-shield" aria-hidden="true" />
      <div className="vt-controls">
        <button type="button" onClick={togglePlay} aria-label={playing ? "Pause video" : "Play video"}>
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </div>
  );
}

export default function VideoTestimonials() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [index, setIndex] = useState(0);
  const [activeId, setActiveId] = useState(VIDEOS[0].id);

  useEffect(() => {
    function update() {
      const section = sectionRef.current;
      if (!section) return;

      const box = section.getBoundingClientRect();
      const next = document.getElementById("placements")?.getBoundingClientRect();
      const vh = window.innerHeight;
      const sectionVisible = box.top < vh * 0.72 && box.bottom > vh * 0.28;
      const nextReached = Boolean(next && next.top < vh * 0.38);

      setInView(sectionVisible && !nextReached);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    setActiveId(VIDEOS[index].id);
  }, [index]);

  function prev() {
    setIndex((current) => (current - 1 + VIDEOS.length) % VIDEOS.length);
  }

  function next() {
    setIndex((current) => (current + 1) % VIDEOS.length);
  }

  return (
    <section className="video-testimonials" id="video-stories" ref={sectionRef}>
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
                    <TestimonialPlayer
                      id={video.id}
                      title={`${video.name} — ${video.course} at Pixxelu Academy`}
                      active={inView && activeId === video.id}
                      onPlay={() => setActiveId(video.id)}
                    />
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
