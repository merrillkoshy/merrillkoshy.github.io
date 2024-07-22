import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

function Footer({
  github,
  linkedin,
  mail,
}: {
  github: string;
  linkedin: string;
  mail: string;
}) {
  return (
    <div className="text-center w-full mt-16">
      <p className="text-gray-600 mb-4 dark:text-vscode-green">
        // Ah, I wish I could show you all as some of them are under lock and
        key 🤐 Let's meet up, I can explain what I did for the 👽
      </p>
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
          href={mail}
        >
          <FaRegEnvelope />
          <span className="sr-only">Gmail</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
