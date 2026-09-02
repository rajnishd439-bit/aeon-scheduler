import { useState } from "react";

const faqData = [
  {
    question: "What is Aeon Scheduler?",
    answer:
      "Aeon Scheduler is a centralized scheduling platform that helps teams efficiently manage meetings, bookings, availability, and scheduling workflows with ease, while improving coordination, reducing scheduling conflicts, and keeping everyone organized.",
  },
  {
    question: "Who is Aeon Scheduler built for?",
    answer:
      "Aeon Scheduler is built for teams, service businesses, operations teams, recruiters, and customer-facing professionals who need a simpler way to manage scheduling.",
  },
  {
    question: "How does multi-calendar connection work?",
    answer:
      "Connect your supported calendars in one place so Aeon Scheduler can provide a clear view of availability and help prevent scheduling conflicts.",
  },
  {
    question: "Can multiple team members use Aeon Scheduler?",
    answer:
      "Yes. Multiple team members can coordinate schedules and manage availability from one centralized scheduling experience.",
  },
  {
    question: "Can I create different event types?",
    answer:
      "Yes. You can create different event types based on your scheduling needs, availability, duration, and booking preferences.",
  },
  {
    question: "Does Aeon Scheduler support integrations?",
    answer:
      "Yes. Aeon Scheduler works with commonly used calendar, communication, and productivity tools.",
  },
  {
    question: "Can I manage availability and appointments?",
    answer:
      "Yes. You can manage availability, scheduling preferences, bookings, and appointments from one place.",
  },
  {
    question: "Can I track scheduling activity?",
    answer:
      "Yes. Aeon Scheduler helps you keep scheduling activity organized and makes it easier to understand upcoming bookings and availability.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="faqs" className="scheduler-faq-section" >
      <div className="scheduler-faq-layout">
        <h2 className="scheduler-faq-heading">
          Frequently Asked Questions
        </h2>

        <div className="scheduler-faq-list">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className={`scheduler-faq-item ${
                  isOpen ? "scheduler-faq-item-open" : ""
                }`}
              >
                <button
                  type="button"
                  className="scheduler-faq-question"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <svg
                    className={`scheduler-faq-arrow ${
                      isOpen ? "scheduler-faq-arrow-open" : ""
                    }`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="scheduler-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;