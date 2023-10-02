import DropDown from "./DropDown";
import SearchBar from "./SearchBar";

const Filter = () => {
  return (
    <div className="sm:flex sm:flex-row sm:items-center sm:justify-between flex flex-col gap-4 basis-full px-12">
      <SearchBar />
      <DropDown />
    </div>
  );
};

export default Filter;
