import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../Utils/CartSlice";

const QuantitySelector = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center rounded-lg border overflow-hidden">

      <button
        onClick={() => dispatch(decreaseQuantity(item))}
        className="p-2 hover:bg-gray-100 transition"
      >
        <Minus size={16} />
      </button>

      <span className="w-10 text-center font-semibold">
        {item.quantity}
      </span>

      <button
        onClick={() => dispatch(increaseQuantity(item))}
        className="p-2 hover:bg-gray-100 transition"
      >
        <Plus size={16} />
      </button>

    </div>
  );
};

export default QuantitySelector;