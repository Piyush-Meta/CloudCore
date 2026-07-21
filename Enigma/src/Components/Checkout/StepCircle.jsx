import { Check } from "lucide-react";

const StepCircle = ({
  title,
  index,
  currentStep,
  isLast,
}) => {
  const completed = index < currentStep;
  const active = index === currentStep;

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className={`
            flex h-10 w-10 items-center justify-center rounded-full
            transition-all duration-300
            ${
              completed
                ? "bg-blue-600 text-white"
                : active
                ? "border-2 border-blue-600 bg-white text-blue-600"
                : "border border-gray-300 bg-white text-gray-500"
            }
          `}
        >
          {completed ? (
            <Check size={18} />
          ) : (
            <span className="text-sm font-semibold">
              {index + 1}
            </span>
          )}
        </div>

        <p
          className={`
            mt-2 text-sm font-medium
            ${
              active
                ? "text-blue-600"
                : "text-gray-600"
            }
          `}
        >
          {title}
        </p>
      </div>

      {!isLast && (
        <div
          className={`
            mx-5 mb-6 h-[2px] w-20
            ${
              completed
                ? "bg-blue-600"
                : "bg-gray-300"
            }
          `}
        />
      )}
    </>
  );
};

export default StepCircle;