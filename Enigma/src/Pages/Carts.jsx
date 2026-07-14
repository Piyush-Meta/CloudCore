import { useSelector } from "react-redux";

const Carts = () => {
  const cartItems = useSelector(
    (store) => store.cart.items
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 space-y-6">
      {cartItems.map((item) => (
        <div
          key={`${item.id}-${item.billing}`}
          className="rounded-xl border p-6"
        >
          <h2 className="text-2xl font-bold">
            {item.title}
          </h2>

          <p>{item.subtitle}</p>

          <p>
            Billing : {item.billing}
          </p>

          <p>
            Price : ${item.selectedPrice}
          </p>

          <p>
            Quantity : {item.quantity}
          </p>

          <p className="font-bold">
            Total :
            ${item.selectedPrice * item.quantity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Carts;