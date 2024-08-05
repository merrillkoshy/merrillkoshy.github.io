import React from "react";
import { useGetSectionsByLevelQuery } from "../../api/api-deutsch";

const Questions: React.FC = () => {
  const { data: sections } = useGetSectionsByLevelQuery("A1");

  const [selectedOption, setSelectedOption] = React.useState<string>();

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-[800px] flex flex-col space-y-4">
      {sections?.map((section) => (
        <div
          key={section.id}
          className="bg-deutsch-schwarz p-4 shadow-md rounded-md"
        >
          <h2 className="text-lg font-bold text-white text-left">
            {section.section}
          </h2>
          {section?.questions?.map((question, index) => (
            <div
              key={question.id}
              className="bg-deutsch-schwarz p-4 shadow-md rounded-md text-left"
            >
              <h3 className="text-lg font-bold text-white">
                {index + 1} . {question.question}
              </h3>
              {question?.options?.map((option) => (
                <div
                  key={option?.id}
                  className="flex items-center mt-2 text-white"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-500"
                    checked={selectedOption === option?.option}
                    onChange={() => handleOptionChange(option?.option)}
                  />
                  <span className="ml-2">{option?.option}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Questions;
