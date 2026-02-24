import { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const scriptSources = [
  "/assets/js/jquery-3.7.1.min.js",
  "/assets/js/bootstrap.min.js",
  "/assets/js/appear.min.js",
  "/assets/js/smooth-scroll.js",
  "/assets/js/gsap.min.js",
  "/assets/js/jquery.magnific-popup.min.js",
  "/assets/js/slick.min.js",
  "/assets/js/jquery.nice-select.min.js",
  "/assets/js/imagesloaded.pkgd.min.js",
  "/assets/js/isotope.pkgd.min.js",
  "/assets/js/wow.min.js",
  "/assets/js/script.js"
];

function App() {
  useEffect(() => {
    const scripts = [];

    const loadScripts = async () => {
      for (const src of scriptSources) {
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.defer = false;
        scripts.push(script);
        document.body.appendChild(script);
        await new Promise((resolve) => {
          script.onload = resolve;
          script.onerror = resolve;
        });
      }
    };

    loadScripts();

    return () => {
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <>
      <Header />
      <About />
      <Services />
      <Resume />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <div className="progress-wrap cursor-pointer">
        <i className="ri-arrow-up-double-line" />
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
}

export default App;
