const calendarItems = [
  {
    label: "Google Calendar",
    icon: "/images/google-calendar.png",
  },
  {
    label: "Outlook Calendar",
    icon: "/images/outlook.png",
  },
  {
    label: "Teams Calendar",
    icon: "/images/teams.png",
  },
  {
    label: "Personal Calendar",
    icon: "/images/personal-calendar.png",
  },
];

const WhyManageCalendarsSection = () => {
  return (
    <section className="manage-calendars">
      <div className="manage-calendars__inner">

        {/* ================= HEADER ================= */}

        <div className="manage-calendars__header">
          <h2>
            Why Manage Multiple
            <br />
            Calendars Separately?
          </h2>

          <p>
            Stop switching between calendars. Connect them all in one place, see
            <br />
            your availability clearly, and schedule with ease.
          </p>
        </div>

        {/* ================= CALENDAR FLOW ================= */}

        <div className="manage-calendars__flow">

          {/* ================= CALENDAR APPS ================= */}

          <div className="manage-calendars__apps">
            {calendarItems.map((item) => (
              <div
                className="manage-calendar-chip"
                key={item.label}
              >
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                />

                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* ================= CONNECTOR LINES ================= */}

          <div
            className="manage-connectors"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 854 165"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="calendar-arrow"
                  markerWidth="12"
                  markerHeight="12"
                  refX="6"
                  refY="6"
                  orient="auto"
                  markerUnits="userSpaceOnUse"
                >
                  <path
                    d="M2 2 L7 6 L2 10"
                    fill="none"
                    stroke="#8A8A8A"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>

              {/* GOOGLE CALENDAR */}
              <path
                d="
                  M0 0
                  V72
                  H370
                  V155
                "
                className="manage-connector-path"
                markerEnd="url(#calendar-arrow)"
              />

              {/* OUTLOOK CALENDAR */}
              <path
                d="
                  M284 0
                  V51
                  H408
                  V155
                "
                className="manage-connector-path"
                markerEnd="url(#calendar-arrow)"
              />

              {/* TEAMS CALENDAR */}
              <path
                d="
                  M570 0
                  V51
                  H446
                  V155
                "
                className="manage-connector-path"
                markerEnd="url(#calendar-arrow)"
              />

              {/* PERSONAL CALENDAR */}
              <path
                d="
                  M854 0
                  V72
                  H484
                  V155
                "
                className="manage-connector-path"
                markerEnd="url(#calendar-arrow)"
              />
            </svg>
          </div>

          {/* ================= AEON SCHEDULER ================= */}

          <div className="manage-scheduler">
            Aeon Scheduler
          </div>

          {/* ================= BOTTOM ARROW ================= */}

          <div
            className="manage-scheduler-arrow"
            aria-hidden="true"
          >
            <span className="manage-scheduler-arrow__line" />
          </div>

        </div>

        {/* ================= DASHBOARD VISUAL ================= */}

        <div className="manage-visual">

          {/* ================= DASHBOARD IMAGE ================= */}

          <div className="manage-dashboard">
            <img
              className="manage-dashboard__image"
              src="/images/calendar-dashboard-1.png"
              alt="Aeon Scheduler calendar dashboard"
            />
          </div>

          {/* ================= LEFT DARK CARD ================= */}

          <div className="manage-info-card manage-info-card--left">

            <h3>
              Stop Switching. Start Scheduling.
            </h3>

            <p>
              Connect multiple calendars in one
              <br />
              place, get a clear view of your
              <br />
              availability, and schedule meetings
              <br />
              without the back-and-forth.
            </p>

            <button type="button">
              Link Your Calendar
            </button>

          </div>

          {/* ================= RIGHT GREEN CARD ================= */}

          <div className="manage-info-card manage-info-card--right">

            <ul>
              <li>Connect multiple calendars</li>
              <li>One unified availability view</li>
              <li>Smarter, conflict-free scheduling</li>
              <li>Fewer scheduling conflicts</li>
              <li>One simple workflow</li>
            </ul>

          </div>

          {/* ================= WOMAN IMAGE ================= */}

          <img
            className="manage-calendar-woman"
            src="/images/calendar-woman.png"
            alt="Professional working on calendar scheduling"
          />

        </div>

      </div>
    </section>
  );
};

export default WhyManageCalendarsSection;