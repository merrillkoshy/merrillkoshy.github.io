import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "../../../App.css";
import AddQuestionModal from "../../../Components/Questionnaire/AddQuestionModal";
import Questions from "../../../Components/Questionnaire/Questions";

function Lehrer() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  const [open, setOpen] = useState<boolean>(false);
  const openModal = () => {
    setOpen(true);
  };

  return (
    <div className="min-h-screen py-10 px-5 bg-deutsch-gold rounded">
      <div className="flex justify-center">
        {open && <div className="fixed inset-0 bg-black opacity-50"></div>}
        <Questions />
      </div>
      <button
        className="font-mono rounded bg-deutsch-rot text-white text-2xl font-[800] p-2 px-4 hover:bg-deutsch-rot transition-colors duration-300 hover:scale-125 hover:transition ease-in-out hover:text-3xl mt-3"
        onClick={openModal}
      >
        + Frage
      </button>
      <AddQuestionModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default Lehrer;
