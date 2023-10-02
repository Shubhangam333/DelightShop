import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

import Loader from "../../Loader/Loader";

const Products = () => {
  const { products, isLoading } = useSelector((state) => state.product);
  return (
    <div className="grid grid-cols-4 my-8 gap-12">
      {isLoading ? (
        <Loader />
      ) : (
        products &&
        products.length > 0 &&
        products
          .slice(0, 4)
          .map((product) => <ProductCard product={product} key={product._id} />)
      )}
    </div>
  );
};

export default Products;
