import React from 'react'
import { useState } from "react";
//import "../App.css";
//import { list, list2 } from "../assets/cards-list";
import Cards from "../Cards/Cards";

import Filter from "../Filter";


function Spaces ({spaces, setSpaces}){

  const [selectedFilter, setSelectedFilter] = useState(0);

    return (
     
        <div className="categories justify-centre">
         
          <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div className="
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2
      ">
      {spaces.map((space) => {
        return (
          <Cards
            key={space.id}
            spaces={space}
            setSpaces={setSpaces}
          />
        );
      })}
      </div>
     
    </div>
   );
 }
 

export default Spaces;
