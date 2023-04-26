import React, { useState } from "react";

function SearchBar({ onSearch, onSort }) {
  const [text, setText] = useState("");
  const [sortByAge, setSortByAge] = useState(false);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    onSearch(newText);
  };

  const handleSort = (event) => {
    const isChecked = event.target.checked;
    setSortByAge(isChecked);
    onSort(isChecked);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={handleChange}
      />
      <br />
      <label>
        Sort by age:
        <input type="checkbox" checked={sortByAge} onChange={handleSort} />
      </label>
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
