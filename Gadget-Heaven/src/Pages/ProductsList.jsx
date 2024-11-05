import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoriesSidebar from "../Components/CategoriesSidebar";

const ProductsList = () => {
  const allProducts = useLoaderData();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(allProducts.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
  }, [allProducts]);

  const handleCategorySelect = (category) => {
    if (category) {
      setFilteredProducts(allProducts.filter((product) => product.category === category));
    } else {
      setFilteredProducts(allProducts);
    }
  };

  return (
    <div className="flex">
      <CategoriesSidebar categories={categories} onSelectCategory={handleCategorySelect} />
      
      <div className="products-list grid grid-cols-3 gap-4 p-4 flex-1">
        {filteredProducts.map((product) => (
          <div key={product.product_id} className="card p-2 border rounded-3xl shadow-sm">
            <img
              src={product.product_image}
              alt={product.product_title}
              className="w-24 h-24 object-cover mx-auto"
            />
            <h3 className="mt-1 text-sm font-semibold">{product.product_title}</h3>
            <p className="mt-1 text-gray-700 text-sm">Price: ${product.price}</p>
            <Link to={`/products/${product.product_id}`}>
              <button className="mt-2 border border-purple-400 text-purple-500 rounded-full py-1 px-3 hover:bg-gray-200">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
