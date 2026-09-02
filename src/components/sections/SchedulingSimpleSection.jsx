const SchedulingSimpleSection = () => {
  return (
  
<section id="how-it-works" className="schedule-simple">
      <div className="schedule-simple__inner">

        {/* ================= HEADER ================= */}

        <div className="schedule-simple__header">
          <h2>
            Scheduling Made Simple,
            <br />
            Wherever You Work
          </h2>

          <p>
            Connect your calendars, simplify your availability, and spend less
            time managing schedules.
          </p>
        </div>


        {/* ================= BENTO GRID ================= */}

        <div className="schedule-bento">

          {/* =============== LEFT COLUMN =============== */}

          <div className="schedule-bento__column">

            {/* Stay Organized */}
            <div className="schedule-card schedule-card--organized">

              <img
                className="schedule-arch-pattern"
                src="/images/arch-pattern.png"
                alt=""
                aria-hidden="true"
              />

              <div className="schedule-card__content">
                <h3>Stay Organized</h3>

                <p>
                  Keep meetings, bookings, and
                  <br />
                  availability neatly managed
                  <br />
                  from one place.
                </p>
              </div>
            </div>


            {/* One View */}
            <div className="schedule-card schedule-card--one-view">

              <div
                className="schedule-calendar-icon"
                aria-hidden="true"
              >
                <span className="schedule-calendar-icon__ring schedule-calendar-icon__ring--one" />

                <span className="schedule-calendar-icon__ring schedule-calendar-icon__ring--two" />

                <div className="schedule-calendar-icon__body">
                  <span />
                </div>
              </div>

              <div className="schedule-card__content">
                <h3>
                  One View,
                  <br />
                  Every Calendar
                </h3>

                <p>
                  Connect multiple calendars and
                  <br />
                  see your complete availability
                  <br />
                  in one place.
                </p>
              </div>
            </div>

          </div>


          {/* =============== CENTER COLUMN =============== */}

          <div className="schedule-bento__column">

            {/* Save Time */}
            <div className="schedule-card schedule-card--save">

              <div
                className="schedule-clock"
                aria-hidden="true"
              >
                <span className="schedule-clock__vertical" />

                <span className="schedule-clock__diagonal" />
              </div>

              <div className="schedule-card__content">
                <h3>Save Time</h3>

                <p>
                  Stop switching between
                  <br />
                  calendars and searching for the
                  <br />
                  right time.
                </p>
              </div>
            </div>


            {/* Woman Image */}
            <div className="schedule-photo schedule-photo--woman">
              <img
                src="/images/schedule-woman.webp"
                alt="Professional managing her calendar"
              />
            </div>

          </div>


          {/* =============== RIGHT COLUMN =============== */}

          <div className="schedule-bento__column">

            {/* Man Laptop Image */}
            <div className="schedule-photo schedule-photo--laptop">
              <img
                src="/images/schedule-man-laptop.webp"
                alt="Professional working with calendar"
              />
            </div>


            {/* Your Schedule Anywhere */}
            <div className="schedule-card schedule-card--anywhere">

              <div className="schedule-card__content">
                <h3>
                  Your
                  <br />
                  Schedule,
                  <br />
                  Anywhere.
                </h3>
              </div>

              <img
                className="schedule-anywhere-person"
                src="/images/schedule-man-phone.webp"
                alt="Professional checking his schedule"
              />

              <img
                className="schedule-anywhere-pattern"
                src="/images/arch-pattern.png"
                alt=""
                aria-hidden="true"
              />
            </div>


            {/* Easy For Everyone */}
            <div className="schedule-card schedule-card--everyone">

              <h3>
                Easy for
                <br />
                Everyone
              </h3>

              <p>
                Create a simple booking
                <br />
                experience for both your
                <br />
                team and the people
                <br />
                scheduling with you.
              </p>

            </div>

          </div>

        </div>


        {/* ================= CTA ================= */}

        <div className="schedule-simple__cta">
          <button type="button">
            Connect Your Calendars
          </button>
        </div>

      </div>
    </section>
  );
};

export default SchedulingSimpleSection;