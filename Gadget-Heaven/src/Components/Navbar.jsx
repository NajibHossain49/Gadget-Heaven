import { NavLink, useLocation } from "react-router-dom";
import { FaHeart, FaCreditCard } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getCart } from "../cartUtils/cartUtils";
import { getWishlist } from "../wishlistUtils/wishlistUtils";

const Navbar = () => {
  const location = useLocation();
  const [cartItemCount, setCartItemCount] = useState(0);
  const [wishlistItemCount, setWishlistItemCount] = useState(0);

  useEffect(() => {
    // Initialize cart and wishlist counts
    const initialCartItems = getCart();
    setCartItemCount(initialCartItems.length);

    const initialWishlistItems = getWishlist();
    setWishlistItemCount(initialWishlistItems.length);
  }, []);

  // Conditionally set navbar background and text color based on route
  const isBannerPage = location.pathname === "/";
  const navbarBgClass = isBannerPage ? "bg-[#9538E2]" : "bg-base-100";
  const textClass = isBannerPage ? "text-white" : "text-black";

  return (
    <div className={`navbar ${navbarBgClass} container mx-auto`}>
      {/* Navbar-Start */}
      <div className="navbar-start">
        <NavLink className={`btn btn-ghost text-xl ${textClass}`}>
          Gadget Heaven
        </NavLink>
      </div>

      {/* Navbar-Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${textClass} ${
                  isActive ? "underline font-bold" : "hover:text-gray-900"
                } transition-all duration-200`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                `nav-link ${textClass} ${
                  isActive ? "underline font-bold" : "hover:text-gray-900"
                } transition-all duration-200`
              }
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `nav-link ${textClass} ${
                  isActive ? "underline font-bold" : "hover:text-gray-900"
                } transition-all duration-200`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `nav-link ${textClass} ${
                  isActive ? "underline font-bold" : "hover:text-gray-900"
                } transition-all duration-200`
              }
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar-End */}
      <div className="navbar-end flex items-center space-x-4">
        <NavLink
          to="/cart"
          className={`btn relative ${isBannerPage ? "text-black" : ""}`}
          aria-label="Cart"
        >
          <FaCreditCard />
          {cartItemCount > 0 && (
            <span className="badge badge-primary absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
              {cartItemCount}
            </span>
          )}
        </NavLink>

        <NavLink
          to="#"
          className={`btn relative ${isBannerPage ? "text-black" : ""}`}
          aria-label="Wishlist"
        >
          <FaHeart />
          {wishlistItemCount > 0 && (
            <span className="badge badge-primary absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
              {wishlistItemCount}
            </span>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
