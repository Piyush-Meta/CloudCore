import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

import { removeItem } from "../../Utils/CartSlice";

import QuantitySelector from "./QuantitySelector";
import SpecificationList from "./SpecificationList";

const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  return (

    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex justify-between">

        <div>

          <h2 className="text-2xl font-bold text-gray-800">
            {item.title}
          </h2>

          <p className="mt-1 text-gray-500">
            {item.subtitle}
          </p>

          <span className="mt-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            {item.billing}
          </span>

        </div>

        <button
          onClick={() => dispatch(removeItem(item))}
          className="text-red-500 transition hover:text-red-700"
        >
          <Trash2 size={20} />
        </button>

      </div>

      <SpecificationList specs={item.specs} />

      <div className="mt-8 flex items-center justify-between border-t pt-6">

        <QuantitySelector item={item} />

        <div className="text-right">

          <p className="text-sm text-gray-500">
            Total
          </p>

          <h2 className="text-2xl font-bold text-blue-600">
            ₹{(item.selectedPrice * item.quantity).toLocaleString()}
          </h2>

        </div>

      </div>

    </div>

  );
};

export default CartItem;