import React from 'react'
import { useState } from "react";
//import "./Spaces.css";
//import { list, list2 } from "../assets/cards-list";
import Cards from "../Cards/Cards";
import Filter from "../Filter";


function Spaces (){
  const [selectedFilter, setSelectedFilter] = useState(0);
    return (
      
      <>
        <div className="categories">
          
          <Filter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />      
      
        </div>
       
          < Cards />          
        
      </>
    
   );
 }
 

export default Spaces;
