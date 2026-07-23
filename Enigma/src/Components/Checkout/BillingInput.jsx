const BillingInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = true,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
      />
    </div>
  );
};

export default BillingInput;