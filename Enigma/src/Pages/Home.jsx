import Hero from "../Components/hero/Hero";
import Stat from "../Stats/Stat";
import Services from "../Components/services/Services";
import Pricing from "../Components/pricing/Pricing";
import DedicatedServer from "../Components/DedicatedServers/DedicatedServers";
const Home = () => {
  return (
    <>
      <Hero />
      <Stat />
      <Services/>
      <Pricing/>
      <DedicatedServer/>
    </>
  );
};

export default Home;