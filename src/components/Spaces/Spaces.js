import React from 'react'
import { useState } from "react";
//import "../App.css";
//import { list, list2 } from "../assets/cards-list";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Filter from "../Filter";
import "./styles.css";

function Spaces (){
  const [selectedFilter, setSelectedFilter] = useState(0);
    return (
     
        <div className="categories">
          <NavBar/>
          <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Cards/>
      <Footer/>
    </div>
   );
 }
 

export default Spaces;
