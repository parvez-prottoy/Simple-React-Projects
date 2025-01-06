const Pagination = ({ totalPage = 10, onPageChange, currentPage }) => {
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);
  return (
    <section className="py-2">
      <div className="flex justify-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="bg-gray-200 p-2 rounded-md"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pages.map((pageNu) => (
          <button
            onClick={() => onPageChange(pageNu)}
            key={pageNu}
            className={`bg-gray-200 p-2 rounded-md w-9 ${
              currentPage === pageNu && "bg-green-400"
            }`}
          >
            {pageNu}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="bg-gray-200 p-2 rounded-md"
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Pagination;
