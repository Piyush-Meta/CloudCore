import ArticleCard from "./ArticleCard";
import { popularArticles } from "./PopularArticlesData";

const PopularArticles = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-900">
          Popular Articles
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
          Discover our most-read guides, tutorials and troubleshooting
          resources to help you get the most from CloudCore Pro.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {popularArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularArticles;