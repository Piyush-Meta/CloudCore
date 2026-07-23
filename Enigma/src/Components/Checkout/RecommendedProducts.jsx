import RecommendationCard from "./RecommendationCard";
import recommendedProducts from "./recommendedProducts.js";

const RecommendedProducts = () => {
  return (
    <section className="mt-16">

      <h2 className="mb-6 text-3xl font-bold">
        Recommended Add-ons
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {recommendedProducts.map((product) => (
          <RecommendationCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
};

export default RecommendedProducts;