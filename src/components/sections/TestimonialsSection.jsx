const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Operations Manager",
    review:
      "Aeon Scheduler makes managing multiple calendars so much easier. I can see my availability in one place without constantly switching between calendars.",
    rating: 4.5,
    variant: "light",
  },
  {
    id: 2,
    name: "Daniel Carter",
    role: "Business Operations Lead",
    review:
      "Scheduling used to involve checking several calendars and coordinating back and forth. Aeon Scheduler has made the entire process much simpler.",
    rating: 4,
    variant: "teal",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Team Lead",
    review:
      "The ability to connect multiple calendars and manage everything from one place saves our team valuable time every day.",
    rating: 4.5,
    variant: "light",
  },
  {
    id: 4,
    name: "Michael Turner,",
    role: "Operations Director",
    review:
      "Aeon Scheduler gives us a clear picture of our availability and makes it much easier to find the right time for everyone.",
    rating: 4,
    variant: "teal",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="testimonial-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: fullStars }).map((_, index) => (
        <span className="testimonial-star" key={`full-${index}`}>
          ★
        </span>
      ))}

      {hasHalfStar && (
        <span className="testimonial-star testimonial-half-star">★</span>
      )}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What our customers say</h2>

          <p>
            See how Aeon Scheduler helps teams simplify scheduling, connect
            <br className="testimonials-desktop-break" />
            calendars, and stay organized.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className={`testimonial-card testimonial-card-${testimonial.variant}`}
            >
              <div className="testimonial-avatar" />

              <div className="testimonial-review">
                <p>{testimonial.review}</p>
              </div>

              <div className="testimonial-footer">
                <div className="testimonial-person">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>

                <StarRating rating={testimonial.rating} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;