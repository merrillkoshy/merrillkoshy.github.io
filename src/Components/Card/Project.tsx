import { FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  source: string;
}
interface ProjectProps {
  project: Project;
}
const ProjectCard = ({
  project: { title, description, tags, link, source },
}: ProjectProps) => {
  const IS_MOBILE_APP = description?.toLowerCase()?.includes("mobile");
  return (
    <div className="group w-full m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
      <a href={link} target="_blank">
        <h1 className="font-mono text-xl text-center font-bold text-typescript">
          {title} <FaExternalLinkAlt className="inline align-baseline" />
        </h1>
      </a>
      <hr className="my-4" />
      <div className="grid grid-cols-1">
        <img
          className={`${
            IS_MOBILE_APP ? "w-[35%]" : "w-full"
          } mx-auto shadow-xl hover:transition-transform ease-in-out duration-300 hover:scale-150`}
          src={source}
          alt={title}
        />

        <div className="mt-8 mb-1 flex flex-wrap justify-center items-center gap-2 col-span-2">
          <p className="font-bold">{description}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2 col-span-2">
        {tags.map((tag) => (
          <div className="px-4 py-1 border-2 rounded-full" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
