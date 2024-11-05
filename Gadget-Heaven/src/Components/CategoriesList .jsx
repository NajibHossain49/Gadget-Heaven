const CategoriesList = ({ categories }) => {
  // Get unique categories
  const uniqueCategories = [...new Set(categories.map((item) => item.category))];

  return (
    <div className="flex">
      <div className="flex flex-col gap-2 w-1/4"> 
        {uniqueCategories.map((category, index) => (
          <button
            key={index}
            className="btn btn-active btn-neutral py-1 px-2" 
          >
            {category}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default CategoriesList;
