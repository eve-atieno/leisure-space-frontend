import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Filter from "../Filter";

function Spaces({ spaces, setSpaces }) {
  const [selectedFilter, setSelectedFilter] = useState(0);

  const filteredSpaces = spaces.filter((space) => {
    if (selectedFilter === 0) {
      // Show all spaces
      return true;
    } else if (selectedFilter === 1) {
      // Show only available spaces
      return space.available;
    } else if (selectedFilter === 2) {
      // Show only premium spaces
      return space.premium;
    }
  });

  return (
    <div className="categories justify-centre">
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {filteredSpaces.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredSpaces.map((space) => (
            <Cards key={space.id} spaces={space} setSpaces={setSpaces} />
          ))}
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
