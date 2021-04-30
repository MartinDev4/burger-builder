import React from "react";
import { useSelector } from "react-redux";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxy from "../../../hoc/Auxy/Auxy";
import DarkThemeButton from "../../UI/DarkThemeButton/DarkThemeButton";

const sideDrawer = (props) => {
  const isDarkTheme = useSelector((state) => state.burgerBuilder.darkTheme);
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Auxy>
      <Backdrop show={props.open} clicked={props.closed} />
      <div
        className={attachedClasses.join(" ")}
        onClick={props.closed}
        style={
          isDarkTheme
            ? { backgroundColor: "#393b39" }
            : { backgroundColor: "#fff" }
        }
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
        <div>
          <DarkThemeButton stl={{ left: "30%" }} />
        </div>
      </div>
    </Auxy>
  );
};

export default sideDrawer;
