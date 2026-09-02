const SeeScheduleSection = () => {
  return (
    <section className="see-schedule-section">
      <div className="see-schedule-layout">

        <img
          src="/images/schedule-pattern.png"
          alt=""
          className="see-schedule-pattern"
        />

        <div className="see-schedule-header">
          <h2 className="see-schedule-heading">
            See Your Schedule at a Glance
          </h2>

          <p className="see-schedule-description">
            A clean, organized view of every appointment, slot, and team member
            <br />
            — all in one place.
          </p>
        </div>

        <div className="see-schedule-calendar">
          <img
            src="/images/schedule-dashboard.png"
            alt="Aeon Scheduler calendar overview"
          />
        </div>

        <button className="see-schedule-button">
          Claim Your Free Docs
        </button>

      </div>
    </section>
  );
};

export default SeeScheduleSection;