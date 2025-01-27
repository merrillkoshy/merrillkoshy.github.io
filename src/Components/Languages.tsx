import { Fragment } from "react/jsx-runtime";

interface Language {
  name: string;
  description: string;
  proficiency: string;
  certification: string;
  icon?: string;
  issuer?: string;
  grade?: string;
}
interface LanguagesProps {
  languages: Language[];
}

const Projects = ({ languages }: LanguagesProps) => {
  return (
    <div>
      <h1 className="font-mono mt-8 text-2xl md:text-4xl text-center font-extrabold mb-5">
        Languages
      </h1>
      <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-1">
        {languages.map((language) => (
          <div
            className="group bg-white border-2 dark:border-0 border-gray-300 dark:bg-gray-800 p-4 rounded-lg dark:shadow-md"
            key={language.name}
          >
            <h1 className="text-xl font-bold dark:text-white">
              {language.name} {language?.icon}
            </h1>
            <p className="text-gray-800 dark:text-gray-300">
              {language.description}
            </p>
            {language?.grade && (
              <p className="text-gray-800 dark:text-gray-300">
                Grade: {language.grade}
              </p>
            )}
            <p className="text-gray-800 dark:text-gray-300">
              Proficiency: {language.proficiency}
            </p>

            {language?.issuer && (
              <Fragment>
                <a
                  href={language.certification}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                >
                  View Certification
                </a>
                <p className="text-gray-800 dark:text-gray-300">
                  Issuer: {language.issuer}
                </p>
              </Fragment>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
