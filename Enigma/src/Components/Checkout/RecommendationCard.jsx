import { Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { addItem } from "../../Utils/CartSlice";

const RecommendationCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addItem({
        ...product,
        billing: "One Time",
        quantity: 1,
        selectedPrice: product.price,
      })
    );
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">

      <h3 className="text-lg font-semibold text-gray-800">
        {product.title}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {product.subtitle}
      </p>

      <div className="mt-5 flex items-center justify-between">

        <span className="text-xl font-bold text-blue-600">
          ₹{product.price}
        </span>

        <button
          onClick={handleAdd}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add
        </button>

      </div>

    </div>
  );
};

export default RecommendationCard;