import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useCustomPagination from "./CustomPaginationHook";

function App() {
  const {
    currentPage,
    totalPages,
    isLastPage,
    isFirstPage,
    goToNextPage,
    goToPreviousPage,
  } = useCustomPagination();

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={goToPreviousPage} disabled={isFirstPage}>
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button onClick={goToNextPage} disabled={isLastPage}>
            Next
          </button>
          <p>Total Pages: {totalPages}</p>
          <p>Current Page: {currentPage}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
