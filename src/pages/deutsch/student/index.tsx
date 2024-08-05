import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../../App.css";
import Questions from "../../../Components/Questionnaire/Questions";

function Student() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <div className="min-h-screen py-10 px-5 bg-deutsch-gold rounded">
      <div>
        <div
          className="bg-deutsch-rot rounded"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h1 className="text-4xl font-bold text-center text-white">
            Deutsch Lernen
          </h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
          className="bg-deutsch-rot"
        >
          <Questions />
        </div>
      </div>
    </div>
  );
}

export default Student;
