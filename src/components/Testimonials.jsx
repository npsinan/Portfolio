const testimonials = [
  {
    image: "/assets/images/testimonials/author1.jpg",
    text: "Working with Sinan NP on my book cover design was an exceptional experience. The final design exceeded all expectations.",
    name: "Muhammed Sakhalain",
    role: "Medical Doctor and Author"
  },
  {
    image: "/assets/images/testimonials/author2.jpg",
    text: "The website Sinan developed surpassed expectations in design quality, speed, and responsiveness across all devices.",
    name: "Shaz Hameed",
    role: "Professional UI/UX Designer"
  },
  {
    image: "/assets/images/testimonials/author3.jpg",
    text: "An outstanding blend of creativity and strategic branding. The final outcome elevated our brand presence.",
    name: "Safwan",
    role: "Business Owner and Entrepreneur"
  }
];

function Testimonials() {
  return (
    <section className="testimonials-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <p>Client Testimonials</p>
                <h2>What My Clients Say</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonials-wrap">
                {testimonials.map((item, idx) => (
                  <div className={`testimonial-item wow fadeInUp delay-0-${idx + 2}s`} key={item.name}>
                    <div className="author">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="text">{item.text}</div>
                    <div className="testi-des">
                      <h5>{item.name}</h5>
                      <span>{item.role}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="slider-arrows wow fadeInUp delay-0-6s text-center pt-40">
                <button className="testimonial-prev">
                  <i className="ri-arrow-left-s-line" />
                </button>
                <button className="testimonial-next">
                  <i className="ri-arrow-right-s-line" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
