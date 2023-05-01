import React from "react";

function Pagination({ pageNumbers, handlePageChange, currentPage }) {
  return (
    <nav className="flex justify-center">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => handlePageChange(number)}
              
              className={`page-link ${
                currentPage === number ? "bg-blue-500 text-white" : ""
              }`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
