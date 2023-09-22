import React, { useEffect } from "react";
import Layout from "../components/Layout";
import ProductLanding from "../components/ProductLanding/ProductLanding";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdAsync } from "../features/productSlice";
import Loader from "../components/Loader/Loader";

const ProductLandingPage = () => {
  const dispatch = useDispatch();

  const { product, isLoading } = useSelector((state) => state.product);
  const params = useParams();
  const { productId } = params;

  useEffect(() => {
    dispatch(getProductByIdAsync(productId));
  }, [dispatch]);

  return (
    <Layout>
      {isLoading ? <Loader /> : <ProductLanding product={product} />}
    </Layout>
  );
};

export default ProductLandingPage;
