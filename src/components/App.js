import React from 'react'
import { useState } from "react";
import "./App.css";
import { list, list2, list3, list4,list5, list6, list7, } from "./assets/cards-list";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Header from "./components/Header";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} /> };
      {selectedFilter == 2 ? <Cards list={list} /> : <Cards list={list3} /> };
      {selectedFilter == 3 ? <Cards list={list} /> : <Cards list={list4} /> }
    </div>
  );
}

export default App;
