import { useMemo } from "react";
import { useNavigate } from "react-router-dom";


const OrderSummary = ({ items }) => {
    const navigate = useNavigate();

  const { subtotal, gst, total } = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.selectedPrice * item.quantity,
      0
    );

    const gst = subtotal * 0.18;

    return {
      subtotal,
      gst,
      total: subtotal + gst,
    };
  }, [items]);

  return (
    <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Order Summary
      </h2>

      <div className="mt-8 space-y-5">

        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-semibold">
            ${subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            GST (18%)
          </span>

          <span className="font-semibold">
            ${gst.toFixed(2)}
          </span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">

          <span>Total</span>

          <span>
            ${total.toFixed(2)}
          </span>

        </div>

       <button
  onClick={() => navigate("/billing")}
  className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
>
  Continue to Billing
</button>

      </div>
    </div>
  );
};

export default OrderSummary;