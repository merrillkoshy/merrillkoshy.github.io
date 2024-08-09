import SkillCard from "./Card/Skill";

interface Skill {
  skillName: string;
  skillIcon: JSX.Element;
}
interface SkillsProps {
  skills: Skill[];
}

function Skills({ skills }: SkillsProps) {
  return (
    <div className="max-w-4xl mx-auto mt-5">
      <div className="flex flex-wrap">
        {skills.map((skill) => {
          return (
            <SkillCard
              skillName={skill.skillName}
              skillIcon={skill.skillIcon}
              key={skill.skillName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
