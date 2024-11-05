import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
  const location = useLocation();

  // Check if the current path is the home page
  const isHomePage = location.pathname === "/";

  return (
    <HelmetProvider>
      <div>
        {/* Conditional Navbar */}
        {!isHomePage && (
          <div className="h-16">
            <Navbar />
          </div>
        )}

        {/* Single ToastContainer */}
        <ToastContainer position="top-right" autoClose={2000} />

        {/* Adjust padding if the Navbar is hidden */}
        <div className={`${isHomePage ? "" : "pt-12"} min-h-[calc(100vh-244px)] py-12 container mx-auto px-12`}>
          {/* Dynamic Section */}
          <Outlet />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default MainLayout;
