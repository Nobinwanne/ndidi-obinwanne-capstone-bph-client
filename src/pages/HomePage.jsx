import Card from "../components/Card";
import PromptQuestions from "../components/PromptQuestions";

function HomePage({ handleSelection }) {
  return (
    <>
      <div className="Card max-w-2xl mx-auto mt-8">
        <Card content="Welcome to Ballpark Housing! We help Real Estate Developers find lots and build faster so that we can all find affordable housing." />
      </div>
      <div className="max-w-2xl mx-auto gap-6 flex justify-between mt-32 overflow-y-scroll">
        <button className="w-full text-left border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-500 rounded-lg p-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex flex-col">
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
      <PromptQuestions />
    </>
  );
}

export default HomePage;
