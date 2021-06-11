import React from "react";
import classes from "./MenuEntry.module.css";
import { Link } from "react-router-dom";

const MenuEntry = ({ background, name, path }) => {
  return (
    <div style={{ backgroundColor: background }} className={classes.MenuEntry}>
      <Link to={path} style={{ backgroundColor: background }}>
        {name}
      </Link>
    </div>
  );
};

export default MenuEntry;
