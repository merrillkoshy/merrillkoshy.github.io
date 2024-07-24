import { saveAs } from "file-saver";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import profile from "../../assets/profile.png";

function Card({
  name,

  social: { github, linkedin, email },
}: {
  name: string;

  social: { github: string; linkedin: string; email: string };
}) {
  const saveFile = () => {
    saveAs("/Merrill-FS-developer.pdf", "Merrill-FS-developer.pdf");
  };
  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <p className="font-mono text-2xl md:text-5xl font-bold text-center text-typescript dark:text-vscode-yellow">
          {name}
        </p>
      </div>
      <div className="flex flex-col justify-center max-w-md mx-auto bg-white rounded-xl p-5 dark:bg-vscode-background ">
        <div className="">
          <img
            className="border-4 border-gelb w-32 mx-auto shadow-xl rounded-full hover:transition-transform ease-in-out duration-500 hover:rounded-md hover:scale-150 hover:border-8 hover:border-typescript"
            src={profile}
            alt={name}
          />
        </div>
        <div className="text-center mt-10">
          <span>
            <ReactTypingEffect
              typingDelay={500}
              speed={50}
              eraseDelay={500}
              eraseSpeed={50}
              className="font-mono text-xl font-semibold text-center text-typescript dark:text-vscode-yellow mb-6"
              text={[
                "Full Stack Developer",
                "MERNstack Developer",
                "JAMstack Developer",
                "Mobile Apps Developer",
                "Graphic Designer",
                "Strategist",
                "Passionate coder",
              ]}
              staticText="I'm a 👨🏻‍💻 "
            />
          </span>
          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 dark:text-white dark:hover:bg-white dark:hover:text-gray-800"
              href={github}
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-linkedin-50 hover:bg-linkedin-500 rounded-full hover:text-white transition-colors duration-300"
              href={linkedin}
            >
              <FaLinkedin />
              <span className="sr-only">Linkedin</span>
            </a>

            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gmail-50 hover:bg-gmail-500 rounded-full hover:text-white transition-colors duration-300"
              href={email}
            >
              <FaRegEnvelope />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <div className="flex align-center justify-center mt-4">
            <q className="font-mono blockquote dark:text-vscode-green">
              Many hats. One passion. Stackin' it up since 2016.
            </q>
          </div>
          <div className="d-flex flex-column py-5">
            <button
              className="font-mono rounded bg-typescript text-white text-2xl font-[800] p-2 px-4 hover:bg-typescript-dark transition-colors duration-300 hover:scale-125 hover:transition ease-in-out hover:text-3xl"
              onClick={saveFile}
            >
              My Résumé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
