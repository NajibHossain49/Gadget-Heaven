export const addToWishlist = (product) => {
  const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
  const itemIndex = wishlistItems.findIndex(
    (item) => item.product_id === product.product_id
  );

  if (itemIndex === -1) {
    wishlistItems.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    return { success: true, message: "Added to Wishlist!" };
  } else {
    return { success: false, message: "Product already in wishlist!" };
  }
};

export const getWishlist = () => {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
};

export const clearWishlist = () => {
  localStorage.removeItem("wishlist");
};
