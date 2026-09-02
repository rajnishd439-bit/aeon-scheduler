const CalendarCTASection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="calendar-cta-section">
      <div className="calendar-cta-layout">
        {/* BACKGROUND PATTERN */}
        <img
          src="/images/schedule-pattern.png"
          alt=""
          className="calendar-cta-pattern"
          aria-hidden="true"
        />

        {/* LEFT CONTENT */}
        <div className="calendar-cta-content">
          <h2 className="calendar-cta-heading">
            Ready to Bring Your
            <br />
            Calendars Together?
          </h2>

          <p className="calendar-cta-description">
            Connect your calendars, simplify your
            <br />
            availability, and make scheduling easier
            <br />
            from one place.
          </p>

          <div className="calendar-cta-divider" />

          <div className="calendar-cta-apps">
            {/* Google Calendar */}
            <div className="calendar-cta-app">
              <img
                src="/images/google-calendar.png"
                alt="Google Calendar"
                className="calendar-cta-google-icon"
              />
            </div>

            {/* Outlook */}
            <div className="calendar-cta-app">
              <img
                src="/images/outlook.png"
                alt="Microsoft Outlook"
                className="calendar-cta-outlook-icon"
              />
            </div>

            {/* Teams */}
            <div className="calendar-cta-app">
              <img
                src="/images/teams.png"
                alt="Microsoft Teams"
                className="calendar-cta-teams-icon"
              />
            </div>

            {/* Arrow */}
            <span className="calendar-cta-arrow">→</span>

            {/* Aeon Calendar */}
            <div className="calendar-cta-main-app">
              <svg
                className="calendar-cta-main-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect
                  x="4"
                  y="5"
                  width="16"
                  height="15"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M8 3V7M16 3V7M4 9H20"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form className="calendar-cta-form" onSubmit={handleSubmit}>
          <div className="calendar-cta-field">
            <label htmlFor="calendar-name">Name</label>

            <input
              id="calendar-name"
              type="text"
              placeholder="First Name"
            />
          </div>

          <div className="calendar-cta-field">
            <label htmlFor="calendar-email">Work Email</label>

            <input
              id="calendar-email"
              type="email"
              placeholder="Business email"
            />
          </div>

          <button
            type="submit"
            className="calendar-cta-submit"
          >
            Link Your Calendar
          </button>

          <p className="calendar-cta-secure">
            Your information is secure and protected.
          </p>
        </form>
      </div>
    </section>
  );
};

export default CalendarCTASection;