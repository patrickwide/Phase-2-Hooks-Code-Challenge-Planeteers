import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ planeteers, sortByAge }) {
  console.log(sortByAge); // true or false
  const currentYear = new Date().getFullYear();
  const planeteersWithAge = planeteers.map((planeteer) => {
    const age = currentYear - planeteer.born;
    return { ...planeteer, age };
  });

  if (sortByAge) {
    // Sort the planeteers by age
    planeteersWithAge.sort((a, b) => a.age - b.age);
  }

  return (
    <ul className="cards">
      {planeteersWithAge.map((planeteer, index) => (
        <Planeteer key={index} {...planeteer} />
      ))}
    </ul>
  );
}

export default PlaneteersContainer;
