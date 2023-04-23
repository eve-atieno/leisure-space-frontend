import React from 'react'
import { useState } from "react";
//import "../App.css";
//import { list, list2 } from "../assets/cards-list";
import Cards from "../Cards/Cards";

import Filter from "../Filter";


function Spaces (){
  const [selectedFilter, setSelectedFilter] = useState(0);
    return (
     
        <div className="categories justify-centre">
         
          <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Cards/>
     
    </div>
   );
 }
 

export default Spaces;
