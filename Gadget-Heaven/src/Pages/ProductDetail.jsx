import { useLoaderData } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
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
      setIsInWishlist(true); // Update the wishlist state
      toast.success("Added to wishlist successfully!");
    } else {
      toast.info("This item is already in your wishlist.");
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${product_title} `}</title>
      </Helmet>
      <div className="relative">
        <div className="text-center bg-[#9538E2] p-10 pb-80">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-4">
              Product Details
            </h1>
            <p className="text-lg text-white mb-6">
              Explore the latest gadgets that will take your experience to the
              next level.
            </p>
          </div>
        </div>
        <div className="flex max-w-4xl mx-auto bg-white p-10 gap-12 rounded-lg shadow-lg -mt-72 mb-32">
          <div className="max-w-[350px] rounded-lg p-4">
            <img
              src={product_image}
              alt="Gadget"
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-3xl font-semibold">{product_title}</h1>
              <p className="text-xl font-semibold text-gray-700 mt-2">
                Price: ${price}
              </p>
            </div>
            <div
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${
                availability
                  ? "bg-yellow-100 text-yellow-800 border-yellow-400"
                  : "bg-yellow-200 text-yellow-900 border-yellow-500"
              }`}
              style={{ width: "100px", textAlign: "center" }}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </div>

            <p className="text-gray-600">{description}</p>
            <div>
              <h2 className="font-semibold text-lg text-gray-800">
                Specification:
              </h2>
              <ul className="list-decimal list-inside text-gray-700 ml-4">
                {Specification?.map((specs, index) => (
                  <li key={index}>{specs}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg text-gray-800">Rating:</h2>
              <div className="flex items-center">
                <div className="rating rating-lg rating-half mr-2">
                  <input
                    type="radio"
                    name="rating-10"
                    className="rating-hidden"
                  />
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>
                      <input
                        type="radio"
                        name="rating-10"
                        className={`mask mask-star-2 mask-half-1 bg-yellow-500`}
                        defaultChecked={roundedRating >= index + 0.5}
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className={`mask mask-star-2 mask-half-2 bg-yellow-500`}
                        defaultChecked={roundedRating >= index + 1}
                      />
                    </span>
                  ))}
                </div>
                <span className="text-gray-700 text-lg font-semibold">
                  {roundedRating} / 5
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <button
                className="px-6 py-2 bg-purple-600 text-white rounded-full flex items-center gap-2 hover:bg-purple-700"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
              <div
                className={`p-2 rounded-full bg-white border border-purple-600 hover:bg-purple-100 cursor-pointer ${
                  isInWishlist ? "cursor-not-allowed opacity-50" : ""
                }`}
                onClick={handleFavorite}
                disabled={isInWishlist}
              >
                <FaRegHeart className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
