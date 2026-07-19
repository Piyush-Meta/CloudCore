import FAQSection from "../Components/Wordpress/FAQSection";
import TechnicalComparison from "../Components/Wordpress/TechnicalComparison";
import WordPressHero from "../Components/Wordpress/WordPressHero";
//import WordPressFeatures from "../Components/Wordpress/WordPressFeatures";
import WordPressPricing from "../Components/Wordpress/WordPressPricing";
//import WordPressCTA from "../Components/Wordpress/WordPressCTA";

const WordPressHosting = () => {
  return (
    <>
      <WordPressHero />
      <WordPressPricing />
      <TechnicalComparison />
      <FAQSection />
    </>
  );
};

export default WordPressHosting;