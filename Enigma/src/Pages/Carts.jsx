import { useSelector } from "react-redux";

import CheckoutStepper from "../Components/Checkout/CheckoutStepper";
import CartSection from "../Components/Checkout/CartSection";
import OrderSummary from "../Components/Checkout/OrderSummary";
import RecommendedProducts from "../Components/Checkout/RecommendedProducts.jsx";

const Carts = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">

      <CheckoutStepper currentStep={0} />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">

        <div className="lg:col-span-2">

          <h1 className="mb-8 text-3xl font-bold">
            Review Your Cart
          </h1>

          <CartSection items={cartItems} />

        </div>

        <OrderSummary items={cartItems} />

      </div>

      <RecommendedProducts />

    </section>
  );
};

export default Carts;