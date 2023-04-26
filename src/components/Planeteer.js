import React, { useState } from "react";

function Planeteer({ name, pictureUrl, quote, bio, twitter, country, age }) {
  const [showQuote, setShowQuote] = useState(false);

  const toggleQuote = () => {
    setShowQuote(!showQuote);
  };

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={pictureUrl}
          alt={name + " profile picture"}
          className="card__image"
          onClick={toggleQuote}
          onError={(e) => {
            e.target.src =
              "https://cdn.leonardo.ai/users/0d7ed76d-2878-4817-ba45-7d9f13b566b9/generations/9a693dab-9c6d-4306-90e6-2bd1c4b02e54/RPG_40_A_detailed_illustration_of_a_hiker_holding_a_map_wearin_3.jpg";
            e.target.alt = "Default picture";
          }}
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <BioOrQuote showQuote={showQuote} quote={quote} bio={bio} />
          <div className="card__detail">
            <p>{twitter}</p>
            <Location country={country} />
            <p>Age: {age}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;

function Location(props) {
  const { country } = props;

  return (
    <div className="card__detail">
      {country === "USA" ? <p>USA-based</p> : <p>Working overseas</p>}
    </div>
  );
}

function BioOrQuote({ showQuote, quote, bio }) {
  if (showQuote) {
    return <p className="card__text">{quote}</p>;
  } else {
    return <p className="card__text">{bio}</p>;
  }
}
