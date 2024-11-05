import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../cartUtils/cartUtils";
import { FaTrash } from "react-icons/fa";
import Modal from "react-modal";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSortedDescending, setIsSortedDescending] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const initialCartItems = getCart();
    setCartItems(initialCartItems);
  }, []);

  const handleRemoveItem = (productId) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product_id !== productId
    );
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const sortedCartItems = [...cartItems].sort((a, b) =>
    isSortedDescending ? b.price - a.price : a.price - b.price
  );

  const handleSortToggle = () => {
    setIsSortedDescending((prev) => !prev);
  };

  const handlePurchase = () => {
    setIsModalOpen(true);
    setCartItems([]); // Clear cart
    localStorage.setItem("cart", JSON.stringify([])); // Update localStorage
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="flex justify-between">
      <div className="w-3/4">
        <h2 className="font-bold text-lg mb-4">Cart</h2>
        {sortedCartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <ul>
            {sortedCartItems.map((item) => (
              <li
                key={item.product_id}
                className="flex items-center justify-between mb-6 p-4 shadow-md rounded-lg"
              >
                <div className="flex items-center">
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-20 h-20 rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.product_title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-lg font-semibold">
                      Price: ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.product_id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash className="text-xl" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-1/4 flex flex-col items-end">
        <h3 className="font-semibold mb-2">
          Total Cost: ${totalCost.toFixed(2)}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={handleSortToggle}
            className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-gray-200"
          >
            Sort by Price
          </button>
          <button
            onClick={handlePurchase}
            className={`px-4 py-2 text-white rounded-full hover:bg-purple-600 
    ${
      cartItems.length === 0 || totalCost === 0
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-purple-500"
    }`}
            disabled={cartItems.length === 0 || totalCost === 0} // Disable if cart is empty
          >
            Purchase
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Purchase Confirmation"
        className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="max-w-xs w-full mx-auto p-6 bg-white rounded-lg">
          <h2 className="font-bold text-lg text-center">
            Payment Successfully
          </h2>
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 w-full"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
