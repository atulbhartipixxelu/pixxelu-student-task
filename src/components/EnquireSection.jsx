import LeadForm from "./LeadForm.jsx";
import { COURSES } from "../data.js";
import "./EnquireSection.css";

const VIDEO_ID = "TwXIA6Jiy5I";

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

export default function EnquireSection() {
  return (
    <section className="enquire" id="enquire">
      <div className="container enquire-layout">
        <div className="enquire-copy">
          <p className="about-kicker">Get in Touch</p>
          <h2>Start Your Learning Journey with Expert Guidance</h2>
          <p>
            Fill out the form to get <strong>personalized guidance</strong> on programs and learning
            options. Our team will connect with you to understand your goals and help you choose the{" "}
            <strong>right path</strong>.
          </p>

          <div className="enquire-video">
            <iframe
              src={youtubeSrc(VIDEO_ID)}
              title="Pixxelu Academy campus preview"
              allow="autoplay; encrypted-media"
              allowFullScreen={false}
              tabIndex={-1}
            />
          </div>
        </div>

        <LeadForm
          fields={["name", "phone", "email", "course"]}
          courseOptions={COURSES}
          title="Request a Call Back"
          subtitle="Share your details and our counsellor will call you shortly."
          successMessage="Thanks. Our academic team will call you shortly."
          submitLabel="Request a Call Back"
          submitStyle={{ gridColumn: "1 / -1" }}
          note="By submitting, you agree to be contacted on phone or WhatsApp about batches and demos."
        />
      </div>
    </section>
  );
}
