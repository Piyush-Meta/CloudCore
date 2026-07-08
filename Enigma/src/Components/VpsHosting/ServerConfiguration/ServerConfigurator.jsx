import { useState } from "react";
import { configData } from "./ConfigData";
import Slider from "./Slider";
import ResetButton from "./ResetButton";

const ServerConfigurator = () => {
const initialValues = Object.fromEntries(
  configData.map((item) => [item.key, item.value])
);

  const [values, setValues] = useState(initialValues);

  const handleChange = (key, value) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleReset = () => {
    setValues(initialValues);
  };

  return (
    <section className="bg-[#F8FAFF] py-20">
      <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

        <div className="grid grid-cols-4 gap-8 items-center">
          {configData.map((item) => (
            <Slider
              key={item.id}
              item={item}
              value={values[item.key]}
              onChange={(value) => handleChange(item.key, value)}
            />
          ))}
          <div className="flex justify-center">
            <ResetButton onReset={handleReset} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServerConfigurator;