import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import About from "./Components/About";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import data from "./profiledata";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <div className="min-h-screen py-10 lg:px-3 sm:px-5 dark:bg-app-dark rounded">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card name={data.name} social={data.social} />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Footer
          github={data.social.github}
          linkedin={data.social.linkedin}
          mail={data.social.email}
        />
      </div>
    </div>
  );
}

export default App;
