export const addToCart = (product) => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const itemIndex = cartItems.findIndex(
    (item) => item.product_id === product.product_id
  );

  if (itemIndex === -1) {
    cartItems.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cartItems));
    return { success: true, message: "Added to Cart!" };
  } else {
    return { success: false, message: "Product already in cart!" };
  }
};

export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};
