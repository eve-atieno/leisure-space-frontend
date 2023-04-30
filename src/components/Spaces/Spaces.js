import React from "react";
import Cards from "../Cards/Cards";

function Spaces({
  handleSearch,
  handleSort,
  searchQuery,
  sortOption,
  filteredSpaces,
  }) {

  return (
    <div className="categories justify-centre">
           <div className="flex items-center justify-between w-full px-10 py-3 bg-white ">
          <div className="relative">
            <input
              type="text"
              className="w-40 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-gray-400 focus:ring-0"
              placeholder="Search"
              onChange={handleSearch}
              value={searchQuery}
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3"
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
              className="w-40 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-gray-400 focus:ring-0"
              onChange={handleSort}
              value={sortOption}
            >
              <option value="">Sort by</option>
              <option value="location">Location (A-Z)</option>
              <option value="price">Price (Low-High)</option>
            </select>
          </div>
        </div>

{/* 
      {filteredSpaces.length  ? ( */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredSpaces.map((spaces) => (
            <Cards spaces={spaces} key={spaces.id} />
          ))}
        </div>

       {/* ) : (  */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
       {new Array(12).fill(0).map((_, i) => (
          <div className="flex flex-col justify-center items-center">
            <div className="w-64 h-64 bg-gray-200 rounded-lg"></div>
            <div className="w-32 h-4 bg-gray-200 rounded-lg mt-2"></div>
            <div className="w-32 h-4 bg-gray-200 rounded-lg mt-2"></div>
            <div className="w-32 h-4 bg-gray-200 rounded-lg mt-2"></div>
          </div>
        ))} 
      </div>
      )}  */}
    </div>
  );
}

export default Spaces;
