import { useEffect, useRef, useState } from "react";
import Header from "./components/Header.jsx";
import DemoModal from "./components/DemoModal.jsx";
import ComboApplyModal from "./components/ComboApplyModal.jsx";
import LeadForm from "./components/LeadForm.jsx";
import ProgramSection from "./components/ProgramSection.jsx";
import SuccessStories from "./components/SuccessStories.jsx";
import Button from "./components/Button.jsx";
import BannerSlider from "./components/BannerSlider.jsx";
import TrustedMarquee from "./components/TrustedMarquee.jsx";
import CourseGrid from "./components/CourseGrid.jsx";
import { WhatsAppIcon } from "./components/Icons.jsx";
import {
  BRANCHES,
  BRANCH_CARDS,
  COMBOS,
  CONTACT_BRANCHES,
  COURSE_CARDS,
  COURSES,
  FAQS,
} from "./data.js";

function CountUp({ target }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          const start = performance.now();
          const duration = 1600;
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - p) ** 3;
            setValue(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <div className="num" ref={ref}>
      {value.toLocaleString("en-IN")}
      <span>+</span>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [comboOpen, setComboOpen] = useState(false);
  const [comboTitle, setComboTitle] = useState("");

  function openDemo() {
    setDemoOpen(true);
    setMenuOpen(false);
  }

  function openCombo(title) {
    setComboTitle(title);
    setComboOpen(true);
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

        <section className="cta-strip">
          <div className="container cta-strip-inner">
            <p>Ready to master digital marketing in 12 weeks?</p>
            <Button variant="outline" type="button" onClick={openDemo}>
              Apply Now
            </Button>
          </div>
        </section>

        <ProgramSection />

        <section className="section" id="combos">
          <div className="container">
            <div className="center">
              <h2>Professionally Designed Combo Packs</h2>
            </div>
            <div className="combo-benefits">
              <div className="benefit">
                <div className="ico">🎓</div>
                <div>
                  <strong>Career Support</strong>
                  <p style={{ margin: 0, fontSize: 13, color: "#000" }}>Mentorship and placement guidance.</p>
                </div>
              </div>
              <div className="benefit">
                <div className="ico">🎯</div>
                <div>
                  <strong>50+ Live Projects</strong>
                  <p style={{ margin: 0, fontSize: 13, color: "#000" }}>Certified industry projects.</p>
                </div>
              </div>
              <div className="benefit">
                <div className="ico">🕓</div>
                <div>
                  <strong>Flexible Duration</strong>
                  <p style={{ margin: 0, fontSize: 13, color: "#000" }}>4–12 month programs.</p>
                </div>
              </div>
            </div>
            <div className="combo-grid">
              {COMBOS.map((combo) => (
                <article className="combo-card" key={combo.title}>
                  <h3>{combo.title}</h3>
                  <div className="combo-skills">
                    {combo.skills.map((skill) => (
                      <div className="skill" key={skill}>
                        <i className="dot" /> {skill}
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    <a className="combo-link" href="#enquire">
                      View Combo Details →
                    </a>
                    <Button type="button" className="full" onClick={() => openCombo(combo.title)}>
                      Apply for This Combo
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="group-band">
              <div>
                <h2>Special Pricing for Group Admissions</h2>
                <p style={{ margin: 0, opacity: 0.92 }}>
                  Bring classmates or friends. The more you join together, the more you save on career
                  programs.
                </p>
                <div className="offer-pills">
                  <span>2 students — 10% off</span>
                  <span>3 students — 15% off</span>
                  <span>4+ students — 20% off</span>
                </div>
              </div>
              <Button href="tel:+919317788822" variant="outline" className="btn-lg">
                Claim Group Offer
              </Button>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="center">
              <h2>A Trusted Learning Partner for Career-Focused IT Education</h2>
            </div>
            <div className="stats-row">
              <div className="stat-box">
                <CountUp target={9} />
                <div>Training Branches</div>
              </div>
              <div className="stat-box">
                <CountUp target={14} />
                <div>Career Programs</div>
              </div>
              <div className="stat-box">
                <CountUp target={12000} />
                <div>Students Trained</div>
              </div>
              <div className="stat-box">
                <CountUp target={700} />
                <div>Placement Partners</div>
              </div>
            </div>
            <div className="mosaic">
              <img src="/classroom.jpg" alt="Students collaborating in a training lab" />
              <img src="/lab.jpg" alt="IT lab classroom" />
              <img src="/workshop.jpg" alt="Workshop session" />
              <img src="/coding.jpg" alt="Learner working on a live project" />
              <img src="/event.jpg" alt="Campus event" />
            </div>
            <div className="center" style={{ marginTop: 24 }}>
              <Button href="#success">Download Placed Student List</Button>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="center">
              <h2>Strong Academic Collaborations &amp; Industry Partnerships</h2>
              <p className="lead">
                At <strong>Excellence Technology</strong>, we actively collaborate with leading colleges
                and universities to bridge the gap between academics and industry. Through structured{" "}
                <strong>MoUs, internships, and placement partnerships</strong>, we create real career
                opportunities for students and institutions.
              </p>
            </div>
            <div className="partner-grid">
              <div className="partner-card">
                <div className="ico">🤝</div>
                <h3>50+ MoUs Signed with Colleges</h3>
              </div>
              <div className="partner-card">
                <div className="ico">🎓</div>
                <h3>30+ Active Institutional Training Programs</h3>
              </div>
              <div className="partner-card">
                <div className="ico">💼</div>
                <h3>500+ Internship Students Trained</h3>
              </div>
              <div className="partner-card">
                <div className="ico">🔗</div>
                <h3>700+ Placement &amp; Hiring Partners</h3>
              </div>
            </div>
            <div className="center" style={{ marginTop: 24 }}>
              <Button href="#events" variant="outline">
                Explore Our Learning Environment
              </Button>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="why">
          <div className="container why-grid">
            <div>
              <h2>Why Learners Choose Excellence Technology</h2>
              <p>
                Excellence Technology focuses on structured learning, practical training, and career-ready
                skill development through a consistent and professional approach.
              </p>
              <div className="why-list">
                <div className="why-item">
                  <span className="check">✓</span>
                  <div>
                    <strong>100% practical classroom training</strong>
                    <br />
                    <span style={{ fontSize: 13, color: "#000" }}>
                      No slide-only batches. You code, design, and ship on live projects.
                    </span>
                  </div>
                </div>
                <div className="why-item">
                  <span className="check">✓</span>
                  <div>
                    <strong>Dedicated placement assistance</strong>
                    <br />
                    <span style={{ fontSize: 13, color: "#000" }}>
                      Interview prep plus 5 interviews in reputed companies.
                    </span>
                  </div>
                </div>
                <div className="why-item">
                  <span className="check">✓</span>
                  <div>
                    <strong>ISO 9001:2015 certified programs</strong>
                    <br />
                    <span style={{ fontSize: 13, color: "#000" }}>
                      Globally recognized certification after course completion.
                    </span>
                  </div>
                </div>
                <div className="why-item">
                  <span className="check">✓</span>
                  <div>
                    <strong>Flexible batches across 9+ branches</strong>
                    <br />
                    <span style={{ fontSize: 13, color: "#000" }}>
                      Morning, evening, weekend, and online modes.
                    </span>
                  </div>
                </div>
              </div>
              <Button href="#enquire">Connect With Our Team</Button>
            </div>
            <div className="photo-grid">
              <img src="/student1.jpg" alt="Placed student" />
              <img src="/student2.jpg" alt="Placed student" />
              <img src="/student3.jpg" alt="Placed student" />
              <img src="/student4.jpg" alt="Placed student" />
              <img src="/student5.jpg" alt="Placed student" />
              <img src="/student6.jpg" alt="Placed student" />
            </div>
          </div>
        </section>

        <section className="section" id="enquire">
          <div className="container form-wrap">
            <div>
              <h2>Start Your Learning Journey with Expert Guidance</h2>
              <p>
                Fill out the form to get personalized guidance on programs, combo packs, and learning
                options. Our team will connect with you to understand your goals and help you choose the
                right path.
              </p>
              <img
                src="/lab.jpg"
                alt="Training lab"
                style={{ borderRadius: 16, marginTop: 16, height: 280, width: "100%", objectFit: "cover" }}
              />
            </div>
            <LeadForm
              fields={["name", "phone", "email", "course", "branch"]}
              courseOptions={COURSES}
              branchOptions={BRANCHES}
              successMessage="Thanks. Our academic team will call you shortly."
              submitLabel="Request a Call Back"
              submitStyle={{ gridColumn: "1 / -1" }}
              note="By submitting, you agree to be contacted on phone or WhatsApp about batches and demos."
            />
          </div>
        </section>

        <section className="section section-alt" id="stories">
          <div className="container">
            <div className="center">
              <h2>Success Stories from Our Placed Students</h2>
              <p className="lead">
                Real experiences from learners who have trained with Excellence Technology. These stories
                reflect our learning approach, mentorship, and the impact our programs have on career
                development.
              </p>
            </div>
            <div className="testi-grid">
              <article className="testi">
                <div className="stars">★★★★★</div>
                <p>
                  “I joined for 6 months industrial training in full stack. Mentors made me work on two live
                  client projects. I got placed in a Mohali product company within a month of completion.”
                </p>
                <div className="person">
                  <img src="/student1.jpg" alt="" />
                  <div>
                    <strong>Harshit Mehta</strong>
                    <span>Full Stack · Placed at a product firm</span>
                  </div>
                </div>
              </article>
              <article className="testi">
                <div className="stars">★★★★★</div>
                <p>
                  “The data science combo with AI was intense in a good way. SQL, Python, and ML projects
                  built a portfolio I could actually show in interviews.”
                </p>
                <div className="person">
                  <img src="/student2.jpg" alt="" />
                  <div>
                    <strong>Neha Gupta</strong>
                    <span>Data Science · Analyst role</span>
                  </div>
                </div>
              </article>
              <article className="testi">
                <div className="stars">★★★★★</div>
                <p>
                  “I was unsure between digital marketing and web designing. The free demo and counselor
                  helped me pick the right combo.”
                </p>
                <div className="person">
                  <img src="/student4.jpg" alt="" />
                  <div>
                    <strong>Kiran Bala</strong>
                    <span>Digital Marketing · Agency role</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="branches">
          <div className="container">
            <div className="center">
              <h2>Our Branches</h2>
              <p className="lead">
                Excellence Technology is proudly expanding across multiple cities, delivering quality
                education and career-focused training to students everywhere. With modern classrooms, expert
                trainers, and placement support at every location, we provide the same standard of
                excellence across all our branches.
              </p>
            </div>
            <div className="branch-grid">
              {BRANCH_CARDS.map((branch) => (
                <article className="branch-card" key={branch.city}>
                  <h3>{branch.city}</h3>
                  <p>{branch.text}</p>
                  <a href="#contact">{branch.city} Branch Details</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="process">
          <div className="container">
            <div className="center">
              <h2>A Clear and Career-Focused Learning Process</h2>
              <p className="lead">
                We follow a structured and industry-focused approach to transform students into confident,
                skilled, and job-ready professionals. Our training emphasizes practical learning, real-world
                exposure, and continuous skill development.
              </p>
            </div>
            <div className="steps">
              <article className="step">
                <div className="n">1</div>
                <h3>Free Demo &amp; Counseling</h3>
                <p>Meet trainers, pick a course, and plan your batch.</p>
              </article>
              <article className="step">
                <div className="n">2</div>
                <h3>Classroom Training</h3>
                <p>Daily practical sessions with updated industry tools.</p>
              </article>
              <article className="step">
                <div className="n">3</div>
                <h3>Live Projects</h3>
                <p>Build 2–4 real projects for a hire-ready portfolio.</p>
              </article>
              <article className="step">
                <div className="n">4</div>
                <h3>Interview Prep</h3>
                <p>Mocks, aptitude, and resume reviews with mentors.</p>
              </article>
              <article className="step">
                <div className="n">5</div>
                <h3>Placement Support</h3>
                <p>Interviews with hiring partners until you land a role.</p>
              </article>
            </div>
            <div className="center" style={{ marginTop: 28 }}>
              <Button type="button" onClick={openDemo}>
                Start Your Learning Journey
              </Button>
            </div>
          </div>
        </section>

        <SuccessStories onApply={openDemo} />

        <section className="section" id="contact">
          <div className="container two-col">
            <div>
              <h2>Request Guidance from Our Academic Team</h2>
              <p>
                Share your details and let our team assist you with program selection, combo packs, and
                learning options based on your career goals.
              </p>
              <LeadForm
                fields={["name", "phone", "branch"]}
                branchOptions={CONTACT_BRANCHES}
                successMessage="Request received. A counselor will WhatsApp you shortly."
                submitLabel="Get Guidance"
                submitStyle={{ gridColumn: "1 / -1" }}
              />
            </div>
            <div>
              <h2>A Message from Our Founder – Inspiring Excellence, Building Careers</h2>
              <p>
                At Excellence Technology, our vision is to bridge the gap between education and industry by
                delivering practical, career-focused training. We are committed to nurturing talent, building
                confidence, and helping students turn their ambitions into successful careers.
              </p>
              <div className="hero-actions">
                <Button href="#success" variant="outline">
                  About Our Journey
                </Button>
                <Button href="tel:+919317788822">Connect With Us</Button>
              </div>
              <div
                className="founder-meta"
                style={{ marginTop: 22, display: "flex", gap: 14, alignItems: "center" }}
              >
                <img
                  src="/founder.jpg"
                  alt="Deepak Kashyap, Founder & CEO"
                  style={{ width: 88, height: 88, borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                  <strong>Deepak Kashayap</strong>
                  <span>Founder &amp; CEO, Excellence Technology</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="events">
          <div className="container">
            <div className="center">
              <h2>Excellence Technology Event Highlights</h2>
              <p className="lead">
                At Excellence Technology, our events reflect hands-on learning and industry exposure. From
                technical workshops and seminars to placement drives and certification ceremonies, every
                event is designed to enhance skills and boost student confidence.
              </p>
            </div>
            <div className="event-grid">
              <img src="/event.jpg" alt="Student workshop" />
              <img src="/seminar.jpg" alt="Seminar" />
              <img src="/workshop.jpg" alt="Team workshop" />
              <img src="/classroom.jpg" alt="Classroom session" />
              <img src="/coding.jpg" alt="Hackathon style lab" />
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <div className="center">
              <h2>Everything You Need to Know Before Enrolling</h2>
              <p className="lead">
                Have questions about industrial training, certifications, placements, or course structure?
                We’ve answered the most common queries to help you make an informed decision.
              </p>
            </div>
            <div className="faq">
              {FAQS.map((item) => (
                <details className="faq-item" key={item.q} open={item.open}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
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
              <a href="#faq">Privacy Policy</a>
              <a href="#contact">Contact Us</a>
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
      <ComboApplyModal
        open={comboOpen}
        comboTitle={comboTitle}
        onClose={() => setComboOpen(false)}
      />
    </>
  );
}
