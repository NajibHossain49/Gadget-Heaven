import { useState } from "react";

const CategoriesSidebar = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category === "All" ? null : category);
  };

  return (
    <div className="categories-sidebar p-4 flex flex-col items-start">
      <button
        className={`w-32 text-left px-2 py-1 my-1 rounded-2xl ${
          selectedCategory === "All" ? "bg-purple-200" : "bg-gray-100"
        } hover:bg-purple-300`}
        onClick={() => handleCategoryClick("All")}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`w-32 text-left px-2 py-1 my-1 rounded-2xl ${
            selectedCategory === category ? "bg-purple-200" : "bg-gray-100"
          } hover:bg-purple-300`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoriesSidebar;
