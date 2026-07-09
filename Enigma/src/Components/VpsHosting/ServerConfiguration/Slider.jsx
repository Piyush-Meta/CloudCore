const Slider = ({ item, value, onChange }) => {
  return (
    <div className="w-full">
      <h4 className="mb-4 text-sm font-semibold text-gray-700">
        {item.title}
      </h4>

      <input
        type="range"
        min={item.min}
        max={item.max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-blue-100 accent-blue-600"
      />

      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span>
          {item.min} {item.unit}
        </span>

        <span>
          {item.max} {item.unit}
        </span>
      </div>
    </div>
  );
};

export default Slider;