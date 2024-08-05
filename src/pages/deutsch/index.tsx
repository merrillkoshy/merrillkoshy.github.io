import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../App.css";

function Deutsch() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <div className="min-h-screen py-10 px-5 bg-deutsch-gold rounded">
      <h2 className="text-lg font-bold mb-4">Ich bin ein:</h2>
      <div className="flex items-center justify-center gap-2">
        <button
          className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md"
          onClick={() => window.open("/deutsch/lehrer", "_self")}
        >
          Lehrer
        </button>
        <button
          className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md"
          onClick={() => window.open("/deutsch/student", "_self")}
        >
          Student
        </button>
      </div>
    </div>
  );
}

export default Deutsch;
