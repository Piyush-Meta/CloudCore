import { ArrowRight } from "lucide-react";

const KnowledgeCard = ({ category }) => {
  const Icon = category.icon;

  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-600">
        <Icon
          size={28}
          className="text-blue-600 group-hover:text-white"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-gray-900">
        {category.title}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {category.articles} Articles
      </p>

      <p className="mt-5 leading-7 text-gray-600">
        {category.description}
      </p>

      <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3">
        Explore
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default KnowledgeCard;