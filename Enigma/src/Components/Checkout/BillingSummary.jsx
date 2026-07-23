import { useSelector } from "react-redux";

const BillingSummary = () => {
  const items = useSelector((store) => store.cart.items);

  const subtotal = items.reduce(
    (sum, item) => sum + item.selectedPrice * item.quantity,
    0
  );

  const gst = subtotal * 0.18;

  const total = subtotal + gst;

  return (
    <div className="sticky top-24 rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Order Summary
      </h2>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>GST</span>
          <span>₹{gst.toFixed(2)}</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">

          <span>Total</span>

          <span>₹{total.toFixed(2)}</span>

        </div>

      </div>

    </div>
  );
};

export default BillingSummary;