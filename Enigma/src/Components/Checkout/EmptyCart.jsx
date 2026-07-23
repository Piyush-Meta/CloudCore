import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyCart = () => {

  return (

    <div className="rounded-xl border border-dashed border-gray-300 bg-white py-20 text-center">

      <ShoppingCart
        size={70}
        className="mx-auto text-gray-400"
      />

      <h2 className="mt-6 text-3xl font-bold">

        Your cart is empty

      </h2>

      <p className="mt-3 text-gray-500">

        Add a hosting plan to continue.

      </p>

      <Link
        to="/"
        className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Browse Hosting
      </Link>

    </div>

  );
};

export default EmptyCart;