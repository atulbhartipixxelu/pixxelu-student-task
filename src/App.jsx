import { useState } from "react";
import Header from "./components/Header.jsx";
import DemoModal from "./components/DemoModal.jsx";
import ProgramSection from "./components/ProgramSection.jsx";
import Button from "./components/Button.jsx";
import BannerSlider from "./components/BannerSlider.jsx";
import MobileBannerSlider from "./components/MobileBannerSlider.jsx";
import TrustedMarquee from "./components/TrustedMarquee.jsx";
import CourseGrid from "./components/CourseGrid.jsx";
import PlacementSection from "./components/PlacementSection.jsx";
import IndustrialTraining from "./components/IndustrialTraining.jsx";
import VideoTestimonials from "./components/VideoTestimonials.jsx";
import GoogleReviews from "./components/GoogleReviews.jsx";
import EventHighlights from "./components/EventHighlights.jsx";
import EnquireSection from "./components/EnquireSection.jsx";
import { WhatsAppIcon } from "./components/Icons.jsx";
import { COURSE_CARDS } from "./data.js";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  function openDemo() {
    setDemoOpen(true);
    setMenuOpen(false);
  }

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onCloseMenu={() => setMenuOpen(false)}
        onOpenDemo={openDemo}
      />

      <main id="top">
        <div id="home">
          <BannerSlider onApply={openDemo} />
          <MobileBannerSlider />
        </div>

        <section className="hero" id="about">
          <div className="container">
            <div className="hero-grid">
              <div className="about-visual">
                <img src="/classroom.jpg" alt="Students learning together at Pixxelu Academy" />
              </div>

              <div className="about-copy">
                <p className="about-kicker">About Us</p>
                <h1>Pixxelu Academy — AI-powered classroom training in Dharamshala</h1>
                <p>
                  We are a classroom-first IT academy helping students become job-ready with
                  AI-powered skills, live projects, and placement support.
                </p>
                <p>
                  Our programs cover the tools used in real product teams — from{" "}
                  <strong>Figma, React, Shopify, and Node.js</strong> to digital marketing — so you
                  learn by building, not by watching slides.
                </p>
                <Button type="button" onClick={openDemo}>
                  Free Book Demo
                </Button>
              </div>
            </div>

            <ul className="about-facts">
              <li>
                <strong>4.9/5</strong>
                <b>Rating</b>
                <span>Trusted by learners</span>
              </li>
              <li>
                <strong>2–6</strong>
                <b>Duration</b>
                <span>Flexible batches</span>
              </li>
              <li>
                <strong>2–4</strong>
                <b>Live Projects</b>
                <span>Industry work</span>
              </li>
              <li>
                <strong>100%</strong>
                <b>Certification</b>
                <span>On completion</span>
              </li>
            </ul>
          </div>
        </section>

        <TrustedMarquee />

        <CourseGrid onOpenDemo={openDemo} />

        <IndustrialTraining onOpenDemo={openDemo} />

        <VideoTestimonials />

        <PlacementSection />

        <section className="cta-strip">
          <div className="container cta-strip-inner">
            <p>Ready to master AI-powered digital marketing in 3 months?</p>
            <Button variant="outline" type="button" onClick={openDemo}>
              Apply Now
            </Button>
          </div>
        </section>

        <ProgramSection />

        <GoogleReviews />

        <EnquireSection />

        <EventHighlights />

      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h4>About Us</h4>
              <p>
                Excellence Technology provides practical, career-focused technology training, industrial
                training and project-based internship programs in Chandigarh and Mohali. Open Monday to
                Saturday, 9:00 AM – 6:30 PM.
              </p>
              <p>
                Email: <a href="mailto:info@excellencetechnology.in">info@excellencetechnology.in</a>
              </p>
              <div className="socials">
                <a href="https://www.facebook.com/excellence.technology22" target="_blank" rel="noreferrer">
                  f
                </a>
                <a href="https://www.instagram.com/excellence.technology/" target="_blank" rel="noreferrer">
                  ig
                </a>
                <a
                  href="https://www.linkedin.com/company/excellence-technology"
                  target="_blank"
                  rel="noreferrer"
                >
                  in
                </a>
                <a href="https://www.youtube.com/ExcellenceTechnology" target="_blank" rel="noreferrer">
                  yt
                </a>
              </div>
            </div>
            <div>
              <h4>Contact Information</h4>
              <ul className="footer-contact">
                <li>
                  <strong>Location</strong>
                  Building 256, Kachari Adda, Chilgari, Dharamshala, Himachal Pradesh 176215
                </li>
                <li>
                  <strong>Email</strong>
                  <a href="mailto:info@excellencetechnology.in">info@excellencetechnology.in</a>
                </li>
                <li>
                  <strong>Phone</strong>
                  <a href="tel:+919317788822">+91 93177-88822</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Popular Course</h4>
              <ul>
                {COURSE_CARDS.map((course) => (
                  <li key={course.title}>
                    <a href="#courses">{course.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Programming Courses</h4>
              <ul>
                <li>
                  <a href="#courses">Python</a>
                </li>
                <li>
                  <a href="#courses">Java</a>
                </li>
                <li>
                  <a href="#courses">PHP</a>
                </li>
                <li>
                  <a href="#courses">Node.js</a>
                </li>
                <li>
                  <a href="#courses">C &amp; C++</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-links">
            <h4>Trending Courses</h4>
            <div className="link-row">
              <a href="#courses">Full Stack Web Development</a>
              <a href="#courses">Python</a>
              <a href="#courses">Machine Learning</a>
              <a href="#courses">Data Science</a>
              <a href="#courses">Java</a>
              <a href="#courses">React JS</a>
              <a href="#courses">Angular JS</a>
              <a href="#courses">Node JS</a>
              <a href="#courses">Java Script</a>
              <a href="#courses">Flutter</a>
              <a href="#courses">Android</a>
            </div>
            <h4>Skill Based Courses</h4>
            <div className="link-row">
              <a href="#courses">Graphic Designing</a>
              <a href="#courses">Web Designing</a>
              <a href="#courses">SEO</a>
              <a href="#courses">Software Testing</a>
              <a href="#courses">Cloud Computing</a>
              <a href="#courses">DevOps</a>
            </div>
            <h4>Quick Links</h4>
            <div className="link-row">
              <a href="#enquire">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="copy">
          <p className="footer-address">
            Building 256, Kachari Adda, Chilgari, Dharamshala, Himachal Pradesh 176215
          </p>
          Copyright © 2010-2026 Excellence technology. All Rights Reserved.
        </div>
      </footer>

      <a
        className="float-wa"
        href="https://wa.me/919218000707"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
