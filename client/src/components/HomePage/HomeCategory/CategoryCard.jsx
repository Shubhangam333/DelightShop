const CategoryCard = ({ cat }) => {
  return (
    <div
      className={`flex p-8 ${cat.gridclass} justify-center items-center gap-4 rounded-md `}
      style={{
        backgroundColor: cat && cat.bgColor ? cat.bgColor : "defaultColor",
      }}
    >
      <div className="flex flex-col gap-4 items-start">
        <h3 className="font-bold text-xl">{cat.title}</h3>
        <p className="font-medium text-md">{cat.description}</p>
        <button className="bg-red-500 text-white p-2 rounded-md hover:opacity-95">
          See All Products
        </button>
      </div>
      <div className="relative">
        <img src={cat.catimg} alt="product-image" className="w-24 " />
      </div>
    </div>
  );
};

export default CategoryCard;
