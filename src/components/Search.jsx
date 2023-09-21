import React from "react";

const Search = ({ handleSearchText }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="type to search..."
        onChange={(e) => handleSearchText(e.target.value)}
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default Search;
