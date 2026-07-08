const ResetButton = ({ onReset }) => {
  return (
    <button
      onClick={onReset}
      className="rounded-lg border border-blue-200 bg-blue-50 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
    >
      Reset Filters
    </button>
  );
};

export default ResetButton;