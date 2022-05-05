import React from "react";

import classes from "./BuildControl.css";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      -
    </button>
    {props.amount}
    <button className={classes.More} onClick={props.added}>
      +
    </button>
    <p>
      Price: <span style={{ color: "#036704" }}>{props.price}$</span>
    </p>
  </div>
);

export default buildControl;
