const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/ forever",
    seat: "",
    features: [
      "50 bookings included",
      "1 event type",
      "1 seat",
    ],
    button: "Downgrade via portal",
  },
  {
    name: "Individual",
    price: "$4",
    period: "/ month",
    seat: "+ $4 / seat",
    features: [
      "Unlimited bookings",
      "3 event types",
      "1 seat included",
    ],
    button: "Upgrade to Individual",
  },
  {
    name: "Pro",
    price: "$6",
    period: "/ month",
    seat: "+ $4 / seat",
    features: [
      "Unlimited bookings",
      "5 event types",
      "3 seats included",
      "Collect payments",
      "Multiple accounts per integration",
    ],
    button: "Upgrade to Pro",
    
  },
  {
    name: "Teams",
    price: "$12",
    period: "/ month",
    seat: "+ $8 / seat",
    features: [
      "Unlimited bookings",
      "5 event types per user",
      "10 seats included",
      "Custom slot scheduling",
      "Analytics dashboard",
      "Collect payments",
      "Manual booking wizard",
      "Multiple accounts per integration",
    ],
    button: "Upgrade to Teams",
  },
  {
    name: "Business",
    price: "$18",
    period: "/ month",
    seat: "+ $8 / seat",
    features: [
      "Unlimited bookings",
      "Unlimited event types",
      "25 seats included",
      "Custom slot scheduling",
      "Analytics dashboard",
      "Collect payments",
      "Manual booking wizard",
      "Multiple accounts per integration",
    ],
    button: "Current Plan",
    badge: "CURRENT",
  },
];

const usageData = [
  {
    label: "Bookings",
    value: "0 / Unlimited",
    progress: 100,
  },
  {
    label: "Event Types",
    value: "1 / Unlimited",
    progress: 100,
  },
  {
    label: "Seats",
    value: "2 / 25",
    progress: 8,
  },
];
const PricingSection = () => {
  return (
    <section  id="pricing" className="pricing-section">
      <div className="pricing-container">

        {/* HEADER */}
        <div className="pricing-header">
          <h2 className="pricing-heading">
            Choose the Plan That Fits Your
            <br />
            Scheduling Needs
          </h2>

          <p className="pricing-description">
            Start with the essentials and upgrade as your scheduling needs grow.
            Choose
            <br />
            the plan that works best for you and your team.
          </p>
        </div>

        {/* USAGE BAR */}
        <div className="pricing-usage-bar">
          {usageData.map((item) => (
            <div className="pricing-usage-item" key={item.label}>
              <div className="pricing-usage-text">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>

              <div className="pricing-progress-track">
                <span
                  className="pricing-progress-value"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* PRICING CARDS */}
        <div className="pricing-cards">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`pricing-card ${
                plan.featured ? "pricing-card-featured" : ""
              }`}
            >
              <div className="pricing-card-top">
                <div className="pricing-plan-heading-row">
                  <h3 className="pricing-plan-name">{plan.name}</h3>

                  {plan.badge && (
                    <span className="pricing-badge">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="pricing-price-row">
                  <span className="pricing-price">
                    {plan.price}
                  </span>

                  <span className="pricing-period">
                    {plan.period}
                  </span>
                </div>

                {plan.seat && (
                  <p className="pricing-seat-price">
                    {plan.seat}
                  </p>
                )}

                <div className="pricing-divider" />

                <h4 className="pricing-included-title">
                  What's included
                </h4>

                <ul className="pricing-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="pricing-check">
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="pricing-card-button"
              >
                {plan.button}
              </button>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="pricing-bottom-cta">
          <div className="pricing-bottom-copy">
            <h3>Need More Flexibility?</h3>

            <p>
              Choose a plan that fits your workflow today and scale as your
              scheduling needs grow.
            </p>
          </div>

          <button type="button" className="pricing-get-started">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;