import { assetUrl } from "../utils/assetUrl";

const projects = [
  {
    image: "assets/images/projects/work1.jpg",
    title: "Modern Online Course Learning Platform",
    subTitle: "Website Development",
    href: "https://npsinan.github.io/internsglobal/",
    classes: "item branding game"
  },
  {
    image: "assets/images/projects/work2.jpg",
    title: "Professional Product Package Design",
    subTitle: "Graphic Design",
    href: "assets/images/projects/work2.jpg",
    classes: "item design marketing graphics"
  },
  {
    image: "assets/images/projects/work3.jpg",
    title: "Business Auditing Services Website",
    subTitle: "Corporate Website",
    href: "https://www.bmsaglobal.com",
    classes: "item game branding"
  },
  {
    image: "assets/images/projects/work4.jpg",
    title: "Creative Book Cover Design",
    subTitle: "Print Design",
    href: "assets/images/projects/work4.jpg",
    classes: "item design game"
  },
  {
    image: "assets/images/projects/work5.jpg",
    title: "Complete E-Commerce Shopping Platform",
    subTitle: "E-Commerce Development",
    href: "https://npsinan.github.io/E-commerce-Website/main.html",
    classes: "item branding game"
  },
  {
    image: "assets/images/projects/work6.jpg",
    title: "Custom Website Development Design",
    subTitle: "Web Design",
    href: "assets/images/projects/work6.jpg",
    classes: "item design marketing graphics"
  }
];

function Projects() {
  return (
    <section id="works" className="projects-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <h2>Featured Projects</h2>
                <p>Explore my web development and design projects.</p>
              </div>
            </div>
          </div>
          <ul className="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s">
            <li data-filter="*" className="current">
              Show All
            </li>
            <li data-filter=".branding">Website</li>
            <li data-filter=".design">Design</li>
          </ul>
          <div className="row project-masonry-active">
            {projects.map((project, idx) => (
              <div className={`col-lg-4 col-md-6 ${project.classes}`} key={project.title}>
                <div className={`project-item style-two wow fadeInUp delay-0-${idx + 3}s`}>
                  <div className="project-image">
                    <img src={assetUrl(project.image)} alt={project.title} />
                    <a
                      href={project.href.startsWith("http") ? project.href : assetUrl(project.href)}
                      className="details-btn work-popup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-arrow-right-up-line" />
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">{project.subTitle}</span>
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
