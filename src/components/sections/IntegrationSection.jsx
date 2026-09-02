const integrations = [
  {
    name: "Google Calendar",
    icon: "/images/google-calendar.png",
    className: "integration-card-google",
  },
  {
    name: "Zoom",
    icon: "/images/zoom.png",
    className: "integration-card-zoom",
  },
  {
    name: "Microsoft Outlook",
    icon: "/images/outlook.png",
    className: "integration-card-outlook",
  },
  {
    name: "Stripe",
    icon: "/images/stripe.png",
    className: "integration-card-stripe",
  },
  {
    name: "Gmail",
    icon: "/images/gmail.png",
    className: "integration-card-gmail",
  },
  {
    name: "Teams",
    icon: "/images/teams.png",
    className: "integration-card-teams",
  },
  {
    name: "G-Meet",
    icon: "/images/google-meet.png",
    className: "integration-card-meet",
  },
  {
    name: "Slack",
    icon: "/images/slack.png",
    className: "integration-card-slack",
  },
  {
    name: "Notion",
    icon: "/images/notion.png",
    className: "integration-card-notion",
  },
];

const IntegrationSection = () => {
  return (
    <section className="integration-section">
      <div className="integration-layout">

        <div className="integration-copy">
          <div className="integration-eyebrow">
            Integration
          </div>

          <h2 className="integration-heading">
            Fits into your
            <br />
            existing workflow.
          </h2>

          <p className="integration-description">
            Aeon Scheduler connects scheduling with
            <br />
            the tools your team already uses.
          </p>
        </div>

        <div className="integration-tools">
          {integrations.map((item) => (
            <div
              key={item.name}
              className={`integration-card ${item.className}`}
            >
              <img
                src={item.icon}
                alt=""
                className="integration-card-icon"
              />

              <span>{item.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IntegrationSection;