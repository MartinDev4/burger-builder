import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import classes from "./DarkThemeButton.css";
import * as actions from "../../../store/actions/index";

const darkTheme = (props) => {
  const [darkThemeState, setDarkThemeState] = useState(props.darkTheme);
  localStorage.setItem("darkTheme", darkThemeState);

  useEffect(() => {
    props.onSwitchTheme(darkThemeState);
  }, [darkThemeState]);

  return (
    <div className={classes.Container} style={props.stl}>
      <p>Enable Dark Theme</p>
      <input
        type="checkbox"
        checked={darkThemeState}
        className={classes.Check}
        onChange={() => setDarkThemeState((prevState) => !prevState)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkTheme: state.burgerBuilder.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchTheme: (value) => dispatch(actions.switchTheme(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(darkTheme);
