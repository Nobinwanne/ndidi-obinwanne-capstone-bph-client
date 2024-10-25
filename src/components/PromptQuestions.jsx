import React from "react";

/**
 * @typedef {Object} Question
 * @property {string} id - The ID of the question.
 * @property {string} question - The question text.
 * @property {string[]} options - The options for the question.
 * @property {Object.<string, string>} [next] - Optional next steps object with key-value pairs.
 * @property {string|any} [next.default] - Default next step or fallback value.
 */

/**
 * @typedef {Object} Scenario
 * @property {string} question - The main question of the scenario.
 * @property {Question[]} questions - A list of related questions in the scenario.
 */

/**
 * @typedef {Object.<string, Object>} PromptQuestion
 * @property {Scenario[]} scenarios - A list of scenarios related to the key.
 */

// Example of a PromptQuestion object
const prompts = {
  builder: {
    scenarios: [
      {
        question: "I WANT TO BUILD",
        questions: [
          {
            id: "already_have_lot",
            question: "DO YOU HAVE A LOT?",
            options: ["YES", "NO"],
            next: {
              YES: "yes",
              NO: "no",
            },
          },

          {
            id: "yes",
            question: "UNDERWRITE",
            options: [],
            next: {
              default: "location",
            },
          },

          {
            id: "location",
            question: "WHERE IS YOUR LOT LOCATED?",
            options: [],
            next: {
              default: "lot_size",
            },
          },

          {
            id: "lot_size",
            question: "WHAT IS THE SIZE OF YOUR LOT?",
            options: [],
            next: {
              default: "lot_cost",
            },
          },

          {
            id: "lot_cost",
            question: "WHAT IS THE COST OF YOUR LOT?",
            options: [],
            next: {
              default: "map",
            },
          },

          {
            id: "no",
            question: "SELECT A PROVINCE",
            options: [
              "Alberta",
              // "British Columbia",
              // "Manitoba",
              // "New Brunswick",
              // "Newfoundland and Labrador",
              // "Northwest Territories",
              // "Nova Scotia",
              // "Nunavut",
              // "Ontario",
              // "Prince Edward Island",
              // "Quebec",
              // "Saskatchewan",
              // "Yukon"
            ],
            next: {
              default: "select_city",
            },
          },

          {
            id: "select_city",
            question: "SELECT A CITY",
            options: [
              "Edmonton",
              "Calgary",
              "Strathcona County",
              "Sturgen County",
              "Parkland County",
              "Leduc County",
            ],
            next: {
              default: "what_to_build",
            },
          },

          {
            id: "what_to_build",
            question: "WHAT DO YOU WANT TO BUILD?",
            options: ["RESIDENTIAL", "COMMERCIAL"],
            next: {
              RESIDENTIAL: "kind_of_residential",
              COMMERCIAL: "kind_of_commercial",
            },
          },

          {
            id: "kind_of_commercial",
            question: "WHAT TYPE OF COMMERCIAL PROJECT?",
            options: [
              "MIXED USE",
              "RETAIL",
              "OFFICE",
              "HOSPITALITY",
              "INDUSTRIAL",
              "MULTI-FAMILY",
            ],
            next: {
              "MIXED USE": "where_to_build",
              OFFICE: "where_to_build",
              RETAIL: "where_to_build",
              HOSPITALITY: "where_to_build",
              INDUSTRIAL: "kind_of_industrial",
              "MULTI-FAMILY": "how_many_storeys",
            },
          },

          {
            id: "kind_of_industrial",
            question: "WHAT TYPE OF INDUSTRIAL PROJECT?",
            options: ["LIGHT", "HEAVY"],
            next: {
              default: "where_to_build",
            },
          },

          {
            id: "how_many_storeys",
            question: "HOW MANY STOREYS?",
            options: ["5", "6", "7", "8", "9", "10"],
            next: {
              default: "where_to_build",
            },
          },

          {
            id: "where_to_build",
            question: "WHERE DO YOU WANT TO BUILD?",
            options: ["CITY INFILL", "SUBURBS", "RURAL"],
            next: {
              default: "map",
            },
          },

          {
            id: "kind_of_residential",
            question: "WHAT TYPE OF RESIDENTIAL PROJECT?",
            options: ["LOW DENSITY", "MULTI-FAMILY"],
            next: {
              "MULTI-FAMILY": "storeys",
              "LOW DENSITY": "where_to_build",
            },
          },

          {
            id: "storeys",
            question: "HOW MANY STOREYS?",
            options: ["1", "2", "3", "4"],
            next: {
              default: "where_to_build",
            },
          },
        ],
      },
    ],
  },
};

// Main component to render the questions
const PromptsRenderer = () => {
  return (
    <div className="prompts px-4 py-5 sm:p-6">
      <h1>Questionnaire</h1>
      {Object.keys(prompts).map((key) => {
        const prompt = prompts[key];

        return (
          <div key={key}>
            <h2>{key}</h2>
            {prompt.scenarios.map((scenario, index) => (
              <div key={index}>
                <h3>Scenario: {scenario.question}</h3>
                {scenario.questions.map((question) => (
                  <div key={question.id} style={{ marginBottom: "20px" }}>
                    <p>
                      <strong>Question:</strong> {question.question}
                    </p>
                    <ul>
                      {question.options.map((option, optionIndex) => (
                        <li key={optionIndex}>{option}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default PromptsRenderer;
