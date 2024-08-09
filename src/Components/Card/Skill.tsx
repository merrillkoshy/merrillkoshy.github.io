interface SkillCardProps {
  skillName: string;
  skillIcon: JSX.Element;
}

const SkillCard = ({ skillName, skillIcon }: SkillCardProps) => {
  return (
    <div className="m-4 leading-0 w-32 flex-none text-center p-2 px-0 rounded-xl border-2 border-gray-300">
      {skillIcon}
      <p className="font-mono lg:text-xs md:text-lg font-semibold dark:text-vscode-yellow">
        {skillName}
      </p>
    </div>
  );
};

export default SkillCard;
