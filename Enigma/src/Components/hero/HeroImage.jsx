import background from "../../assets/images/background.png";

const HeroImage = () => {
  return (
    <div className="relative">
     <img
    src={background}
    alt=""
    className="w-[760px] rounded-2xl border border-gray-200 shadow-lg"
/>

      <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-xl bg-white p-4 shadow-lg">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
          💾
        </div>

        <div>
          <p className="text-sm text-gray-500">Server Health</p>
          <h3 className="font-semibold text-xl">Optimal</h3>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;