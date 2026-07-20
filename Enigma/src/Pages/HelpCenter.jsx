import { Search } from "lucide-react";
import KnowledgeBase from "../Components/Helpcenter/KnowledgeBase";
import PopularArticles from "../Components/Helpcenter/PopularArticles";
const HelpCenter = () => {
  return (
    <section className="min-h-[80vh] bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-900">
          How can we help you today?
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-gray-600">
          Search our knowledge base, guides, and support articles to find
          answers to your questions.
        </p>

        {/* Search Box */}
        <div className="mt-12 w-full max-w-3xl">
          <div className="flex items-center rounded-2xl border border-gray-300 bg-white px-5 py-4 shadow-lg transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
            <Search
              size={22}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder=" How can we help you today?"
              className="ml-4 w-full bg-transparent text-lg outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>
      <KnowledgeBase />
      <PopularArticles />
    </section>
  );
};

export default HelpCenter;