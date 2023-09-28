import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByIdAsync } from "../../../features/productSlice";
import Loader from "../../Loader/Loader";

const EditProduct = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState("");
  const [category, setCategory] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(100);
  const [stock, setStock] = useState(0);

  const { productId } = useParams();

  const { product } = useSelector((state) => state.product);

  const { categories } = useSelector((state) => state.category);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProductAsync(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    dispatch(getProductByIdAsync(productId));
  }, [dispatch, productId]);
  return (
    <>
      {!product ? (
        <Loader />
      ) : (
        <div className="flex items-center justify-center my-8">
          <div>
            <h1 className="text-3xl text-slate-950 py-4">Edit Product</h1>
            <form
              className="flex flex-col justify-between "
              onSubmit={updateProductSubmitHandler}
            >
              <label htmlFor="name" className="py-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                value={product.name}
                onChange={(e) => setName(e.target.value)}
                className="px-2 py-1 text-md outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
              />

              <label htmlFor="description" className="py-2">
                description
              </label>
              <textarea
                name="description"
                id="description"
                value={product.description}
                onChange={(e) => setDescription(e.target.value)}
                className="px-2 py-1 text-md outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
              />
              <label htmlFor="stock" className="py-2">
                Stock
              </label>
              <input
                name="stock"
                type="number"
                id="stock"
                value={product.Stock}
                onChange={(e) => setStock(e.target.value)}
                className="px-2 py-1 text-md outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
              />
              <label htmlFor="price" className="py-2">
                Price
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                name="price"
                type="text"
                id="price"
                value={product.price}
                className="px-2 py-1 text-md outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
              />
              <label htmlFor="category" className="py-2">
                Category
              </label>
              <select
                name="categories"
                id="categories"
                onChange={handleCategory}
                className="px-2 py-1 text-md outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
              >
                {categories.map((category) => (
                  <option value={category._id} key={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <label htmlFor="images" className="py-2">
                Product Images
              </label>
              <input
                type="file"
                name="images"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />

              <button
                type="submit"
                className="rounded-md bg-red-700 py-2 px-2 my-4 text-slate-100 active:scale-95"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProduct;
