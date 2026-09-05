import { COURSE_CARDS } from "../data.js";
import { ArrowIcon, CalendarIcon, WhatsAppIcon } from "./Icons.jsx";
import "./CourseGrid.css";

export default function CourseGrid({ onOpenDemo }) {
  return (
    <section className="course-offers" id="courses">
      <div className="container">
        <div className="course-offers-head">
          <p className="about-kicker">Our Courses</p>
          <h2>AI-powered, job-ready programs</h2>
          <p>
            Classroom training in Figma, React, Shopify, Node.js, and AI tools — with live projects
            and certification.
          </p>
        </div>

        <div className="course-offer-grid">
          {COURSE_CARDS.map((course) => (
            <article className="course-offer-card" key={course.title}>
              <div className="course-offer-media">
                <img src={course.image} alt={course.title} />
                <svg className="course-offer-wave" viewBox="0 0 400 48" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 28C70 48 130 6 200 22C270 38 330 8 400 26V48H0V28Z" fill="#fff" />
                </svg>
              </div>

              <div className="course-offer-body">
                <h3>
                  {course.lead} <span>{course.accent}</span>
                </h3>

                <div className="course-offer-desc">
                  <p>{course.intro}</p>
                  <div className="course-offer-dots" aria-hidden="true">
                    {Array.from({ length: 15 }, (_, index) => (
                      <span key={index} />
                    ))}
                  </div>
                </div>

                <div className="course-offer-divider" />

                <div className="course-offer-tools">
                  <div
                    className="course-offer-tools-track"
                    style={{ animationDuration: `${Math.max(12, course.tools.length * 3.5)}s` }}
                  >
                    {[0, 1].map((copy) => (
                      <div className="course-offer-tools-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                        {course.tools.map((tool) => (
                          <div className="course-offer-tool" key={`${copy}-${tool.name}`}>
                            <img src={`/trust-logos/${tool.file}`} alt="" />
                            <span>{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="course-offer-divider" />

                <div className="course-offer-foot">
                  <div className="course-offer-meta">
                    <CalendarIcon size={22} />
                    <div>
                      <strong>{course.duration}</strong>
                      <span>Flexible Learning</span>
                    </div>
                  </div>
                  <span className="course-offer-vline" />
                  <button type="button" className="course-offer-cta" onClick={onOpenDemo}>
                    View Course
                    <i>
                      <ArrowIcon size={13} />
                    </i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section-ctas">
          <a
            className="section-cta-wa"
            href="https://wa.me/919218000707"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={18} />
            WhatsApp
          </a>
          <a className="section-cta-call" href="tel:+919218000707">
            Call +91 92180 00707
          </a>
        </div>
      </div>
    </section>
  );
}
