import ProductCard from "./ProductCard";
import Products from "./Products";

const Latest = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <h1 className="text-center text-2xl">Latest Goods</h1>
      <Products />
      <button className="bg-red-600 px-8 py-2 rounded-md text-neutral-300 hover:opacity-90">
        See All New Products
      </button>
    </div>
  );
};

export default Latest;
