import StepCircle from "./StepCircle";
import { checkoutSteps } from "./checkoutSteps";

const CheckoutStepper = ({ currentStep }) => {
  return (
    <div className="w-full mb-14">
      <div className="flex items-center justify-center">
        {checkoutSteps.map((step, index) => (
          <StepCircle
            key={step.id}
            title={step.title}
            index={index}
            currentStep={currentStep}
            isLast={index === checkoutSteps.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckoutStepper;