import React from "react";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination";
import { useState } from "react";

function Spaces({
  handleSearch,
  handleSort,
  searchQuery,
  sortOption,
  filteredSpaces,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentSpaces = filteredSpaces.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredSpaces.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="categories justify-centre">
  <div className="flex items-center justify-between w-full px-4 sm:px-10 py-3 bg-white ">
    <div className="relative">
      <input
        type="text"
        className="w-24 sm:w-40 px-2 sm:px-4 py-1 sm:py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-gray-400 focus:ring-0"
        placeholder="Search"
        onChange={handleSearch}
        value={searchQuery}
      />
      <svg
        className="absolute w-4 sm:w-5 h-4 sm:h-5 text-gray-400 right-2 sm:right-3 top-2 sm:top-3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
    <div className="relative">
      <select
        className="w-24 sm:w-40 px-2 sm:px-4 py-1 sm:py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-gray-400 focus:ring-0"
        onChange={handleSort}
        value={sortOption}
      >
        <option value="">Sort by</option>
        <option value="location">Location (A-Z)</option>
        <option value="price">Price (Low-High)</option>
      </select>
    </div>
  </div>

  {filteredSpaces.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2 sm:px-0">
      {currentSpaces.map((spaces) => (
        <Cards spaces={spaces} key={spaces.id} />
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2 sm:px-0">
      {new Array(12).fill(0).map((_, i) => (
        <div className="flex flex-col justify-center items-center">
          <div className="w-44 sm:w-64 h-44 sm:h-64 bg-gray-200 rounded-lg"></div>
          <div className="w-20 sm:w-32 h-2 sm:h-4 bg-gray-200 rounded-lg mt-2"></div>
          <div className="w-20 sm:w-32 h-2 sm:h-4 bg-gray-200 rounded-lg mt-2"></div>
          <div className="w-20 sm:w-32 h-2 sm:h-4 bg-gray-200 rounded-lg mt-2"></div>
        </div>
      ))}
    </div>
  )}
  <Pagination
   pageNumbers={pageNumbers}
   handlePageChange={handlePageChange}
   currentPage={currentPage}
  />
</div>

  );
}

export default Spaces;

       
