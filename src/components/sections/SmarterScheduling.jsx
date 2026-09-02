import {
  Layers3,
  CalendarDays,
  Check,
  Calculator,
  Clock3,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Layers3,
    title: "Multiple Calendar Connections",
    description:
      "Connect multiple calendars and manage your availability from one place.",
  },
  {
    icon: CalendarDays,
    title: "Unified Availability",
    description:
      "See your combined availability without checking each calendar separately.",
  },
  {
    icon: Check,
    title: "Conflict-Free Scheduling",
    description:
      "Reduce double bookings by considering events across your connected calendars.",
  },
  {
    icon: Calculator,
    title: "Easy Appointment Management",
    description:
      "Create, manage, reschedule, and track appointments with less effort.",
  },
  {
    icon: Clock3,
    title: "Flexible Availability",
    description:
      "Set the times and scheduling preferences that work for you.",
  },
  {
    icon: Zap,
    title: "Simple Booking Experience",
    description:
      "Make it easy for people to find and book a suitable time.",
  },
];

export default function SmarterScheduling() {
  return (
    <section className="smarter-scheduling-section">
      <div className="smarter-scheduling-inner">
        <div className="smarter-scheduling-header">
          <h2 className="smarter-scheduling-title">
            Everything You Need for
            <br />
            Smarter Scheduling
          </h2>

          <p className="smarter-scheduling-subtitle">
            Purpose-built tools that remove scheduling
            <br />
            complexity without adding new ones.
          </p>
        </div>

        <div className="smarter-scheduling-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="smarter-scheduling-card"
                key={feature.title}
              >
                <div className="smarter-scheduling-icon-box">
                  <Icon
                    className="smarter-scheduling-icon"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="smarter-scheduling-card-title">
                  {feature.title}
                </h3>

                <p className="smarter-scheduling-card-description">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}