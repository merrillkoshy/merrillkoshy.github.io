import ProjectCard from "./Card/Project";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  source: string;
}
interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div>
      <h1 className="font-mono mt-8 text-2xl md:text-4xl text-center font-extrabold mb-5">
        My Projects
      </h1>
      <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
