const experience = [
  {
    years: "2025 - 2026",
    place: "AL REEF, Ajman, U.A.E.",
    role: "Graphic Designer specializing in hoardings, display stands, and promotional posters"
  },
  {
    years: "2023 - 2025",
    place: "IKNASOFT, Kannur",
    role: "Frontend Developer focused on React JS, JavaScript, and responsive apps"
  },
  {
    years: "2022 - 2023",
    place: "Arena Animation, Kannur",
    role: "Professional Graphic Designer working with Adobe Creative Suite"
  }
];

const education = [
  {
    years: "2021 - 2023",
    title: "Web Design and Development Professional Course",
    detail: "Arena Animation, Aptech University - HTML, CSS, JavaScript, React JS"
  },
  {
    years: "2020 - 2021",
    title: "Professional Graphic Design Certification",
    detail: "Arena Animation, Aptech University - Photoshop, Illustrator, InDesign"
  },
  {
    years: "2018 - 2020",
    title: "Senior Secondary Education",
    detail: "GHSS MORAZHA"
  }
];

function ResumeColumn({ heading, items, titleKey, detailKey }) {
  return (
    <div className="single-resume">
      <h2>{heading}</h2>
      <div className="experience-list">
        {items.map((item) => (
          <div className="resume-item wow fadeInUp delay-0-3s" key={`${item.years}-${item[titleKey]}`}>
            <div className="icon">
              <i className="ri-book-line" />
            </div>
            <div className="content">
              <span className="years">{item.years}</span>
              <h4>{item[titleKey]}</h4>
              <span className="company">{item[detailKey]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Resume() {
  return (
    <section id="resume" className="resume-area">
      <div className="container">
        <div className="resume-items">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <ResumeColumn heading="Professional Experience" items={experience} titleKey="place" detailKey="role" />
            </div>
            <div className="col-xl-6 col-md-12">
              <ResumeColumn heading="Educational Background" items={education} titleKey="title" detailKey="detail" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
