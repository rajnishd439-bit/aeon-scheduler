import {
  BriefcaseBusiness,
  Layers3,
  Users,
  Headphones,
} from "lucide-react";

const teamCards = [
  {
    icon: BriefcaseBusiness,
    eyebrow: "Client Scheduling",
    title: "Service Businesses",
    description:
      "Manage client appointments, reduce no-shows, and keep your team's calendar full and organized.",
  },
  {
    icon: Layers3,
    eyebrow: "Internal Coordination",
    title: "Operations Teams",
    description:
      "Coordinate internal meetings, resource allocation, and team schedules from a single interface.",
  },
  {
    icon: Users,
    eyebrow: "Talent Management",
    title: "HR & Recruitment",
    description:
      "Schedule interviews, onboarding sessions, and reviews with candidates and hires efficiently.",
  },
  {
    icon: Headphones,
    eyebrow: "Customer Success",
    title: "Customer-Facing Teams",
    description:
      "Let customers book support, demos, or consultations directly — no email chains required.",
  },
];

export default function BuiltForTeamsSection() {
  return (
    <section className="built-teams-section">
      <div className="built-teams-layout">

        <div className="built-teams-content">
          <span className="built-teams-eyebrow">
            Built for Teams
          </span>

          <h2 className="built-teams-heading">
            Designed for Teams
            <br />
            That Value Time.
          </h2>

          <p className="built-teams-description">
            Aeon Scheduler keeps teams aligned when every meeting and available
            hour matters. Connect multiple calendars, get one clear view of
            availability, simplify coordination, and spend less time on
            back-and-forth.
          </p>

          <button className="built-teams-button">
            Explore All Features
          </button>
        </div>

        <div className="built-teams-grid">
          {teamCards.map(({ icon: Icon, eyebrow, title, description }) => (
            <article className="built-teams-card" key={title}>
              <div className="built-teams-icon-box">
                <Icon
                  className="built-teams-icon"
                  strokeWidth={1.8}
                />
              </div>

              <p className="built-teams-card-eyebrow">
                {eyebrow}
              </p>

              <h3 className="built-teams-card-title">
                {title}
              </h3>

              <p className="built-teams-card-description">
                {description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}