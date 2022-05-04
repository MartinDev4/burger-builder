import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import classes from "./DarkThemeButton.css";
import * as actions from "../../../store/actions/index";

const darkTheme = (props) => {
  const isDarkTheme = useSelector((state) => state.burgerBuilder.darkTheme);
  const [darkThemeState, setDarkThemeState] = useState(isDarkTheme);

  useEffect(() => {
    props.onSwitchTheme(darkThemeState);
    localStorage.setItem("darkTheme", darkThemeState);
  }, [darkThemeState]);

  return (
    <div className={classes.Container} style={props.stl}>
      <p>Enable Dark Theme</p>
      <input
        type="checkbox"
        checked={isDarkTheme}
        className={classes.Check}
        onChange={() => setDarkThemeState((prevState) => !prevState)}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchTheme: (value) => dispatch(actions.switchTheme(value)),
  };
};

export default connect(null, mapDispatchToProps)(darkTheme);
