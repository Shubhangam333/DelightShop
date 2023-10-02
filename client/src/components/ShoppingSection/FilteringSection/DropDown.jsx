import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAsync } from "../../../features/categorySlice";
import { useEffect } from "react";
import { setCategoryFilter } from "../../../features/filterSlice";

const DropDown = () => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setCategoryFilter(e.target.value));
  };

  useEffect(() => {
    dispatch(getAllCategoriesAsync());
  }, [dispatch]);
  return (
    <select
      name=""
      id=""
      onChange={handleChange}
      className={` w-44 h-12 text-sm px-4 border-2 border-black outline-none rounded-md text-slate-900 bg-white`}
    >
      <option value="" className="p-8 hidden">
        Filter By Category
      </option>
      {categories &&
        categories.map((category) => (
          <option value={category._id} className="p-8" key={category._id}>
            {category.name}
          </option>
        ))}
    </select>
  );
};

export default DropDown;
