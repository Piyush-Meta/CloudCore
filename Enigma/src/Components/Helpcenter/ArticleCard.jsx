import { ArrowRight, FileText } from "lucide-react";

const ArticleCard = ({ article }) => {
  return (
    <div className="group flex items-start justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
      <div className="flex gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-600">
          <FileText
            size={22}
            className="text-blue-600 group-hover:text-white"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {article.title}
          </h3>

          <p className="mt-2 text-gray-600">
            {article.description}
          </p>

          <p className="mt-4 text-sm font-medium text-gray-400">
            {article.readTime}
          </p>
        </div>
      </div>

      <ArrowRight
        size={22}
        className="mt-1 text-gray-400 transition group-hover:text-blue-600"
      />
    </div>
  );
};

export default ArticleCard;