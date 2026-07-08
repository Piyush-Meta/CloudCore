import Hero from '../Components/VpsHosting/Hero'
import OsButton from '../Components/VpsHosting/OsButton';
import Pricing from '../Components/VpsHosting/Pricing';
import Comparison from '../Components/VpsHosting/Comparison/Comparison';
import ServerConfigurator from '../Components/VpsHosting/ServerConfiguration/ServerConfigurator';
const vpshosting = () => {
  return (
    <div>
        <Hero/>
        <OsButton/>
        <Pricing/>
        <ServerConfigurator/>
        <Comparison/>
        
    </div>
  )
};
export default vpshosting;