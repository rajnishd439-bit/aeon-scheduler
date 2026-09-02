const features = [
  "See combined availability without switching tabs",
  "Prevent double bookings across all calendars",
  "Connect Google, Outlook, and more in minutes",
];

export default function CalendarConnectedSection() {
  return (
    <section
      className="calendar-connected-section"
    >
      <div className="calendar-connected-layout">
        {/* LEFT IMAGE */}
        <div className="calendar-connected-visual">
          <img
            src="/images/calendar-connected.png"
            alt="Multiple calendars connected in Aeon Scheduler"
            className="calendar-connected-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="calendar-connected-content">
          <div className="calendar-connected-eyebrow">
            Multiple Calendars
          </div>

          <h2 className="calendar-connected-heading">
            Your Calendars,
            <br />
            Connected in One Place
          </h2>

          <p className="calendar-connected-description">
            Stop switching between calendars to find the right time. Connect
            multiple calendars and get one clear view of your availability all
            in one place.
          </p>

          <div className="calendar-connected-features">
            {features.map((feature) => (
              <div
                key={feature}
                className="calendar-connected-feature"
              >
                <span
                  className="calendar-connected-check"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>{feature}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="calendar-connected-button"
          >
            Link Your Calendar
          </a>
        </div>
      </div>
    </section>
  );
}