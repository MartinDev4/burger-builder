import React from "react";

import classes from "./Order.css";

const order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span className={classes.ings} key={ig.name}>
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div
      className={classes.Order}
      style={
        props.status
          ? { border: "2px solid limegreen" }
          : { border: "2px solid red" }
      }
    >
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
      <p>
        Status:{" "}
        <i>
          <span
            style={props.status ? { color: "limegreen" } : { color: "red" }}
          >
            {props.status ? "Ready" : "Not Ready"}
          </span>
        </i>
      </p>
    </div>
  );
};

export default order;
