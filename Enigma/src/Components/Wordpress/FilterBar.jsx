import { RotateCcw } from "lucide-react";
import ResourceSlider from "./ResourceSlider";

const FilterBar = ({
  cpu,
  ram,
  storage,
  setCpu,
  setRam,
  setStorage,
}) => {
  const resetFilters = () => {
    setCpu(2);
    setRam(6);
    setStorage(100);
  };

  return (
    <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-6 mb-12 ">

      <div className="flex flex-wrap items-end gap-8">

        <ResourceSlider
          title="CPU Cores"
          min={2}
          max={16}
          value={cpu}
          setValue={setCpu}
          unit="Cores"
        />

        <ResourceSlider
          title="RAM"
          min={6}
          max={48}
          value={ram}
          setValue={setRam}
          unit="GB"
        />

        <ResourceSlider
          title="SSD Storage"
          min={100}
          max={800}
          value={storage}
          setValue={setStorage}
          unit="GB"
        />

        <button
          onClick={resetFilters}
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 transition"
        >
          <RotateCcw size={18} />
          Reset Filters
        </button>

      </div>

    </div>
  );
};

export default FilterBar;