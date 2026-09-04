import { COURSE_CARDS } from "../data.js";
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
              </div>
              <div className="course-offer-body">
                <h3>{course.title}</h3>
                <p>{course.intro}</p>
                <div className="course-offer-divider" />
                <ul className="course-offer-tools">
                  {course.tools.map((tool) => (
                    <li key={tool.name}>
                      <img src={`/trust-logos/${tool.file}`} alt="" />
                      <span>{tool.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="course-offer-divider" />
                <div className="course-offer-foot">
                  <span>{course.duration}</span>
                  <button type="button" onClick={onOpenDemo}>
                    View course
                    <i>→</i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
