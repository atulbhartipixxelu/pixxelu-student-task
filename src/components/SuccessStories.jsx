import Button from "./Button.jsx";

const STORIES = [
  {
    badge: "70% SALARY HIKE",
    initials: "SP",
    name: "Shruti P",
    text: "Got a 70% hike within a month of completing the program. Live projects and mentor feedback helped me switch roles with confidence.",
  },
  {
    badge: "40% SALARY HIKE",
    initials: "AR",
    name: "Ajay R",
    text: "Moved from a support role to performance marketing. Weekend classes and 1-on-1 support made the career shift possible.",
  },
  {
    badge: "60x ROI",
    initials: "NK",
    name: "Neha K",
    text: "Ran ads on a live brand project and delivered 60x ROI. That case study became the highlight of my interview portfolio.",
  },
  {
    badge: "35% SALARY HIKE",
    initials: "RM",
    name: "Rahul M",
    text: "Placement support lined up interviews while I was still in training. I landed a better role with a 35% salary hike.",
  },
];

export default function SuccessStories({ onApply }) {
  return (
    <section className="success-section" id="success">
      <div className="container">
        <div className="success-head">
          <span className="success-kicker">( SUCCESS STORIES )</span>
          <h2>Meet our learners, who have transformed their careers</h2>
        </div>

        <div className="success-grid">
          {STORIES.map((story) => (
            <article className="success-card" key={story.name}>
              <span className="success-badge">{story.badge}</span>
              <div className="success-avatar" aria-hidden="true">
                {story.initials}
              </div>
              <h3>{story.name}</h3>
              <p>{story.text}</p>
            </article>
          ))}
        </div>

        <div className="success-cta">
          <p>Want to begin your success story? Join the next cohort now.</p>
          <Button type="button" className="btn-lg" onClick={onApply}>
            Apply Now
          </Button>
          <small>Limited Seats. Enroll now to avoid missing out!</small>
        </div>
      </div>
    </section>
  );
}
