import ProjectCard from "./Card/Project";

const Projects = ({
  projects,
}: {
  projects: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    source: string;
  }[];
}) => {
  return (
    <div>
      <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold mb-5">
        My Projects
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
