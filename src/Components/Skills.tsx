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
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-xl mx-auto mt-8 gap-2">
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
  );
}

export default Skills;
