import { useState } from "react";
import faqData from "./faqData";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="py-12 bg-blue-50">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-14">
          Everything you need to know about our managed WordPress hosting.
        </p>

        <div className="space-y-5">
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              openId={openId}
              setOpenId={setOpenId}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default FAQSection;