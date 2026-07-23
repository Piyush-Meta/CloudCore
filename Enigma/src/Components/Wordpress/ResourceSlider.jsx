const ResourceSlider = ({
  title,
  min,
  max,
  value,
  setValue,
  unit,
}) => {
  return (
    <div className="flex-1 min-w-[220px]">
      {/* Header */}
      <div className="flex justify-between mb-3">
        <h4 className="text-sm font-semibold text-gray-800">
          {title}
        </h4>

        <span className="text-sm font-semibold text-blue-600">
          {value} {unit}
        </span>
      </div>

      {/* Slider */}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none bg-blue-100 cursor-pointer accent-blue-600"
      />

      {/* Labels */}
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <span>
          {min} {unit}
        </span>

        <span>
          {max} {unit}
        </span>
      </div>
    </div>
  );
};

export default ResourceSlider;