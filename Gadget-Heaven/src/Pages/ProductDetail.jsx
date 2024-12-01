import { useLoaderData } from "react-router-dom";
import { FaRegHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { addToCart } from "../cartUtils/cartUtils";
import { addToWishlist } from "../wishlistUtils/wishlistUtils";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const product = useLoaderData();
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = product;

  const roundedRating = Math.round(rating * 2) / 2;

  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const checkWishlist = () => {
      const isAlreadyInWishlist = addToWishlist(product).success === false;
      setIsInWishlist(isAlreadyInWishlist);
    };

    checkWishlist();
  }, [product]);

  const handleAddToCart = () => {
    const result = addToCart(product);
    if (result.success) {
      toast.success("Added to cart successfully!");
    } else {
      toast.info("This item is already in your cart.");
    }
  };

  const handleFavorite = () => {
    if (isInWishlist) {
      toast.info("This item is already in your wishlist.");
      return;
    }
    const result = addToWishlist(product);
    if (result.success) {
      setIsInWishlist(true);
      toast.success("Added to wishlist successfully!");
    } else {
      toast.info("This item is already in your wishlist.");
    }
  };

  // Color palette
  const colors = {
    primary: 'bg-gradient-to-r from-[#8A4FFF] to-[#5E17EB]',
    secondary: 'bg-gradient-to-r from-[#FF6B6B] to-[#FF4E4E]',
    background: 'bg-gradient-to-br from-[#F5F7FA] to-[#E8EEF5]',
    accent: 'bg-[#4ECDC4]'
  };

  return (
    <>
      <Helmet>
        <title>{`${product_title}`}</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        {/* Gradient Header */}
        <div className={`${colors.primary} py-16 px-4 text-center`}>
          <div className="max-w-3xl mx-auto text-white">
            <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
              Product Details
            </h1>
            <p className="text-xl opacity-80 tracking-wide">
              Discover cutting-edge technology that transforms your digital experience
            </p>
          </div>
        </div>

        {/* Product Details Container */}
        <div className={`${colors.background} flex-grow py-12 px-4`}>
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Product Image Section */}
            <div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-50">
              <div className="rounded-2xl overflow-hidden shadow-lg transform transition-all hover:scale-105">
                <img 
                  src={product_image} 
                  alt={product_title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Product Information Section */}
            <div className="md:w-1/2 p-8 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{product_title}</h2>
                <p className={`text-2xl font-semibold ${colors.secondary} bg-clip-text text-transparent`}>
                  ${price}
                </p>
              </div>

              {/* Availability Badge */}
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${availability ? colors.accent : 'bg-red-500'} text-white`}>
                {availability ? "In Stock" : "Out of Stock"}
              </div>

              <p className="text-gray-600 leading-relaxed">{description}</p>

              {/* Specifications */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Specifications:</h3>
                <ul className="space-y-2 text-gray-700">
                  {Specification?.map((specs, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-green-500">✔</span>
                      {specs}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rating Section */}
              <div className="flex items-center space-x-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <FaStar 
                      key={index} 
                      className={`w-6 h-6 ${index < Math.floor(roundedRating) ? 'text-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-700">
                  {roundedRating} / 5
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button 
                  onClick={handleAddToCart}
                  className={`${colors.primary} text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:opacity-90 transition-all`}
                >
                  <FaShoppingCart className="mr-2" /> Add to Cart
                </button>
                <button 
                  onClick={handleFavorite}
                  disabled={isInWishlist}
                  className={`border-2 border-purple-500 text-purple-500 px-4 py-3 rounded-full hover:bg-purple-50 transition-all ${isInWishlist ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <FaRegHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;