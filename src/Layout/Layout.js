import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const { menuContent, headerContent, children } = props;
  const { user, content, compteur } = headerContent;

  return (
    <div className={classes.Layout}>
      <Header
        pseudo={user.firstname + compteur}
        message={content.greetingMessage}
      ></Header>
      <Menu content={menuContent}></Menu>
      {children}
    </div>
  );
};

export default Layout;

/*
const listKeyValues = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
}
{ ...listKeyValues}
*/
