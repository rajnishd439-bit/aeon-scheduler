export default function HeroSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section
      id="home"
      className="hero-section"
    >
      {/* HERO CONTENT */}
      <div className="hero-content">
        <div className="hero-copy">
          <h1 className="hero-heading">
            Make Every Appointment
            <br />
            Easier to Schedule
          </h1>

          <p className="hero-description">
            Streamline scheduling, reduce coordination effort, and give your
            team a simpler way to manage appointments and availability.
          </p>
        </div>

        {/* EMAIL FORM */}
        <div className="hero-form-wrapper">
          <form
            className="hero-form"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Work Email*"
              aria-label="Work Email"
              className="hero-input"
            />

            <button
              type="submit"
              className="hero-submit"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>

      {/* =====================================================
          HERO SCHEDULER VISUAL
      ===================================================== */}

      <div className="hero-visual">
        {/* LEFT BOOKING CARD */}
        <img
          src="/images/BookingCard.png"
          alt="Product demo booking details"
          className="hero-visual-booking"
        />

        {/* RIGHT RECORDING CARD */}
        <img
          src="/images/Card.png"
          alt="Meeting recording"
          className="hero-visual-recording"
        />

        {/* CENTER CALENDAR */}
        <img
          src="/images/Container (2).png"
          alt="Aeon Scheduler unified calendar"
          className="hero-visual-calendar"
        />
      </div>
    </section>
  );
}