import KnowledgeCard from "./KnowledgeCard";
import { knowledgeCategories } from "./KnowledgeData";

const KnowledgeBase = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-900">
          Knowledge Base
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
          Browse our documentation by category and find detailed
          guides, tutorials and troubleshooting articles for every
          CloudCore service.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {knowledgeCategories.map((category) => (
          <KnowledgeCard
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </section>
  );
};

export default KnowledgeBase;