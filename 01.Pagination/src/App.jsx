import { useState } from "react";
import Pagination from "./components/Pagination";
import Products from "./components/Products";
import { dummyData } from "./database/dummyData.js";
import Filter from "./components/Filter.jsx";

const App = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (page) => setCurrentPage(page);
  const handleChangeItemsPerPage = (itemsNu) => {
    setItemsPerPage(itemsNu);
    setCurrentPage(1);
  };
  return (
    <>
      <header className="h-[3.5rem] bg-indigo-500 flex items-center justify-center text-2xl text-white font-bold">
        <h1>Pagination</h1>
      </header>
      <main className="container mx-auto">
        <Filter onItemsPerPageChange={handleChangeItemsPerPage} />
        <Products data={currentItems} />
        <Pagination
          onPageChange={handlePageChange}
          totalPage={Math.ceil(dummyData.length / itemsPerPage)}
          currentPage={currentPage}
        />
      </main>
    </>
  );
};

export default App;
