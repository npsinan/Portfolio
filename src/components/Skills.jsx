import { assetUrl } from "../utils/assetUrl";

const skills = [
  { image: "assets/images/skills/skill1.png", label: "JavaScript" },
  { image: "assets/images/skills/skill2.png", label: "Illustrator" },
  { image: "assets/images/skills/skill3.png", label: "Photoshop" },
  { image: "assets/images/skills/skill4.png", label: "CSS" },
  { image: "assets/images/skills/skill5.png", label: "HTML" },
  { image: "assets/images/skills/skill6.png", label: "jQuery" },
  { image: "assets/images/skills/skill7.png", label: "React JS" },
  { image: "assets/images/skills/skill8.png", label: "Figma" }
];

function Skills() {
  return (
    <section id="skills" className="skill-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <p>Technical Expertise</p>
              <h2>Explore My Professional Skills and Technologies</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {skills.map((skill, idx) => (
            <div className="col-lg-3 col-sm-6 col-xs-12" key={skill.label}>
              <div className={`skill-item wow fadeInUp delay-0-${(idx % 4) + 2}s`}>
                <img src={assetUrl(skill.image)} alt={skill.label} />
                <h5>{skill.label}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
