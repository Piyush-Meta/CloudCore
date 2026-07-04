import { useState } from "react";

const buttons = [
  {
    id: "plans",
    title: "View Hosting Plans",
  },
  {
    id: "configure",
    title: "Configure Your Server",
  },
];

const HeroButtons = () => {
  const [activeButton, setActiveButton] = useState("plans");
  return (
    <div className="mt-10 flex gap-5">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => setActiveButton(button.id)}
          className={`rounded-xl border px-8 py-4 font-semibold transition-all duration-300
 ${
            activeButton === button.id
              ? "bg-blue-600 text-white border-blue-600 shadow-lg"
              : "border-gray-300 bg-white text-gray-900 hover:bg-gray-100"
          }
          `}
        >
          {button.title}
        </button>
      ))}
    </div>
  );
};

export default HeroButtons;