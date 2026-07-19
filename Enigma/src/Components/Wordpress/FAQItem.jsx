import { ChevronDown } from "lucide-react";

const FAQItem = ({ faq, openId, setOpenId }) => {
  const isOpen = openId === faq.id;

  const toggleAccordion = () => {
    setOpenId(isOpen ? null : faq.id);
  };

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">

      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center px-7 py-6 text-left"
      >
        <h3 className="font-semibold text-lg">
          {faq.question}
        </h3>

        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-7 pb-6 text-gray-600 leading-7">
            {faq.answer}
          </p>
        </div>
      </div>

    </div>
  );
};

export default FAQItem;