import React from "react";
import { useState } from "react";
//import "../App.css";
//import { list, list2 } from "../assets/cards-list";
import Cards from "../Cards/Cards";

import Filter from "../Filter";

function Spaces({ spaces, setSpaces }) {
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <div className="categories justify-centre">
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {spaces.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {spaces.map((space) => {
            return <Cards key={space.id} spaces={space} setSpaces={setSpaces} />;
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {new Array(12).fill(0).map((_, i) => (
            <div className="flex flex-col justify-center items-center">
              <div className="w-64 h-64 bg-gray-200 rounded-lg"></div>
              <div className="w-32 h-4 bg-gray-200 rounded-lg mt-2"></div>
              <div className="w-32 h-4 bg-gray-200 rounded-lg mt-2"></div>
              <div className="w-32 h-4 bg-gray-200 rounded-lg mt-2"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Spaces;