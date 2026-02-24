const services = [
  {
    icon: "ri-layout-masonry-fill",
    title: "UI/UX Design Excellence",
    text: "Creating intuitive and visually engaging user interfaces that maximize usability and engagement."
  },
  {
    icon: "ri-code-box-fill",
    title: "Modern Web Development",
    text: "Building responsive websites and apps with React JS, JavaScript, HTML5, and CSS3."
  },
  {
    icon: "ri-palette-fill",
    title: "Brand Identity and Graphic Design",
    text: "Designing complete visual systems, logos, and brand assets that stand out."
  }
];

function Services() {
  return (
    <section id="service" className="services-area innerpage-single-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <p>Professional Services</p>
                <h2>Expert Web Development and Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((service, idx) => (
              <div className="col-lg-4 col-md-6" key={service.title}>
                <div className={`service-item wow fadeInUp delay-0-${(idx + 1) * 2}s`}>
                  <i className={service.icon} />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
