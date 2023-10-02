const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination justify-center mt-4">
      {pageNumbers.map((page) => (
        <li
          key={page}
          className={`relative inline-flex items-center px-4 py-2 border text-sm leading-5 font-medium focus:z-10 focus:outline-none focus:border-blue-300 transition duration-150 ease-in-out ${
            currentPage === page
              ? "bg-red-500 text-white border-red-500"
              : "bg-blue text-gray-700 border-gray-300 hover:text-gray-500 focus:border-blue-300"
          }`}
        >
          <button className="page-link" onClick={() => onPageChange(page)}>
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
