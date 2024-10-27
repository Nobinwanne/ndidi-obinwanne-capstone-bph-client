import React from "react";
import { useState } from "react";

/**
 * @typedef {Object} Question
 * @property {string} id - The ID of the question.
 * @property {string} question - The question text.
 * @property {string[]} options - The options for the question.
 * @property {Object.<string, string>} [next] - Optional next steps object with key-value pairs.
 * @property {string|any} [next.default] - Default next step or fallback value.
 */

/**
 * @typedef {Object.<string, Object>} Prompts
 * @property {Question[]} questions - A list of questions related to the key.
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

  const handleQuestionSelect = () => {
    setQuestionIndex((prevQuestionIndex) => {
      if (prevQuestionIndex !== Prompts.Question.length - 1) {
        return prevQuestionIndex + 1;
      }
    });
  };

  return (
    <>
      <div className="max-w-2xl mx-auto gap-6 flex justify-between mt-32 overflow-y-scroll">
        <button onClick={handleQuestionSelect}>
          <div className="w-full text-left border border-zinc-200 dark:border-zinc-80 rounded-lg p-2 text-sm hover:bg-zinc-100 transition-colors flex flex-col">
            {Prompts.Question[questionIndex]?.question}
            <select>
              {Prompts.Question[questionIndex]?.options.map((option, key) => (
                <option key={key}>{option}</option>
              ))}
            </select>
          </div>
        </button>
      </div>
    </>
  );
};

export default PromptQuestions;
