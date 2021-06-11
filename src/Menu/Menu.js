import React from "react";
import MenuEntry from "../MenuEntry/MenuEntry";
import classes from "./Menu.module.css";

const Menu = ({ content }) => {
  return (
    <div className={classes.Menu}>
      {content.map((menuEntryContent) => (
        <MenuEntry {...menuEntryContent} key={menuEntryContent.id}></MenuEntry>
      ))}
    </div>
  );
};

export default Menu;
