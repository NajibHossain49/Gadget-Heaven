import React, { useState } from "react";
import Cart from "./Cart"; // Adjust the path as needed
import Wishlist from "./Wishlist"; // Adjust the path as needed
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  // Initialize state to show Cart by default
  const [selectedContent, setSelectedContent] = useState("cart");

  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="relative">
      <Helmet>
        <title>Dashboard - User Overview</title>
      </Helmet>
      <div className="text-center bg-[#9538E2] p-10 mb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
          <p className="text-lg text-white mb-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => handleButtonClick("cart")}
              className={`py-2 px-4 rounded-full shadow ${
                selectedContent === "cart"
                  ? "bg-white text-[#9538E2]"
                  : "border text-white hover:bg-gray-200"
              }`}
            >
              Cart
            </button>
            <button
              onClick={() => handleButtonClick("wishlist")}
              className={`py-2 px-4 rounded-full shadow ${
                selectedContent === "wishlist"
                  ? "bg-white text-[#9538E2]"
                  : "border text-white hover:bg-gray-200"
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      {/* Render Cart or Wishlist component */}
      {selectedContent === "cart" && <Cart />}
      {selectedContent === "wishlist" && <Wishlist />}
    </div>
  );
};

export default Dashboard;
