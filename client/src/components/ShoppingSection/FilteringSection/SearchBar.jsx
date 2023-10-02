import { HiMagnifyingGlass } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { setSearchFilter } from "../../../features/filterSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <input
        type="text"
        className={` sm:w-96 w-full h-12 text-sm px-8 outline-none rounded-md text-slate-900 bg-white border-2 border-black `}
        placeholder="Search for a product.."
        onChange={(e) => dispatch(setSearchFilter(e.target.value))}
      />
      <HiMagnifyingGlass className={`absolute top-4 left-2`} />
    </div>
  );
};

export default SearchBar;
