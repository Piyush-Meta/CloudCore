import { Outlet } from "react-router-dom";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer/Footer";
import ScrollToTop from "../Components/Common/ScrollToTop";
const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;