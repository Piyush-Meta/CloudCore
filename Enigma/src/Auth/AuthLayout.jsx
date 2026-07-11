import logo from "../assets/images/logo.png";
import {Link} from "react-router-dom";
const AuthLayout = ({ children }) => {
  return (
    <section className=" min-h-screen bg-gradient-to-r from-[#081A36] via-[#15345F] via-60% to-[#F8FAFC] flex items-center justify-center">
       {/* Logo */}

      <div className="absolute top-8 left-10 flex items-center gap-3">
<Link to="/">
        <img
          src={logo}
          alt="CloudCorePro"
          className="h-12"
        />
        </Link>

        <h2 className="text-4xl font-bold text-white">
          CloudCorePro
        </h2>

      </div>
      <div className="w-full max-w-lg px-6">

        {children}

      </div>

    </section>
  );
};

export default AuthLayout;