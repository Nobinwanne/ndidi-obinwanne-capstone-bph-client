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
  const [currentQuestionId, setCurrentQuestionId] = useState("");
  const [answers, setAnswers] = useState({
    city: "",
    category: "",
  });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [optionIndex, setOptionIndex] = useState(0);

  const handleQuestionSelect = () => {
    setQuestionIndex((prevQuestionIndex) => {
      if (prevQuestionIndex !== Prompts.Question.length - 1) {
        return prevQuestionIndex + 1;
      }
    });
  };

  const handleOptionSelect = () => {
    setOptionIndex((prevOptionIndex) => {
      if (prevOptionIndex !== Prompts.Question.options.length - 1) {
        return prevOptionIndex + 1;
      }
    });
  };

  return (
    <>
      <div className="max-w-2xl mx-auto gap-6 flex justify-between mt-32 overflow-y-scroll">
        <button
          onClick={handleQuestionSelect}
          className="w-full text-left border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-500 rounded-lg p-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex flex-col"
        >
          <span className="font-medium">Click to find listings</span>
          <span className="text-zinc-500 dark:text-zinc-400">
            Find Listings
          </span>
        </button>
        <button className="w-full text-left border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-500 rounded-lg p-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex flex-col">
          <span className="font-medium">Click to find vacant lots</span>
          <span className="text-zinc-500 dark:text-zinc-400">
            Find Vacant Lots
          </span>
        </button>
      </div>

      {/* <div className="max-w-2xl mx-auto gap-6 flex justify-between mt-32 overflow-y-scroll">
        <button
          className="w-full text-left border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-500 rounded-lg p-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex flex-col"
          onClick={handleOptionSelect}
        >
          <span className="w-full text-left border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-500 rounded-lg p-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex flex-col">
            {Prompts.Question[questionIndex]?.question}
          </span>
          <span className="text-zinc-500 dark:text-zinc-400">
            Find Listings
          </span>
        </button>
      </div> */}
    </>
  );
};
//       {Object.keys(prompts).map((key) => {
//         const prompt = prompts[key];
//         console.log("prompt is: ", prompt);
//         console.log("key is: ", key);
//         console.log("prompts scenarios is: ", prompt.scenario);

//         return (
//           <div key={key}>
//             <h2>{key}</h2>

//             {/* {prompt.scenarios[0]?.map((scenario, index) => (
//               <div key={index}>
//                 <h3>Scenario: {scenario.question}</h3>
//                 {scenario.questions.map((question) => (
//                   <div key={question.id} style={{ marginBottom: "20px" }}>
//                     <p>
//                       <strong>Question:</strong> {question.question}
//                     </p>
//                     <ul>
//                       {question.options.map((option, optionIndex) => (
//                         <li key={optionIndex}>{option}</li>
//                       ))}
//                     </ul>
//                     <button onClick={handleSelection}> Test </button>
//                   </div>
//                 ))} */}
//             {/* </div>
//             ))} */}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default PromptQuestions;
