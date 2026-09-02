import { useState } from "react";

const companySizes = [
  "1–10 employees",
  "11–100 employees",
  "101–5000 employees",
  "5000+ employees",
];

const GetStartedSection = () => {
  const [companySize, setCompanySize] = useState("1–10 employees");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="get-started-section">
      <div className="get-started-layout">

        {/* LEFT CONTENT */}
        <div className="get-started-content">
          <div className="get-started-copy">
            <h2 className="get-started-heading">
              Get Started
              <br />
              With
              <br />
              Aeon Scheduler
            </h2>

            <p className="get-started-description">
              Simplify your scheduling by connecting
              <br />
              multiple calendars and managing your
              <br />
              availability, bookings, and appointments
              <br />
              from one place.
            </p>
          </div>

          <button type="button" className="get-started-trial">
            Start my free trial
          </button>
        </div>

        {/* RIGHT FORM */}
        <form className="get-started-form" onSubmit={handleSubmit}>

          {/* NAME ROW */}
          <div className="get-started-name-row">
            <input
              type="text"
              placeholder="First Name"
              aria-label="First Name"
            />

            <input
              type="text"
              placeholder="Company Name"
              aria-label="Company Name"
            />
          </div>

          {/* EMAIL */}
          <input
            className="get-started-full-input"
            type="email"
            placeholder="Business email"
            aria-label="Business email"
          />

          {/* COMPANY SIZE */}
          <div className="get-started-company-size">
            <div className="get-started-company-label">
              Company Size
            </div>

            <div className="get-started-size-options">
              {companySizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`get-started-size-pill ${
                    companySize === size ? "active" : ""
                  }`}
                  onClick={() => setCompanySize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* SELECT ROW */}
          <div className="get-started-select-row">
            <div className="get-started-select-box">
              <label>How many calendars do you manage?</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option value="1">1 calendar</option>
                <option value="2-5">2–5 calendars</option>
                <option value="6+">6+ calendars</option>
              </select>
            </div>

            <div className="get-started-select-box">
              <label>What do you want to use Aeon for?</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option value="personal">Personal scheduling</option>
                <option value="team">Team scheduling</option>
                <option value="business">Business scheduling</option>
              </select>
            </div>
          </div>

          {/* AGREEMENT */}
          <p className="get-started-agreement">
            I agree to the{" "}
            <a href="#">Terms of Service</a>
            {" "}and{" "}
            <a href="#">Privacy Policy.</a>
          </p>

          {/* SUBMIT */}
          <button type="submit" className="get-started-submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetStartedSection;