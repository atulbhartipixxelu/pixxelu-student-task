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
import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  PhoneIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "./components/Icons.jsx";
import { COURSE_CARDS } from "./data.js";

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);

  function openDemo() {
    setDemoOpen(true);
  }

  return (
    <>
      <Header onOpenDemo={openDemo} />

      <main id="top">
        <div id="home">
          <BannerSlider onApply={openDemo} />
          <MobileBannerSlider />
        </div>

        <section className="hero" id="about">
          <div className="container">
            <div className="hero-grid">
              <div className="about-visual">
                <img
                  src="/about.jpg"
                  alt="Students and mentors at Pixxelu Academy in Dharamshala — campus life, classroom batches, and certified learners"
                />
              </div>

              <div className="about-copy">
                <p className="about-kicker">About Us</p>
                <h1>Learn in the classroom. Build for the industry. Grow in Dharamshala.</h1>
                <p>
                  <strong>Pixxelu Academy</strong> is a classroom-first IT institute helping students become
                  job-ready with <strong>mentor-led training</strong>, live projects, and placement support —
                  not slide-only theory.
                </p>
                <p>
                  From <strong>UI/UX, web development, and graphic design</strong> to digital marketing, every
                  program is built around real work, certification, and a campus community that celebrates
                  every project and every career win.
                </p>
                <Button type="button" onClick={openDemo}>
                  Book Free Demo
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

        <EventHighlights />

        <GoogleReviews />

        <EnquireSection />

      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <a className="footer-logo" href="#home">
                <img src="/footer-logo.png" alt="Pixxelu Digital Technology" />
              </a>
              <h4>About Us</h4>
              <p>
                <strong>Pixxelu Academy</strong> is a classroom-first IT institute in Dharamshala.
                We train students in UI/UX, web development, graphic design and digital marketing
                with live projects, certification and placement support.
              </p>
              <p>Monday to Saturday · 9:00 AM – 6:30 PM</p>
              <div className="socials">
                <a
                  className="social-facebook"
                  href="https://www.facebook.com/pixxeludigitaltechnology/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="social-instagram"
                  href="https://www.instagram.com/pixxeludigitaltechnology/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  className="social-youtube"
                  href="https://www.youtube.com/@PixxeluDigitalTechnology"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <YouTubeIcon />
                </a>
                <a
                  className="social-whatsapp"
                  href="https://wa.me/919218000707"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={18} />
                </a>
              </div>
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
            <div>
              <h4>Trending Courses</h4>
              <ul>
                <li>
                  <a href="#courses">Full Stack Web Development</a>
                </li>
                <li>
                  <a href="#courses">UI/UX Design</a>
                </li>
                <li>
                  <a href="#courses">Digital Marketing</a>
                </li>
                <li>
                  <a href="#courses">Graphic Designing</a>
                </li>
                <li>
                  <a href="#courses">Web Development</a>
                </li>
                <li>
                  <a href="#courses">React JS</a>
                </li>
                <li>
                  <a href="#industrial">Industrial Training</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-contact-bar">
            <h4>Contact Information</h4>
            <ul className="footer-contact">
              <li>
                <span className="footer-ico footer-ico-location" aria-hidden="true">
                  <LocationIcon size={20} />
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Building+256+Kachari+Adda+Chilgari+Dharamshala+176215"
                  target="_blank"
                  rel="noreferrer"
                >
                  Building 256, Kachari Adda, Chilgari, Dharamshala, Himachal Pradesh 176215
                </a>
              </li>
              <li>
                <span className="footer-ico footer-ico-phone" aria-hidden="true">
                  <PhoneIcon size={18} />
                </span>
                <a href="tel:+919218000707">+91 92180 00707</a>
              </li>
              <li>
                <span className="footer-ico footer-ico-whatsapp" aria-hidden="true">
                  <WhatsAppIcon size={18} />
                </span>
                <a href="https://wa.me/919218000707" target="_blank" rel="noreferrer">
                  +91 92180 00707
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy">
          Copyright © 2026 Pixxelu Academy. All Rights Reserved.
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
