import React from "react";
import BannerImage from "../assets/banner.jpg";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 container mx-auto rounded-3xl p-6 relative pb-12 mb-10 shadow-2xl overflow-hidden">
        {/* Decorative Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-700 opacity-90 -z-10"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

        {/* Navbar inside Banner */}
        <Navbar />

        {/* Banner Content */}
        <div className="text-center mt-12 relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Upgrade Your Tech 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Accessorize with Gadget Heaven
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore the latest gadgets that will take your experience to the next level. 
              From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="group relative overflow-hidden rounded-full px-10 py-3 bg-white text-purple-700 font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Shop Now!</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-300 opacity-0 group-hover:opacity-20 transition-all duration-300"></span>
            </button>
          </div>
        </div>

        {/* Banner Image */}
        {/* <div className="absolute bottom-[-250px] left-1/2 transform -translate-x-1/2 w-3/5 p-4">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-3xl blur-2xl opacity-50"></div>
            <img
              src={BannerImage}
              alt="VR Headset"
              className="relative w-full h-96 rounded-3xl object-cover shadow-2xl transform transition-all hover:scale-[1.02]"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;