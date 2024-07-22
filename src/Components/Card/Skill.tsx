const SkillCard = ({
  skillName,
  skillIcon,
}: {
  skillName: string;
  skillIcon: JSX.Element;
}) => {
  return (
    <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
      {skillIcon}
      <p className="text-xl font-semibold mt-4">{skillName}</p>
    </div>
  );
};

export default SkillCard;
