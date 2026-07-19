import background from "../../assets/images/background.png";

const HeroImage = () => {
  return (
    <div className="relative">
     <img
    src={background}
    alt=""
    className="w-[800px]  rounded-2xl border border-gray-200 shadow-lg bg-blue-900"
/>
    </div>
  );
};

export default HeroImage;