const contacts = [
  { icon: "ri-map-pin-line", title: "Location", value: "Dubai, United Arab Emirates" },
  { icon: "ri-phone-line", title: "Phone Number", value: "+971 564726984" },
  { icon: "ri-mail-line", title: "Email Address", value: "sinu007j@mail.com" }
];

function Contact() {
  return (
    <section id="contact" className="contact-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <p>Get In Touch</p>
                <h2>Contact Me For Your Next Project</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-content-part wow fadeInUp delay-0-2s">
                {contacts.map((item, idx) => (
                  <div className="single-contact wow fadeInUp" data-wow-delay={`.${(idx + 1) * 2}s`} key={item.title}>
                    <div className="contact-icon">
                      <i className={item.icon} />
                    </div>
                    <h2>{item.title}:</h2>
                    <p>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-8">
              <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form id="contactForm" className="contactForm" name="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" className="form-control" placeholder="Name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" className="form-control" placeholder="hello@websitename.com" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" className="form-control" rows="4" placeholder="Write your message" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn2">
                          Send Me Message <i className="ri-whatsapp-line" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
