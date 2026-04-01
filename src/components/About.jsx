import { assetUrl } from "../utils/assetUrl";

const socialLinks = [
  {
    href: "https://www.behance.net/sinannp",
    icon: "ri-behance-fill",
    label: "Behance",
  },
  {
    href: "https://www.linkedin.com/in/sinan-np-4611b91a9/",
    icon: "ri-linkedin-fill",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/npsinan",
    icon: "ri-github-line",
    label: "GitHub",
  },
];

function About() {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="about-image-part wow fadeInUp delay-0-3s">
              <div className="about-image-part2">
                <img
                  src={assetUrl("assets/images/about/me.jpg")}
                  alt="Sinan NP"
                />
              </div>
              <h2>Sinan NP</h2>
              <p>
                Graphic designer, UI/UX specialist, and frontend developer with
                a focus on React JS and modern web technologies.
              </p>
              <div className="about-social text-center">
                <ul>
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.label}
                      >
                        <i className={link.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="about-content-part wow fadeInUp delay-0-2s">
              <p>Hello There!</p>
              <h1>
                Graphic designer, UI/UX specialist, and frontend developer with
                a focus on React JS and modern web technologies.
              </h1>
              <div className="adress-field">
                <ul>
                  <li>
                    <i className="ri-circle-fill" />
                    Available for Freelance Projects and Full-Time Opportunities
                  </li>
                </ul>
              </div>
              <div className="hero-btns">
                <a
                  href={assetUrl("assets/cv/Sinan_N_P.pdf")}
                  download="Sinan_N_P.pdf"
                  className="theme-btn1"
                >
                  Download CV <i className="ri-download-line" />
                </a>
              </div>
            </div>
            <div className="about-content-part-bottom wow fadeInUp delay-0-2s">
              <div className="company-list">
                <div
                  className="scroller"
                  data-direction="left"
                  data-speed="slow"
                >
                  <div className="scroller__inner">
                    <h4>Frontend Developer</h4>
                    <h4>Graphic Designer</h4>
                    <h4>UI/UX</h4>
                    <h4>Web Developer</h4>
                    <h4>Web Designer</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
