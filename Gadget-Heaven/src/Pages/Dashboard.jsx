import React, { useState } from "react";
import Cart from "./Cart"; // Adjust the path as needed
import Wishlist from "./Wishlist"; // Adjust the path as needed
import { Helmet } from "react-helmet-async";
import { Package, Heart } from "lucide-react";

const Dashboard = () => {
  const [selectedContent, setSelectedContent] = useState("cart");

  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      <Helmet>
        <title>Personal Dashboard</title>
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-10 mb-10 shadow-2xl transform transition-all hover:scale-[1.02]">
              <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
                Dashboard
              </h1>
              <p className="text-xl text-white/90 max-w-xl mx-auto">
                Explore, manage, and organize your digital collections.
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => handleButtonClick("cart")}
                className={`
                  flex items-center space-x-2 
                  px-6 py-3 rounded-xl 
                  transition-all duration-300
                  ${
                    selectedContent === "cart"
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                      : "bg-white text-purple-700 hover:bg-purple-50 border border-purple-200"
                  }
                `}
              >
                <Package className="w-5 h-5" />
                <span className="text-sm font-semibold">Cart</span>
              </button>
              
              <button
                onClick={() => handleButtonClick("wishlist")}
                className={`
                  flex items-center space-x-2 
                  px-6 py-3 rounded-xl 
                  transition-all duration-300
                  ${
                    selectedContent === "wishlist"
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                      : "bg-white text-purple-700 hover:bg-purple-50 border border-purple-200"
                  }
                `}
              >
                <Heart className="w-5 h-5" />
                <span className="text-sm font-semibold">Wishlist</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {selectedContent === "cart" && (
              <div className="p-6 animate-fade-in">
                <Cart />
              </div>
            )}
            {selectedContent === "wishlist" && (
              <div className="p-6 animate-fade-in">
                <Wishlist />
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"
          style={{ transform: 'translate(30%, -30%)' }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"
          style={{ transform: 'translate(-30%, 30%)' }}
        ></div>
      </div>

      {/* Fade-in Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default Dashboard;