import {
  Smartphone,
  FileText,
  Download,
  Cloud,
} from "lucide-react";

const scheduleFeatures = [
  {
    icon: Smartphone,
    text: "Access All Your Calendars",
  },
  {
    icon: FileText,
    text: "Stay in Sync",
  },
  {
    icon: Download,
    text: "Quick & Easy Booking",
  },
  {
    icon: Cloud,
    text: "Never Miss an Update",
  },
];

export default function ScheduleAnywhereSection() {
  return (
    <section className="schedule-anywhere-section">
      <div className="schedule-anywhere-layout">

        {/* LEFT IMAGE */}
<div className="schedule-anywhere-visual">
  <img
    src="/images/schedule-phone.png"
    alt="Aeon Scheduler mobile application"
    className="schedule-anywhere-image"
  />
</div>

        {/* RIGHT CONTENT */}
        <div className="schedule-anywhere-content">

          <div className="schedule-anywhere-top">
            <span className="schedule-anywhere-eyebrow">
              Schedule Anywhere
            </span>

            <h2 className="schedule-anywhere-heading">
              Your Schedule,
              <br />
              Wherever You Go.
            </h2>

            <p className="schedule-anywhere-description">
              Stay connected to your schedule. Access calendars, manage
              appointments, and update availability from your mobile.
            </p>
          </div>

          <div className="schedule-anywhere-features">
            {scheduleFeatures.map(({ icon: Icon, text }) => (
              <div className="schedule-anywhere-feature" key={text}>
                <Icon
                  className="schedule-anywhere-feature-icon"
                  strokeWidth={1.8}
                />

                <span>{text}</span>
              </div>
            ))}
          </div>

          <form
            className="schedule-anywhere-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Work Email*"
              className="schedule-anywhere-input"
            />

            <button
              type="submit"
              className="schedule-anywhere-button"
            >
              Get Started
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}