import BannerImage from "../assets/banner.jpg";
// Import the Navbar component
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center border bg-[#9538E2] container mx-auto rounded-3xl p-16 relative pb-56 mb-64">
        {/* Navbar inside Banner */}
        <Navbar />

        {/* Banner Content */}
        <div className="text-center mt-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-lg text-white mb-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn bg-white text-[#9538E2] text-lg rounded-full px-8 py-2">
              Shop Now!
            </button>
          </div>
        </div>

        {/* Banner Image */}
        <div className="absolute bottom-[-250px] p-6 border rounded-2xl w-3/5 backdrop-blur-md">
          <img
            src={BannerImage}
            alt="VR Headset"
            className="w-full h-96 rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
