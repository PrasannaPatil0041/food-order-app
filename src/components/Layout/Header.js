import React from "react";
import HeaderButton from "../UI/HeaderButton";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>Delicify</h1>
      <HeaderButton onClick={props.onShow} />
    </header>
  );
};

export default Header;
