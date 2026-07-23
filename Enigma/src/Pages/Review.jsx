import { useSelector } from "react-redux";
import CheckoutStepper from "../Components/Checkout/CheckoutStepper";

const Review = () => {

  const cartItems = useSelector(
    (store) => store.cart.items
  );

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.selectedPrice * item.quantity,
    0
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">

      <CheckoutStepper currentStep={3} />

      <div className="mt-10 rounded-xl border bg-white p-8 shadow-sm">

        <h1 className="text-3xl font-bold">
          Review Order
        </h1>

        <div className="mt-8 space-y-5">

          {cartItems.map((item) => (

            <div
              key={`${item.id}-${item.billing}`}
              className="flex justify-between border-b pb-4"
            >

              <div>

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-500">
                  {item.billing}
                </p>

              </div>

              <div className="font-bold">

                ₹
                {(
                  item.selectedPrice *
                  item.quantity
                ).toLocaleString()}

              </div>

            </div>

          ))}

        </div>

        <div className="mt-10 flex justify-between text-2xl font-bold">

          <span>Total</span>

          <span>
            ₹{total.toLocaleString()}
          </span>

        </div>

        <button
          className="mt-10 rounded-lg bg-green-600 px-10 py-3 text-white hover:bg-green-700"
        >
          Place Order
        </button>

      </div>

    </section>
  );
};

export default Review;