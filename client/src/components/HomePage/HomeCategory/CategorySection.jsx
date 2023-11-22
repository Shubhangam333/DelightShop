import CategoryCard from "./CategoryCard";
import Categories from "./Category";

const CategorySection = () => {
  return (
    <div className="category-grid ">
      {Categories.map((cat) => (
        <CategoryCard key={Math.floor(Math.random() * 100)} cat={cat} />
      ))}
    </div>
  );
};

export default CategorySection;
