import { useDispatch } from "react-redux";
import { setPriceFilter } from "../../../features/filterSlice";

const Price = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setPriceFilter(e.target.value));
  };
  return (
    <div>
      <h1 className="flex  text-xl font-bold my-2">Price</h1>
      <div className="flex gap-2 p-t-2">
        <input
          type="radio"
          id="p1"
          value="20000"
          name="category"
          onChange={handleChange}
        />
        <label htmlFor="p1" className="text-sm">
          Above 20000
        </label>
      </div>
      <div className="flex gap-2 p-t-2">
        <input
          type="radio"
          id="p2"
          value="40000"
          name="category"
          onChange={handleChange}
        />
        <label htmlFor="p2" className="text-sm">
          Above 40000
        </label>
      </div>
      <div className="flex gap-2 p-t-2">
        <input
          type="radio"
          id="p4"
          value="80000"
          name="category"
          onChange={handleChange}
        />
        <label htmlFor="p4" className="text-sm">
          Above 80000
        </label>
      </div>
      <div className="flex gap-2 p-t-2">
        <input
          type="radio"
          id="p5"
          value="100000"
          name="category"
          onChange={handleChange}
        />
        <label htmlFor="p5" className="text-sm">
          Above 100000
        </label>
      </div>
    </div>
  );
};

export default Price;
