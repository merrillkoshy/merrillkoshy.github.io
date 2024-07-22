const SkillCard = ({
  skillName,
  skillIcon,
}: {
  skillName: string;
  skillIcon: JSX.Element;
}) => {
  return (
    <div className="m-4 lg:w-40 md:w-1 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
      {skillIcon}
      <p className="lg:text-xl md:text-lg font-semibold mt-4 dark:text-vscode-yellow">
        {skillName}
      </p>
    </div>
  );
};

export default SkillCard;
