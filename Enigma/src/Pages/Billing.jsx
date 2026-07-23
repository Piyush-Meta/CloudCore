import CheckoutStepper from "../Components/Checkout/CheckoutStepper";
import BillingForm from "../Components/Checkout/BillingForm";
import BillingSummary from "../Components/Checkout/BillingSummary";
import ProtectedCheckout from "../Components/Checkout/ProtectedCheckout";

const Billing = () => {
  return (
    <ProtectedCheckout>

      <section className="mx-auto max-w-7xl px-6 py-12">

        <CheckoutStepper currentStep={1} />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <h1 className="mb-8 text-3xl font-bold">
              Billing Information
            </h1>

            <BillingForm />

          </div>

          <BillingSummary />

        </div>

      </section>

    </ProtectedCheckout>
  );
};

export default Billing;