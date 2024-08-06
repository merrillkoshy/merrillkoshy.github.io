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
      <div className="flex justify-center">
        <Questions />
      </div>
    </div>
  );
}

export default Student;
