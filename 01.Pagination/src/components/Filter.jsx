const Filter = ({ onItemsPerPageChange }) => {
  return (
    <section className="pt-4">
      <div className="flex justify-end items-center gap-1 text-[18px]">
        <label htmlFor="itemsPerPage" className="font-semibold">
          Items Per Page :
        </label>
        <select
          onChange={(e) => onItemsPerPageChange(e.target.value)}
          className="px-4 py-2 rounded-md"
          name=""
          id=""
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
