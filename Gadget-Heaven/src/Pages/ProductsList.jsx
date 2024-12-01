import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { Heart } from 'lucide-react';
import CategoriesSidebar from "../Components/CategoriesSidebar";

const ProductsList = () => {
  const allProducts = useLoaderData();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [categories, setCategories] = useState([]);
  const [favorites, setFavorites] = useState(new Set());

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

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  // Enhanced color and design logic
  const getProductDesign = (index) => {
    const designs = [
      {
        gradient: 'from-cyan-100 to-blue-200',
        accentColor: 'bg-cyan-500',
        textColor: 'text-cyan-900'
      },
      {
        gradient: 'from-rose-100 to-pink-200',
        accentColor: 'bg-rose-500',
        textColor: 'text-rose-900'
      },
      {
        gradient: 'from-emerald-100 to-green-200',
        accentColor: 'bg-emerald-500',
        textColor: 'text-emerald-900'
      },
      {
        gradient: 'from-violet-100 to-purple-200',
        accentColor: 'bg-violet-500',
        textColor: 'text-violet-900'
      }
    ];
    return designs[index % designs.length];
  };

  return (
    <div className="flex bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <CategoriesSidebar 
        categories={categories} 
        onSelectCategory={handleCategorySelect} 
        className="w-1/5 bg-white shadow-lg"
      />
      
      <div className="products-list grid grid-cols-3 gap-8 p-10 flex-1">
        {filteredProducts.map((product, index) => {
          const design = getProductDesign(index);
          const isFavorite = favorites.has(product.product_id);

          return (
            <div 
              key={product.product_id} 
              className={`
                relative
                bg-gradient-to-br ${design.gradient}
                transform transition-all duration-400 
                hover:scale-105 
                hover:shadow-2xl 
                rounded-3xl 
                overflow-hidden 
                border border-white 
                shadow-lg 
                p-5
                group
              `}
            >
              <div 
                className="absolute top-4 right-4 z-10 cursor-pointer"
                onClick={() => toggleFavorite(product.product_id)}
              >
                <Heart 
                  className={`
                    w-7 h-7 
                    ${isFavorite 
                      ? 'text-red-500 fill-current' 
                      : 'text-gray-300 hover:text-red-300'}
                    transition-all duration-300
                  `}
                />
              </div>

              <div className={`
                bg-white bg-opacity-90 
                rounded-2xl 
                p-6 
                h-full 
                flex 
                flex-col 
                items-center 
                relative 
                overflow-hidden
              `}>
                <div className={`
                  absolute top-0 left-0 right-0 h-2 ${design.accentColor}
                `}></div>

                <div className="relative mb-4">
                  <img
                    src={product.product_image}
                    alt={product.product_title}
                    className="w-40 h-40 object-contain rounded-xl shadow-md transition-transform group-hover:rotate-6"
                  />
                </div>

                <h3 className={`
                  mt-2 
                  text-lg 
                  font-bold 
                  ${design.textColor} 
                  text-center 
                  mb-2
                `}>
                  {product.product_title}
                </h3>

                <p className="text-gray-600 font-semibold mb-4">
                  Price: ${product.price}
                </p>

                <Link 
                  to={`/products/${product.product_id}`} 
                  className="w-full block"
                >
                  <button className={`
                    w-full 
                    py-3 
                    px-6 
                    ${design.accentColor} 
                    text-white 
                    rounded-full 
                    hover:opacity-90 
                    transition-all 
                    duration-300 
                    shadow-md 
                    hover:shadow-lg 
                    text-sm 
                    uppercase 
                    tracking-wider
                  `}>
                    Explore Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;