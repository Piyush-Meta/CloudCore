import { Outlet } from "react-router-dom";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;