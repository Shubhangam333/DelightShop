import React, { useEffect, useRef, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { registerUserAsync } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createProductAsync } from "../../features/productSlice";
import Layout from "../../components/Layout";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState("");
  const [category, setCategory] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(100);
  const [stock, setStock] = useState(0);

  const { categories } = useSelector((state) => state.category);

  const createProductSubmitHandler = (e) => {
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

  return (
    <Layout>
      <div className="flex items-center justify-center my-8">
        <div>
          <h1 className="text-3xl text-slate-950 py-4">Create Product</h1>
          <form
            className="flex flex-col justify-between "
            onSubmit={createProductSubmitHandler}
          >
            <label htmlFor="name" className="py-2">
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              className="px-2 py-1 text-md outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
            />

            <label htmlFor="description" className="py-2">
              description
            </label>
            <textarea
              name="description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              className="px-2 py-1 text-xl outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
            />
            <label htmlFor="stock" className="py-2">
              Stock
            </label>
            <input
              name="stock"
              type="number"
              id="stock"
              onChange={(e) => setStock(e.target.value)}
              className="px-2 py-1 text-xl outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
            />
            <label htmlFor="price" className="py-2">
              Price
            </label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              type="text"
              id="price"
              className="px-2 py-1 text-xl outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
            />
            <label htmlFor="category" className="py-2">
              Category
            </label>
            <select
              name="categories"
              id="categories"
              onChange={handleCategory}
              className="px-2 py-1 text-xl outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
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
    </Layout>
  );
};

export default CreateProduct;
