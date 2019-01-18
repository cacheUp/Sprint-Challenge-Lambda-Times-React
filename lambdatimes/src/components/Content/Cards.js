import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(cardItem => (
        <Card card={cardItem} />
      ))}
    </div>
  );
};

Cards.PropTypes = {
  cards: PropTypes.array
};
// Make sure you include prop types for all of your incoming props

export default Cards;
