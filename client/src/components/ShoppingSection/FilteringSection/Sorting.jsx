import { BsArrowDown, BsFilterLeft } from "react-icons/bs";
import { setSortFilter } from "../../../features/filterSlice";
import { useDispatch } from "react-redux";

const Sorting = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSortFilter(e.target.value));
  };
  return (
    <div className="sm:flex sm:flex-row sm:items-center text-lg flex flex-col gap-4 basis-full mx-12 my-6 p-4 border-2 border-black">
      <div className="flex items-center ">
        <BsFilterLeft className="text-2xl" />
        <BsArrowDown className="text-xl" />
        <p>Sort Based On</p>
      </div>
      <div className="flex gap-2 p-t-2">
        <input
          type="radio"
          id="all"
          value=""
          name="category"
          className="hidden"
          onChange={handleChange}
        />
        <label htmlFor="all" className=" cursor-pointer">
          All
        </label>
      </div>
      <div className="flex gap-2 p-t-2">
        <input
          type="radio"
          id="Newest"
          value="createdAt"
          name="Newest"
          onChange={handleChange}
          className="hidden"
        />
        <label htmlFor="Newest" className="cursor-pointer ">
          Newest
        </label>
      </div>
      <div className="flex gap-2 p-t-2">
        <input
          type="radio"
          id="popular"
          value="-ratings"
          name="popular"
          className="hidden"
          onChange={handleChange}
        />
        <label htmlFor="popular" className="cursor-pointer ">
          Most Popular
        </label>
      </div>
      <div className="flex gap-2 p-t-2">
        <input
          type="radio"
          id="Cheapest"
          value="price"
          name="category"
          onChange={handleChange}
          className="hidden"
        />
        <label htmlFor="Cheapest" className="cursor-pointer">
          Cheapest
        </label>
      </div>
      <div className="flex gap-2 p-t-2">
        <input
          type="radio"
          id="Most expensive"
          value="-price"
          name="category"
          onChange={handleChange}
          className="hidden"
        />
        <label htmlFor="Most expensive" className="cursor-pointer ">
          Most expensive
        </label>
      </div>
    </div>
  );
};

export default Sorting;
