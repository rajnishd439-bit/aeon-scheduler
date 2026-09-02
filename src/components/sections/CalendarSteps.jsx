const CalendarSteps = () => {
  return (
    <section  id="features" className="calendar-steps-section">
      <div className="calendar-steps-layout">

        <div className="calendar-steps-header">
          <h2 className="calendar-steps-heading">
            From Multiple Calendars to
            <br />
            One Simple Schedule.
          </h2>

          <p className="calendar-steps-subtitle">
            Four straightforward steps to get your calendars connected and your
            <br />
            scheduling under control.
          </p>
        </div>

        <div className="calendar-steps-flow">

          {/* STEP 1 */}
          <div className="calendar-step calendar-step-one">
            <div className="calendar-step-visual calendar-step-visual-one">
              <img
                src="/images/calendar-step-1.png"
                alt="Connect your calendars"
              />
            </div>

            <div className="calendar-step-copy">
              <h3>Connect Your Calendars</h3>
              <p>
                Bring your calendars together and
                <br />
                manage them from one place.
              </p>
            </div>
          </div>

          {/* ARROW 1 */}
          <img
            src="/images/calendar-step-vector.png"
            alt=""
            className="calendar-step-arrow calendar-step-arrow-one"
          />

          {/* STEP 2 */}
          <div className="calendar-step calendar-step-two">
            <div className="calendar-step-visual calendar-step-visual-two">
              <img
                src="/images/calendar-step-2.png"
                alt="Set your preferences"
              />
            </div>

            <div className="calendar-step-copy">
              <h3>Set Your Preferences</h3>
              <p>
                Choose your availability, scheduling
                <br />
                preferences, and booking rules.
              </p>
            </div>
          </div>

          {/* ARROW 2 */}
          <img
  src="/images/Vector-1.png"
  alt=""
  className="calendar-step-arrow calendar-step-arrow-two"
/>

          {/* STEP 3 */}
          <div className="calendar-step calendar-step-three">
            <div className="calendar-step-visual calendar-step-visual-three">
              <img
                src="/images/calendar-step-3.png"
                alt="Share your availability"
              />
            </div>

            <div className="calendar-step-copy">
              <h3>Share Your Availability</h3>
              <p>
                Let others find a suitable time
                <br />
                without revealing unnecessary
                <br />
                calendar details.
              </p>
            </div>
          </div>

          {/* ARROW 3 */}
          <img
  src="/images/Vector-1.png"
  alt=""
  className="calendar-step-arrow calendar-step-arrow-three"
/>

          {/* STEP 4 */}
          <div className="calendar-step calendar-step-four">
            <div className="calendar-step-visual calendar-step-visual-four">
              <img
                src="/images/calendar-step-4.png"
                alt="Manage every booking"
              />
            </div>

            <div className="calendar-step-copy">
              <h3>Manage Every Booking</h3>
              <p>
                Keep your schedule organized
                <br />
                and manage appointments from
                <br />
                one place.
              </p>
            </div>
          </div>

        </div>

        <button className="calendar-steps-button">
          Get Started
        </button>

      </div>
    </section>
  );
};

export default CalendarSteps;