import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * @typedef {Object} Question
 * @property {string} id
 * @property {string} question
 * @property {string[]} options
 * @property {Object.<string, string>} [next]
 * @property {string|any} [next.default]
 */

/**
 * @typedef {Object.<string, Object>} Prompts
 * @property {Question[]} questions
 */

const Prompts = {
  Question: [
    {
      id: "pick_province",
      question: "Pick a Province",
      options: ["Alberta", "Ontario", "Nova Scotia"],
      next: {
        default: "pick_city",
      },
    },

    {
      id: "pick_city",
      question: "Pick a City",
      options: [
        "Edmonton",
        "Calgary",
        "Leduc County",
        "Starthcona County",
        "Parkland County",
        "Sturgeon County",
      ],
      next: {
        default: "category",
      },
    },
    {
      id: "category",
      question: "What do you want to Build?",
      options: ["Residential", "Commercial", "Industrial"],
      next: {
        default: "development_type",
      },
    },
    {
      id: "development_type",
      question: "What type of development is this?",
      options: ["City Infill", "Rural", "Urban"],
      next: {
        default: "",
      },
    },
  ],
};

const PromptQuestions = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const navigate = useNavigate();

  const handleQuestionSelect = () => {
    setQuestionIndex((prevQuestionIndex) => {
      if (prevQuestionIndex !== Prompts.Question.length - 1) {
        return prevQuestionIndex + 1;
      }
      navigate("/listings");
      // return prevQuestionIndex;
    });
  };

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const optionsLength = Prompts.Question[questionIndex]?.options.length;

    if (selectedIndex === optionsLength - 1) {
      // navigate("/listings");
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto gap-6 flex justify-between mt-20 overflow-y-scroll">
        <button onClick={handleQuestionSelect}>
          <div className="w-full text-left border border-zinc-200 dark:border-zinc-80 rounded-lg p-2 text-sm hover:bg-zinc-100 transition-colors flex">
            {Prompts.Question[questionIndex]?.question}
          </div>
        </button>
        <div className="max-w-2xl mx-auto gap-6 flex justify-between mt-10 overflow-y-scroll">
          <select id="options" onChange={handleSelectChange}>
            {Prompts.Question[questionIndex]?.options.map((option, key) => (
              <option key={key}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default PromptQuestions;
