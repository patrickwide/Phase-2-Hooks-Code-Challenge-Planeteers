import React, { useState, useEffect } from "react";
import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planeteers, setPlaneteers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortByAge, setSortByAge] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8003/planeteers")
      .then((response) => response.json())
      .then((data) => setPlaneteers(data));
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredPlaneteers = planeteers.filter((planeteer) => {
    const nameMatch = planeteer.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const bioMatch = planeteer.bio
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return nameMatch || bioMatch;
  });

  const createPlaneteer = (newPlaneteer) => {
    fetch("http://localhost:8003/planeteers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlaneteer),
    })
      .then((response) => response.json())
      .then((data) => setPlaneteers([...planeteers, data]))
      .catch((error) => console.error(error));
  };

  const handleSort = (isChecked) => {
    setSortByAge(isChecked);
    console.log(sortByAge);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} onSort={handleSort} />
      <RandomButton createPlaneteer={createPlaneteer} />
      <PlaneteersContainer
        planeteers={filteredPlaneteers}
        sortByAge={sortByAge}
      />
      {filteredPlaneteers.length === 0 && <p>No results found.</p>}
    </div>
  );
}

export default App;
